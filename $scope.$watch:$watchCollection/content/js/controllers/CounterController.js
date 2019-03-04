function CounterController ($scope) {
    this.count = 44;

    this.increment = function increment(){
        this.count++;
    };

    this.decrement = function decrement(){
        this.count--;
    };

    $scope.$watch(function() {
        return this.count;
    }.bind(this), function(newValue, oldValue) {
        console.log(newValue, oldValue);
    });
}

angular
    .module('app')
    .controller('CounterController', CounterController)