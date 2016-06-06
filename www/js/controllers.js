angular.module('starter.controllers', [])

.controller('introCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('login');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})

.controller('loginCtrl', function($scope, $state,$ionicLoading, $timeout, $cordovaProgress) {
  $timeout(function(){
  /*  $ionicLoading.hide().then(function(){
      });*/
$cordovaProgress.hide()  
  },500)
  $scope.login = function() {
    $state.go('tab.dash')
  };
})

.controller('registerCtrl', function($scope, $state,$ionicLoading, $timeout, $cordovaProgress) {
  $timeout(function(){
    /*$ionicLoading.hide().then(function(){
      });*/
  $cordovaProgress.hide()
  },500)
})
.controller('forgotCtrl', function($scope, $state,$ionicLoading, $timeout, $cordovaProgress) {
  $timeout(function(){
    /*$ionicLoading.hide().then(function(){
      });*/
  },500)
})

.controller('DashCtrl', function($scope,$timeout,$ionicLoading, $cordovaProgress) {
  $timeout(function(){
   /* $ionicLoading.hide().then(function(){
      });*/
  $cordovaProgress.hide()  
  },500)

})

.controller('ChatsCtrl', function($scope, Chats, $ionicLoading, $timeout, $cordovaProgress) {

  $timeout(function(){
   /* $ionicLoading.hide().then(function(){
      });*/
$cordovaProgress.hide()  
  },500)  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,$ionicLoading, $timeout, $ionicActionSheet, $cordovaSocialSharing, $cordovaProgress) {
  $scope.liked=true;
  $scope.unliked=false;
  $scope.favorite=true;
  $scope.unfavorite=false;  

  $timeout(function(){
 /*   $ionicLoading.hide().then(function(){
      });*/

$cordovaProgress.hide()  
  },500)
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.chat.len = Chats.len();

  $scope.like = function(){
    $scope.liked=false;
    $scope.unliked=true;
  }
  $scope.unlike = function(){
    $scope.liked=true;
    $scope.unliked=false;
  }
  $scope.fav = function(){
    $scope.favorite=false;
    $scope.unfavorite=true;
  }
  $scope.unfav = function(){
    $scope.favorite=true;
    $scope.unfavorite=false;
  }  
   $scope.shareAnywhere = function(text) {
    var link = "http://slipbeep.com",image="";
    

     $cordovaSocialSharing
        .share(text, '', '', link) // Share via native share sheet
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occured. Show a message to the user
        });

      $cordovaSocialSharing
        .shareViaTwitter(text, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occurred. Show a message to the user
        });

      $cordovaSocialSharing
        .shareViaWhatsApp(text, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occurred. Show a message to the user
        });

      $cordovaSocialSharing
        .shareViaFacebook(text, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occurred. Show a message to the user
        });      
    }

})

.controller('AccountCtrl', function($scope, $ionicLoading, $timeout, $cordovaProgress) {
    $timeout(function(){
/*    $ionicLoading.hide().then(function(){
      });*/
    $cordovaProgress.hide();
  },500)
  $scope.settings = {
    enableFriends: true
  };
});
