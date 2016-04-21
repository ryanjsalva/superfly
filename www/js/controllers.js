angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope, $window, $ionicModal, $ionicPopup, $timeout) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
	$scope.loginData = {};
	$scope.modal;

	// deployment environment
	$scope.environment = $window.environment;


	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
		  $scope.closeLogin();
		}, 1000);
	};

	// popup of logout
	$scope.infoApp2 = function() {
		var alertPopup = $ionicPopup.alert({
			template: '<center>You are going out!!</center>',
			buttons: [
				{
					text: 'Ok',
					type: 'button-dark'
				}
			]
		});
		alertPopup.then(function(res) {
			console.log('Out!!');
		});
	};

	
	/* --------------------------------------------------------------- */
	// hockeyapp fake crash
	$scope.fakeCrash = function() {
		console.log('fake crash');
		hockeyapp.addMetaData(null, null, { someCustomProp: 23, anotherProp: "Custom Value" });
		hockeyapp.forceCrash();
	}
	
	// hockeyapp send feedback
	$scope.sendFeedback = function() {
		console.log('send feedback');
		hockeyapp.feedback();
	}
	
	// hockeyapp check for update
	$scope.checkForUpdate = function() {
		console.log('check for HockeyApp update');
		hockeyapp.trackEvent(null, null, 'Check for Update');
		hockeyapp.checkForUpdate();
	}
	// --------------------------------------------------------------- */


	/* --------------------------------------------------------------- */
	// codepush check for update
	$scope.codePush = function() {
		console.log('check for code push update');
		
		var updateDialogOptions = {
			updateTitle: "Update",
			mandatoryUpdateMessage: "You will be updated to the latest version of the app.",
			mandatoryContinueButtonLabel: "Continue",
			optionalUpdateMessage: "Update available. Install?",
			optionalIgnoreButtonLabel: "No",
			optionalInstallButtonLabel: "Yes",
		};

		var syncOptions = {
			installMode: InstallMode.ON_NEXT_RESTART,
			updateDialog: updateDialogOptions
		};
		
		var syncStatusCallback = function (syncStatus) {
			switch (syncStatus) {
				// Result (final) statuses
				case SyncStatus.UPDATE_INSTALLED:
					$ionicPopup.alert({
						title: "Sweet Success",
						template: "Restart your app to complete the update."
					});
					break;
				case SyncStatus.UP_TO_DATE:
					$ionicPopup.alert({
						title: "All Good",
						template: "Your application is up to date."
					});
					break;
				case SyncStatus.UPDATE_IGNORED:
					console.log("The user decided not to install the optional update.");
					break;
				case SyncStatus.ERROR:
					$ionicPopup.alert({
						title: "@#$!",
						template: "Something went wrong. Try restarting your app."
					});
					break;

				// Intermediate (non final) statuses
				case SyncStatus.CHECKING_FOR_UPDATE:
					console.log("Checking for update.");
					break;
				case SyncStatus.AWAITING_USER_ACTION:
					console.log("Alerting user.");
					break;
				case SyncStatus.DOWNLOADING_PACKAGE:
					console.log("Downloading package.");
					break;
				case SyncStatus.INSTALLING_UPDATE:
					console.log("Installing update");
					break;
			}
		};

		window.codePush.sync(syncStatusCallback, syncOptions);
	}
	// --------------------------------------------------------------- */

})

.controller('NewsCtrl',function($scope, $ionicPopup){
	$scope.infoApp = function() {
		var alertPopup = $ionicPopup.alert({
			title: '<b class="assertive">Template</b>',
			template: '<center>Template ionSunset </center>',
			buttons: [
				{
					text: 'Ok',
					type: 'button-dark'
				}
			]
		});
		alertPopup.then(function(res) {
			console.log('Thank you!!');
		});
	};
})

.controller('MenuActiveCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});
