<!DOCTYPE html>
<html>
<head>
	<title>Formulaire de contact</title>
	<link rel="stylesheet" href="styleForm.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
	<?php include 'navbar.php';?>
	<form>
	  <label> Nom: </label> <br>
	  <input type="text" placeholder="" /> <br>
	  <label> Prénom: </label> </br>
	  <input type="text" placeholder="" /><br>
	  <label> Email: </label> </br>
	  <input type="text" placeholder="" /><br>
	  <label> Message: </label> </br>
	  <input type="textarea" placeholder="" />
	<br>
	<button> Envoyer </button>
	</form>
</body>
</html>