angular.module('superchat', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('superchat').config(function($routeProvider) {

    $routeProvider.when('/chat',{templateUrl: 'partial/chat/chat.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('superchat').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
