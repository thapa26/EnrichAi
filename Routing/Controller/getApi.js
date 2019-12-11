app.controller('get', function($scope, $http ,$interval) {
    $http.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(function (response) {
        $scope.Employee = response.data;
    });
    $scope.row=10;
    // $http.get('http://www.mocky.io/v2/5df0efd631000066008f0c8a')
    // .then(function(response1){
    //     $scope.name=response1.data;
    //     $scope.addItem=function(){
    //         $scope.name.push($scope.addMe)
    //     }
    // });
    $scope.theTime=new Date().toLocaleTimeString();
    $interval(function(){
        $scope.theTime=new Date().toLocaleTimeString();},1000);
   
  });