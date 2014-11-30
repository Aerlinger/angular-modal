// Code goes here

var app = angular.module("app", ["ui.bootstrap"]);

app.controller("AppController", function($scope, $modal) {

  $scope.showPopup = function(isFoo) {

    var modal = $modal.open({

      templateUrl: isFoo ? "app/partials/foopopup.html" : "app/partials/testpopup.html",
      // controller: function($scope) {
      //   $scope.data = {
      //     title: "title",
      //     details: "details"
      //   }
      // }
      controller: isFoo ? FooPopupController : TestPopupController,
      size: "sm"
    })

    modal.data = {
      title: isFoo ? "foo bar" : "test title",
      details: isFoo ? "foo details" : "test details"
    }
  }
});



//https://github.com/exratione/angularjs-controller-inheritance
angular.inherits = function(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false
    }
  });
};


app.directive("popup", function() {
  return {

    restrict: "AE",
    transclude: true,
    replace: true,
    scope: true,
    templateUrl: "app/partials/testpopup.html"

  }
});

var PopupController = function($scope, $modalInstance) {
  $scope.data = $modalInstance.data;
  $scope.confirm = $modalInstance.close;
  $scope.dismiss = $modalInstance.dismiss;
};

var TestPopupController = function($scope, $modalInstance) {
  // TestPopupController.super_.apply(this, arguments);

  PopupController.apply(this, arguments);
  TestPopupController.prototype = Object.create(PopupController.prototype);

  $scope.transcludedMessage = "this is transcluded content for the Test Popup";
};

var FooPopupController = function($scope, $modalInstance)
{
  PopupController.apply(this, arguments);
  FooPopupController.prototype = Object.create(PopupController.prototype);

  $scope.foo = "this is a recipe to really foobar your ng app"
};

