app.controller('myCtrl',function($scope){   
    var employees=[
        {name:"Ben",Dob:new Date("November 23,1968"),gender:"Male",salary:50000.234},
        {name:"Arine",Dob:new Date("November 24,1940"),gender:"Male",salary:50000.234},
        {name:"thapa",Dob:new Date("November 13,1950"),gender:"Male",salary:50000.234},
        {name:"kumar",Dob:new Date("November 25,1970"),gender:"Male",salary:50000.234},
        {name:"dan",Dob:new Date("November 26,1974"),gender:"Male",salary:50000.234}
    ];
    $scope.employees=employees;
    $scope.rowlimit=3;
});