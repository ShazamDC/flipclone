app.controller("checkoutctrl",function($scope,checkoutfac){
$scope.data=checkoutfac.item;
console.log(checkoutfac.item);
$scope.delete=(id)=>{
    checkoutfac.item = checkoutfac.item.filter(itemObject=>{
        if(itemObject.id==id){
            return false;
        }else{
            return true;
        }
    });
    console.log(checkoutfac.item);
    $scope.data=checkoutfac.item;
    localStorage.item=checkoutfac.item;
}
});
