function ContactCard() {
    return {
        transclude: {
            name: 'h1',
            desc: '?p'
        },
        template: `
            <div>
                <span ng-transclude="name"> Contact </span>
                <div ng-transclude ="desc"> Nothing here... </div>
            </div>
        `
    }
}

angular
    .module('app')
    .directive('contactCard', ContactCard);