angular.module('ae').controller('AeController', function () {
  this.data = "lololol";
  this.trueValue = true;
  this.falseValue = false;

  this.addData = function (value) {
    this.data += "haha";
  };

  this.collection = [
    "a",
    "list",
    "of items, etc"
  ];

  this.numbers = [
    1,
    30,
    "50"
  ];

  this.renew = function (extra) {
    this.data += extra;
  }
});
