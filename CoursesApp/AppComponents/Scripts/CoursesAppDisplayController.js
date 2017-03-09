(function () {
    'use strict';

    angular
        .module('CoursesModule')
        .controller('CoursesAppDisplayController', CoursesAppDisplayController);

    CoursesAppDisplayController.$inject = ['$location'];

    function CoursesAppDisplayController($location, DisplayCoursesFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CoursesAppDisplayController';
        vm.Courses = [];

        activate();

        function activate() {
            vm.Courses = DisplayCoursesFactory.getTestCourses();
        }
    }
})();
