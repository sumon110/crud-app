var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope) {
    console.log("this is something");

   $scope.newUser= {};
   $scope.clickUser = {};

   $scope.message = "";

    $scope.users = [{
            userName: "sumon",
            fullName: "Md Hasibur rahman sumon",
            email: "sumon751423@gmail.com"  },
        {
            userName: "Rohan",
            fullName: "Md Rohan rahman sumon",
            email: "Rohan751423@gmail.com"
        },
        {
            userName: "Jibon",
            fullName: "Md Jibon rahman sumon",
            email: "jibon751423@gmail.com"
        }
    ];

    $scope.saveUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser= {};
        $scope.message = "New user added successfully !";
    };
    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickUser = user;
    };
  $scope.updateUser = function(){
    $scope.message = " User Update successfully !";
  };
  $scope.deletUser = function (){
      $scope.users.splice( $scope.users.indexOf($scope.clickUser),1);
      $scope.message = "User Delet successfully !";
  };
  $scope.clearUser = function(){
    $scope.message = "";
  }

});
