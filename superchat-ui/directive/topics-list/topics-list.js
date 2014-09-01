angular.module('superchat')
    .controller('topicsListCtrl', function ($scope, topicService) {

        $scope.userIsLoggedInUser = $scope.userId === "nick" ? true : false;
        $scope.userDisplay = $scope.userIsLoggedInUser ? "My" : $scope.userId;
        $scope.topics = topicService.getTopicsForUser($scope.userId);

        $scope.removeTopic = function(topic) {

            topicService.removeTopicForUser($scope.userId, topic);
        };

        $scope.addTopic = function(newTopic) {

            topicService.addTopicForUser($scope.userId, newTopic);
        };
    })
    .directive('topicsList', function () {
        return {
            restrict: 'E',
            replace: true,
            controller: 'topicsListCtrl',
            scope: {
                userId: '@userId'
            },
            templateUrl: 'directive/topics-list/topics-list.html',
            link: function (scope, element, attrs, fn) {


            }
        };
    });
