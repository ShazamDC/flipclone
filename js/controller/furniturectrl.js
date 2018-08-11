app.controller("furniturectrl",function($scope,furniturefac,checkoutfac){
    var promise = furniturefac.callServer();
    promise.then(function(data){
        furniturefac.fillItems(data);
         },function(err){
        $scope.err = err;
    });
    $scope.data=furniturefac.item;
    $scope.addToCart=(obj)=>{
        checkoutfac.add(obj);    
        }
});