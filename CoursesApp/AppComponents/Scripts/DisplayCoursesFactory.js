(function () {
    'use strict';

    angular
        .module('CoursesModule')
        .factory('DisplayCoursesFactory', DisplayCoursesFactory);

    DisplayCoursesFactory.$inject = ['$http'];
    DisplayCoursesFactory.$inject = ['$q'];

    function DisplayCoursesFactory($http, $q) {
        var service = {
            getCourses: getCourses,
            getTestCourses: getTestCourses
        };

        var Courses = [];
        var TestCourses = [
            {CourseID: '1111', CourseName: 'Test1', CourseContent: "Test Content for Courses 1", SelectedCourses: "Type 1"},
            { CourseID: '1112', CourseName: 'Test2', CourseContent: "Test Content for Courses 2", SelectedCourses: "Type 2" },
            { CourseID: '1114', CourseName: 'Test3', CourseContent: "Test Content for Courses 3", SelectedCourses: "Type 3" }
        ];

        function manageQueryStringParameter(paramToRetrieve) {
            var params =
            document.URL.split("?")[1].split("&");
            var strParams = "";
            for (var i = 0; i < params.length; i = i + 1) {
                var singleParam = params[i].split("=");
                if (singleParam[0] == paramToRetrieve) {
                    return singleParam[1];
                }
            }
        }

        var hostWebUrl;
        var appWebUrl;
        //The SharePoint App where the App is actualy installed
        hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
        //The App web where the component to be accessed by the app are deployed
        appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));


        function getCourses() {

            var deferred = $q.defer();
            //Get the SharePoint Context object based upon the URL
            var ctx = new SP.ClientContext(appWebUrl);
            var appCtxSite = new SP.AppContextSite(ctx, hostWebUrl);

            var web = appCtxSite.get_web(); //Get the Web 

            var list = web.get_lists().getByTitle("Courses"); //Get the List

            var query = new SP.CamlQuery(); //The Query object. This is used to query for data in the List

            query.set_viewXml('<View><RowLimit></RowLimit>10</View>');

            var items = list.getItems(query);

            ctx.load(list); //Retrieves the properties of a client object from the server.
            ctx.load(items);

            //Execute the Query Asynchronously
            ctx.executeQueryAsync(
                Function.createDelegate(this, function () {
                    var itemInfo = '';
                    var enumerator = items.getEnumerator();

                    while (enumerator.moveNext()) {
                        var currentListItem = enumerator.get_current();

                        Courses.push({
                            CourseID: currentListItem.get_item('Course_x0020_ID'),
                            CourseName: currentListItem.get_item('Course_x0020_Name'),
                            CourseContent: currentListItem.get_item('Course_x0020_Content'),
                            CourseType: currentListItem.get_item('Courses')
                        });
                    }
                    deferred.resolve(Courses);
                }),
                Function.createDelegate(this, function (sender, args) {
                    deferred.reject('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
                })
                );
            return deferred.promise;
        }
        function getTestCourses() {
            return TestCourses;
        }

        return service;
    }
})();