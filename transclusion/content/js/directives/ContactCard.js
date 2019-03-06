function ContactCard() {
    return {
        transclude: true,
        template: `
            <div>
                <h2> Contact </h4>
                <div ng-transclude></div>
            </div>
        `
    }
}

angular
    .module('app')
    .directive('contactCard', ContactCard);