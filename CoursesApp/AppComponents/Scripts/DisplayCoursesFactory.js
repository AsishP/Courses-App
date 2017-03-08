(function () {
    'use strict';

    angular
        .module('CoursesModule')
        .factory('DisplayCoursesFactory', DisplayCoursesFactory);

    DisplayCoursesFactory.$inject = ['$http'];

    function DisplayCoursesFactory($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();