<!DOCTYPE html>
<html lang="en" ng-app="sonyApp">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sony Products</title>
  <style>
    /* CSS styles */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #000;
      color: #fff;
      padding: 10px 0;
      text-align: center;
    }
    nav {
      display: flex;
      justify-content: space-around;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
    }
    nav a:hover {
      background-color: #333;
    }
    section {
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .product {
      width: 300px;
      margin: 10px;
      padding: 20px;
      background-color: #f4f4f4;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .product img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      margin-bottom: 15px;
    }
    footer {
      background-color: #000;
      color: #fff;
      padding: 10px 0;
      text-align: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .social-icons a {
      color: #fff;
      text-decoration: none;
      font-size: 24px;
      margin: 0 10px;
      transition: color 0.3s ease;
    }
    .social-icons a:hover {
      color: #3b5998; /* Change color to your preferred social media brand color */
    }
  </style>
</head>
<body ng-controller="SonyController">
  <header>
    <nav>
      <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  <section>
    <div class="product" ng-repeat="product in products">
      <img ng-src="{{product.image}}" alt="{{product.name}}">
      <h2>{{product.name}}</h2>
      <p>{{product.description}}</p>
    </div>
  </section>
  <footer>
    <div>
      <p>&copy; 2022 Sony. All rights reserved.</p>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-twitter-square"></i></a>
        <a href="#"><i class="fab fa-instagram-square"></i></a>
        <!-- Add more social media icons as needed -->
      </div>
      <form>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <textarea placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </footer>

  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <script>
    // AngularJS code
    angular.module('sonyApp', [])
      .controller('SonyController', function($scope) {
        $scope.products = [
          {
            name: 'Sony Product 1',
            image: 'path_to_image_1.jpg',
            description: 'Description of Sony Product 1'
          },
          {
            name: 'Sony Product 2',
            image: 'path_to_image_2.jpg',
            description: 'Description of Sony Product 2'
          },
          // Add more products as needed
        ];
      });
  </script>
</body>
</html>
