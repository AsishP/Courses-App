(function () {
    'use strict';

    angular
        .module('CoursesModule')
        .controller('CoursesAppDisplayController', CoursesAppDisplayController);

    //CoursesAppDisplayController.$inject = ['$location'];
    //CoursesAppDisplayController.$inject = ['$q'];

    function CoursesAppDisplayController($scope, DisplayCoursesFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CoursesAppDisplayController';
        $scope.Courses = [];

        activate();

        function loadCourses() {
            var promiseGet = DisplayCoursesFactory.getCourses();
            promiseGet.then(function (resp) {
                $scope.Courses = resp;
            }, function (err) {
                $scope.Message = "Error " + err.status;
            });
        }

        function activate() {
            ////Test data
            //$scope.Courses = DisplayCoursesFactory.getTestCourses();

            //Live data
            loadCourses();
        }
    }
})();
