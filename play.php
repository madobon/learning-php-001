<?php
require_once 'constants.php';
require_once 'functions.php';

session_start();

$sessionId = session_id();
$data = isset($_POST['data']) ? $_POST['data'] : array();

$errormsg = "";

try {

	// connect to database
	$dbh = connectDb();
	
	// insert into search term
	$sql = 'INSERT INTO BGM_T_PLAY_HISTORY (PLAY_DATE, VIDEO_ID, VIDEO_DURATION, SESSION_ID, CREATE_DATE, CREATE_USER, MODIFY_DATE, MODIFY_USER) values (now(), ?, ?, ?, now(), ?, now(), ?)';
	$stmt = $dbh -> prepare($sql);
	$flag = $stmt -> execute(array($data['id'], $data['duration'], $sessionId, $sessionId, $sessionId));

	if(!$flag){
		throw new PDOException('something is wrong');
	}
	
} catch(PDOException $e) {
	$errormsg = "something is wrong";
}

	// close the connection
	$dbh = null;
	
	$data['errorMsg'] = $errormsg;
	
	echo "";
?>