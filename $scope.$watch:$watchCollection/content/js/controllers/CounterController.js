function CounterController ($scope) {
    this.count = 44;
    this.countList = [];

    this.increment = function increment(){
        this.count++;
        this.countList.unshift({id: this.count});
    };

    this.decrement = function decrement(){
        this.count--;
        this.countList.unshift({id: this.count});
    };

    $scope.$watchCollection(function() {
        return this.countList;
    }.bind(this), function(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        console.log("New: ", newValue, "Old: ", oldValue);
    });
}

angular
    .module('app')
    .controller('CounterController', CounterController)