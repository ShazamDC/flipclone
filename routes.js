app.config(function($routeProvider,$locationProvider,HOME,ELECTRONICS,MEN,WOMEN,TV,FURNITURE,SPORTS,CHECKOUT,SIGNUP,LOGIN,OFFER){
$locationProvider.hashPrefix('');
$routeProvider.when(HOME,{
    templateUrl:'views/home.html',
    controller:'homectrl',
}).when(ELECTRONICS,{
    templateUrl:'views/electronics.html',
    controller:'electronicsctrl'
}).when(MEN,{
    templateUrl:'views/men.html',
    controller:'menctrl'
}).when(WOMEN,{
    templateUrl:'views/women.html',
    controller:'womenctrl'
}).when(TV,{
    templateUrl:'views/tv.html',
    controller:'tvctrl'
}).when(FURNITURE,{
    templateUrl:'views/furniture.html',
    controller:'furniturectrl'
}).when(SPORTS,{
    templateUrl:'views/sports.html',
    controller:'sportsctrl'

}).when(CHECKOUT,{
    templateUrl:'views/checkout.html',
    controller:'checkoutctrl'

}).when(OFFER,{
    templateUrl:'views/offer.html',
    controller:'homectrl'
}).when(SIGNUP,{
    templateUrl:'views/signup.html',
    

}).when(LOGIN,{
    templateUrl:'views/login.html',
    

}).otherwise({template:'Some Wrong URI U Type'});
});