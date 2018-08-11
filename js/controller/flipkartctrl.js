app.controller("flipcartctrl",function($scope,checkoutfac){
  if(localStorage && localStorage.item){
      checkoutfac.item=JSON.parse(localStorage.item);

  }

    $scope.sortOptions=false;
    $scope.noofproducts=checkoutfac.item.length;
    $scope.updation=()=>{
        console.log('inside updation');
        $scope.noofproducts=checkoutfac.item.length;
        if(localStorage){
        localStorage.item=JSON.stringify(checkoutfac.item);
        }
    }
   $scope.showSortOptions=()=>{
    $scope.sortOptions=false;
}
$scope.UnshowSortOptions=()=>{
    $scope.sortOptions=true;
}

});