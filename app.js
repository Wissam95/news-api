var app = angular.module("myApp", []);
app.controller("myCtr", function ($scope, $http) {
    $http.get("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=c84efbb45d9a46b29d3404a6e0953d17")
    .then(function(myData){
    $scope.news=myData.data.articles;
    });
});