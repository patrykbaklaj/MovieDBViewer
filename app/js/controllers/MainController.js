
Viewer.controller('MainController', function MainController($scope, $http){

  // API key
  var key = "c1ac6c847d5ee7887964221350a0ca7d";

  // url to search for movie list
  $scope.url = "https://api.themoviedb.org/3/search/movie?api_key=" + key + "&language=pl-PL&query=";

  // to controll ng-show on results
  $scope.showResults = false;
  // sortOrder
  $scope.sortOrder = "-vote_count";
  // movie display on page limitTo
  $scope.limit = 5;

  // variable to controll more movies button
  $scope.isMore = true;
  // function to controll more movies button
  $scope.moreMovies = function() {
    if ($scope.moviesNumber > $scope.limit) {
      $scope.limit += 5;
      if($scope.moviesNumber <= $scope.limit){
        $scope.isMore = false;
      }
    } else {
      $scope.isMore = false;
    }
  };

  // Movie search by Title
  var onListSearchComplete = function(response) {
    $scope.foundMovies = response.data;
    $scope.movieList = response.data.results;
    // show results when searching completed
    $scope.showResults = true;
    $scope.moviesNumber = response.data.results.length;
  };

  var onListError = function(reason) {
    $scope.error = reason;
    console.log("Coś poszło nie tak!");
  };

  $scope.searchList = function(searchQuery){
    $http.get($scope.url + $scope.searchQuery).then(onListSearchComplete, onListError);
  };

  // movie search by ID
  var urlId = "https://api.themoviedb.org/3/movie/";

  var onMovieSearchComplete = function(response) {
    $scope.movieItem = response.data;
  };

  var onMovieError = function(reason) {
    $scope.error = reason;
    console.log("Niestety, coś poszło nie tak!");
  };

  $scope.searchMovie = function(movieId){
    $http.get(urlId + movieId + "?api_key=" + key + "&language=pl-PL").then(onMovieSearchComplete, onMovieError);
    $scope.movieDetails = true;
  };


});
