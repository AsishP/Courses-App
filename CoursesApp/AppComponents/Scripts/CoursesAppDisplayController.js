(function () {
    'use strict';

    angular
        .module('CoursesModule')
        .controller('CoursesAppDisplayController', CoursesAppDisplayController);

    //CoursesAppDisplayController.$inject = ['$location'];

    function CoursesAppDisplayController($scope, DisplayCoursesFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CoursesAppDisplayController';
        $scope.Courses = [];

        activate();

        function activate() {
            $scope.Courses = DisplayCoursesFactory.getTestCourses();
        }
    }
})();
