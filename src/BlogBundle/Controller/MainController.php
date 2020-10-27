<?php

require_once __DIR__.'/../Repository/ArticleRepository.php';

class MainController {
  private $path_of_views = __DIR__."/../Resources/views";

  public function homeAction() {
    $articles = (new ArticleRepository())->findAll();

    $response = array(
      "view" => $this->path_of_views."/home.php",
      "attributes" => [
        "articles" => $articles
      ]
    );
    
    return $response;
  }

  public function adminAction() {
    $response = array(
      "view" => $this->path_of_views."/admin.php",
      "attributes" => []
    );
    return $response;
  }

  public function notFoundAction() {
    $response = array(
      "view" => $this->path_of_views."/404.php",
      "attributes" => []
    );
    return $response;
  }
}
