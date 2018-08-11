app.controller("sportsctrl",function($scope,sportsfac,checkoutfac){
    var promise = sportsfac.callServer();
    promise.then(function(data){
        sportsfac.fillItems(data);
         },function(err){
        $scope.err = err;
    });
    $scope.data=sportsfac.item;
    $scope.addToCart=(obj)=>{
        checkoutfac.add(obj);    
        }
});