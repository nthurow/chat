angular.module('superchat').factory('topicService', function ($rootScope, $timeout) {

    var topicDb = {

        nick: [
            {desc: "Work"},
            {desc: "Packers"},
            {desc: "Linux"}
        ],
        lysha: [
            {desc: "The other guy"},
            {desc: "The little guy"},
            {desc: "Gardening"}
        ]
    };

    return {

        getTopicsForUser: function (userId) {

            return topicDb[userId];
        },

        addTopicForUser: function (userId, topicDesc) {

            $timeout(function () {

                topicDb[userId].push({desc: topicDesc});
            }, 500);
        },

        removeTopicForUser: function (userId, topic) {

            var index = _.indexOf(topicDb[userId], topic);


            $timeout(function () {

                topicDb[userId].splice(index, 1);

            }, 500);
        }
    };
});