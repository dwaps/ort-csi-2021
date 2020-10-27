<?php

require_once __DIR__.'/../vendor/autoload.php';

require_once __DIR__.'/../app/config/Router.php';

$view = $response['view'];
$attributes = $response['attributes'];

require_once $view;
