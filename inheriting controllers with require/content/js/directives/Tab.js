function tab() {
	return {
		scope: {}, //each tab element will have isolate scope
		transclude: true, //because we're passing in content between the tab element
		template: `
			<div ng-if="tab.selected">
				<div ng-transclude></div>
			</div>
		`,
		require: '^^tabs', //tabs controller in parent directive
		link: function ($scope, $element, $attrs, $ctrl) {
			$scope.tab = {
				label: $attrs.label,
				selected: false
			};
			$ctrl.addTab($scope.tab);
		}
	}
}

angular
	.module('app')
	.directive('tab', tab);
