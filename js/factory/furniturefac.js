app.factory("furniturefac",function($http,$q){
    var object = {
        item:[],callServer(){
            var defer = $q.defer();
            $http.get("./furniture.json").then(function(data){
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        },addItem(obj){
            var i=new Item(obj.id,obj.name,obj.desc, obj.price, obj.color,obj.url,obj.discount,obj.paymentOptions,obj.warranty,obj.highlights);
            this.item.push(i);
        },fillItems(data){
         //   data=JSON.parse(data);
            item=data.data.electronics;    
      item.forEach(element => {
       this.addItem(element);   
      });
         }
    }
    return object;
})