// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  	$ionicPlatform.ready(function() {
		
		console.log('app initialized');
		hockeyapp.start(null, null, "8dc9c131976543b7a906ef360f4cd61e");
		
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
		  	cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
		  	// org.apache.cordova.statusbar required
		  	StatusBar.styleDefault();
		}
  	});
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.navBar.alignTitle('center');
  	$stateProvider

  	.state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "templates/menu.html",
		controller: 'AppCtrl'
  	})

  	.state('app.news', {
		url: "/news-feed",
		views: {
			'menuContent': {
				templateUrl: "templates/news-feed.html",
				controller: 'NewsCtrl'
	  		}
		}
 	})

  	.state('app.profile', {
		url: "/profile",
		views: {
	  		'menuContent': {
				templateUrl: "templates/profile.html"
	  		}
		}
  	})
	.state('app.followers', {
		url: "/followers",
	  	views: {
			'menuContent': {
		 		templateUrl: "templates/followers.html"
			}
	  	}
	})
	.state('app.listUsers', {
		url: "/listUsers",
	  	views: {
			'menuContent': {
		 		templateUrl: "templates/listUsers.html"
			}
	  	}
	});

  	// if none of the above states are matched, use this as the fallback
  	$urlRouterProvider.otherwise('/app/listUsers');

});
