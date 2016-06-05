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

.controller('loginCtrl', function($scope, $state,$ionicLoading, $timeout) {
  $timeout(function(){
    $ionicLoading.hide().then(function(){
      });
  },500)
  $scope.login = function() {
    $state.go('tab.dash')
  };
})

.controller('registerCtrl', function($scope, $state,$ionicLoading, $timeout) {
  $timeout(function(){
    $ionicLoading.hide().then(function(){
      });
  },500)
})
.controller('forgotCtrl', function($scope, $state,$ionicLoading, $timeout) {
  $timeout(function(){
    $ionicLoading.hide().then(function(){
      });
  },500)
})

.controller('DashCtrl', function($scope,$timeout,$ionicLoading) {
  $timeout(function(){
    $ionicLoading.hide().then(function(){
      });
  },500)

})

.controller('ChatsCtrl', function($scope, Chats, $ionicLoading, $timeout) {

  $timeout(function(){
    $ionicLoading.hide().then(function(){
      });
  },500)  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,$ionicLoading, $timeout, $ionicActionSheet, $cordovaSocialSharing) {
   $scope.like=true;
    $scope.unlike=false;
  $timeout(function(){
    $ionicLoading.hide().then(function(){
      });
  },500)
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.chat.len = Chats.len();

  $scope.like = function(){
    $scope.like=false;
    $scope.unlike=true;
  }
  $scope.unlike = function(){
    $scope.like=true;
    $scope.unlike=false;
  }
   $scope.shareAnywhere = function(text) {
    console.log($cordovaSocialSharing);
      $cordovaSocialSharing.share(text, "This is your subject", "www/imagefile.png", "https://www.slipbeep.com");
    }
    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link);
        }, function(error) {
            alert("Cannot share on Twitter");
        });
    } 
    $scope.shareViaFacebook = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("com.facebook.katana", message, image, link).then(function(result) {
            $cordovaSocialSharing.shareViaFacebook(message, image, link);
        }, function(error) {
            alert("Cannot share on facebook");
        });
    }     
    $scope.shareViaWhatsApp = function(message, image, link) {
      alert("fb");
        $cordovaSocialSharing.canShareVia("whatsapp", message, image, link).then(function(result) {
            alert("fb  inner");
            $cordovaSocialSharing.shareViaFacebook(message, image, link);
        }, function(error) {
            alert("Cannot share on facebook");
        });
    } 
})

.controller('AccountCtrl', function($scope, $ionicLoading, $timeout) {
    $timeout(function(){
    $ionicLoading.hide().then(function(){
      });
  },500)
  $scope.settings = {
    enableFriends: true
  };
});
