(function () {
    'use strict';

    angular
        .module('CoursesModule')
        .controller('CoursesAppDisplayController', CoursesAppDisplayController);

    CoursesAppDisplayController.$inject = ['$location']; 

    function CoursesAppDisplayController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CoursesAppDisplayController';

        activate();

        function activate() { }
    }
})();
