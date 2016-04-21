describe("Controllers: AppCtrl", function() {
    var $scope, ctrl, $rootScope, $ionicModal, $controller;

    beforeEach(function() {
        module('ngMock', "starter.controllers", function($provide) {
            var $Modal = jasmine.createSpyObj('$ionicModal', ['fromTemplateUrl']);
            $Modal.fromTemplateUrl.and.returnValue(successCallback);
            $provide.value('$ionicModal', $Modal);

            var $Popup = jasmine.createSpyObj('$ionicPopup', ['alert']);
            $Popup.alert.and.returnValue({});
            $provide.value('$ionicPopup', $Popup);
        });
    });

    var successCallback = {
       then: function(modallogin){
            $scope.modallogin = modallogin;
            modallogin.hide = function(){};
            modallogin.show = function(){};
        }
    };

    beforeEach(inject(function(_$controller_, _$rootScope_, $ionicModal, $ionicPopup) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $ionicModal = $ionicModal;
        $scope = $rootScope.$new();
        ctrl = $controller('AppCtrl', { $scope: $scope, $rootScope: $rootScope, $ionicModal: $ionicModal });
        
        $scope.$apply();
    }));

    describe('Upon initialization', function() {
        it('should not populate login data', function(){
            expect(Object.keys($scope.loginData).length).toBe(0);
        });

        it('should have a scope variable', function() {
            expect($scope).toBeDefined();
        })
    })
});
