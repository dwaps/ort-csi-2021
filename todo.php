<!DOCTYPE html>
<html>
<head>
	<title>TodoList</title>
	<link rel="stylesheet" href="style.css">
	<script src="control.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.6/angular.min.js"></script>  
</head>
<body ng-app="myApp" ng-controller="todoCtrl">
	<?php include 'navbar.php'; ?>
	<form ng-submit="todoAdd()">
	    <input type="text" ng-model="todoInput" size="50" placeholder="Add New">
	    <input type="submit" value="Add New">
	</form>
	<br>
	<div ng-repeat="x in todoList">
	    <input type="checkbox" ng-model="x.done"> <span ng-bind="x.todoText"></span>
	</div>
	<button ng-click="remove()">Remove marked</button>
</body>
</html>