<?php

/**
 * return PDO Object
 */
function connectDb() {
	try {
		$dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
		
		if ($dbh == null){
	        throw new PDOException('failed to connect');
	    }
		
		// set to utf-8
		$dbh->query('SET NAMES utf8');
		
		return $dbh;
		
	} catch (PDOException $e) {
		echo $e -> getMessage();
		exit ;
	}
}
?>