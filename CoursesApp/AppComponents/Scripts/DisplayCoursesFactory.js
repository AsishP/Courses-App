(function () {
    'use strict';

    angular
        .module('CoursesModule')
        .factory('DisplayCoursesFactory', DisplayCoursesFactory);

    DisplayCoursesFactory.$inject = ['$http'];

    function DisplayCoursesFactory($http) {
        var service = {
            getCourses: getCourses,
            getTestCourses: getTestCourses
        };

        var Courses = [];

        return service;

        function getCourses() {

        }
        function getTestCourses() {
            Courses.push({CourseID: '1111', CourseName: 'Test1', CourseContent: "Test Content for Courses 1", CourseType: "Type 1"});
            Courses.push({CourseID: '1112', CourseName: 'Test2', CourseContent: "Test Content for Courses 2", CourseType: "Type 2"});
            Courses.push({ CourseID: '1114', CourseName: 'Test3', CourseContent: "Test Content for Courses 3", CourseType: "Type 3" });
        }
    }
})();