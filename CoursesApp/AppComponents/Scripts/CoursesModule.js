(function () {
    'use strict';
    
   angular.module('CoursesModule', [
        // Angular modules 
        'ngRoute'
        // Custom modules 
        // 3rd Party Modules
    ])
    //.config(function($routeProvider, $locationProvider) {
    //    $routeProvider
    //    .when('/DisplayCourses/', {
    //    templateUrl: '/AppComponents/Partials/DisplayCourses.html',
    //    controller: 'CoursesAppDisplayController',
    //    resolve: {
    //       // I will cause a 1 second delay
    //       delay: function ($q, $timeout) {
    //           var delay = $q.defer();
    //           $timeout(delay.resolve, 1000);
    //           return delay.promise;
    //       }
    //   }
    //  })
    //  .otherwise('/', {
    //      templateUrl: '/AppComponents/Partials/DisplayCourses.html',
    //      controller: 'CoursesAppDisplayController'
    //  });

    //    // configure html5 to get links working on jsfiddle
    //    $locationProvider.html5Mode({
    //        enabled: true,
    //        requireBase: false
    //    });
    //});
})();