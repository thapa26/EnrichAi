app.config(function($routeProvider){
    $routeProvider
.when("/home", {
    templateUrl : "Html/homepage.html"
})
.when("/about", {
    templateUrl : "Html/aboutpage.html"
})
.when("/contact", {
    templateUrl : "Html/contactpage.html"
}).otherwise({
    templateUrl:"Html/notFoundpage.html"
});
});
