<?php

session_start();

$sessionId = session_id();

$q = isset($_POST['q']) ? $_POST['q'] : '';
$maxResults = isset($_POST['maxResults']) ? $_POST['maxResults'] : '10';
$pageToken = isset($_POST['nToken']) ? $_POST['nToken'] : $_POST['pToken'];
$videoDuration = isset($_POST['videoDuration']) ? $_POST['videoDuration'] : 'any'; 

// input check TODO

if ($q && $maxResults) {
	
	// hack around with the include paths a bit so the library 'just works'
	set_include_path(dirname(__FILE__) . PATH_SEPARATOR . get_include_path());
	
	// use google library
	require_once 'Google_Client.php';
	require_once 'contrib/Google_YouTubeService.php';
	
	// use original library
	require_once 'constants.php';
	require_once 'functions.php';

	// set developer key
	$DEVELOPER_KEY = 'AIzaSyDx8fwUrXfM-V9oa8UcDB0TKARsixV_hk4';

	$client = new Google_Client();
	$client -> setDeveloperKey($DEVELOPER_KEY);
	$youtube = new Google_YoutubeService($client);

	// init
	$videos = array();
	$errormsg = "";

	try {
		// searchVideo
		$param1 = array(
			'q' => $q,
			'maxResults' => $maxResults,
			'pageToken' => $pageToken,
			'videoDuration' => $videoDuration,
			'type' => 'video'
		);
		
		$searchList = $youtube -> search -> listSearch('id,snippet', $param1);
		
		// connnect to database
/*
		$dbh = connectDb();
		
		// insert into search term
	    $sql = 'INSERT INTO BGM_T_SEARCH_CONDITION (SEARCH_DATE, KEYWORD, MAX_RESULTS, DURATION, SESSION_ID, CREATE_DATE, CREATE_USER, MODIFY_DATE, MODIFY_USER) values (now(), ?, ?, ?, ?, now(), ?, now(), ?)';
	    $stmt = $dbh->prepare($sql);
	    $flag = $stmt->execute(array($q, $maxResults, $videoDuration, $sessionId, $sessionId, $sessionId));
		
		if(!$flag){
			throw new PDOException('failed to insert');
		}
*/

		$videoIdList = array();
		
		foreach($searchList['items'] as $searchResult){
			array_push($videoIdList,$searchResult['id']['videoId']);
		}
		
		// getVideoInfo
		$param2 = array(
			'id' => implode(',', $videoIdList)
		);

		$videoInfoList = $youtube -> videos -> listVideos('contentDetails', $param2);
		
		for($i = 0; $i < count($searchList['items']); $i++){
			// add detail
			$searchList['items'][$i]['contentDetails'] = $videoInfoList['items'][$i]['contentDetails'];
			
			// change format
			$duration = new DateInterval($searchList['items'][$i]['contentDetails']['duration']);
			$durationF = $duration->h > 0 ? $duration->format('%h:%I:%S') : $duration->format('%I:%S');
			$searchList['items'][$i]['contentDetails']['duration'] = $durationF;
		}
		
	} catch (PDOException $e) {
		$errormsg = "failed to search";
		// debug
		// $errormsg = $e->getMessage();
	} catch (Google_ServiceException $e) {
		$errormsg = "failed to search";
		// debug
		// $errormsg = $e->getMessage();
	} catch (Google_Exception $e) {
		$errormsg = "failed to search";
		// debug
		// $errormsg = $e->getMessage();
	}
	
	// close the connection
	$dbh = null;
	
	$searchList['errorMsg'] = $errormsg;
	
	// set header
	header('Content-type: application/json');
	
	// encode to json strings
	echo json_encode($searchList);
}
?>