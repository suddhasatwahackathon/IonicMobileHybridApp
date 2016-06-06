// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova'])

.run(function($ionicPlatform,$cordovaSplashscreen, $timeout, $rootScope, $ionicLoading, $ionicHistory, $cordovaProgress, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }


    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      $cordovaProgress.hide();
      if(toState.name!=='jokes-detail'){
        $cordovaProgress.showSimpleWithLabelDetail(true, "Loading", "Please wait") 
}   

    });
    $rootScope.goBack = function(){
      if($state.current.name==='jokes-detail'){
        $state.go("jokes");
      }else if($state.current.name==='jokes'){
        $state.go("tab.dash")
      }else{
        $ionicHistory.goBack();
        $cordovaProgress.hide();
      }
    };
     $ionicPlatform.onHardwareBackButton(function() {
      $rootScope.goBack();
     });
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('intro', {
    url: '/intro',
    templateUrl: 'templates/get-started.html',
    controller:"introCtrl"
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller:"loginCtrl"    

  })
  .state('register', {
    url: '/register',
    templateUrl: 'templates/signup.html',
    controller:"registerCtrl"           
  })
    .state('forgot-password', {
    url: '/forgot-password',
    templateUrl: 'templates/forgot-password.html',
    controller:"forgotCtrl" 

  })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller:'DashCtrl'
      }
    }
  })

  .state('jokes', {
      url: '/jokes',
      templateUrl: 'templates/jokes.html',
      controller: 'ChatsCtrl'
  })
    .state('jokes-detail', {
      url: '/jokes-detail/:chatId',
      views: {
        '': {
          templateUrl: 'templates/jokes-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  $ionicConfigProvider.tabs.position('bottom');

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro');

});
