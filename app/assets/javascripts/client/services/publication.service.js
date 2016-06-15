(function () {
    'use strict';

    angular
    .module('comuniapp')
    .factory('PublicationService', PublicationService);

    PublicationService.$inject = ['$http', '$window'];
    function PublicationService($http, $window) {
        var service = {};

        service.index = index;
        service.show = show;
        service.create = create;
        service.update = update;
        service.destroy = destroy;

        return service;

        function index(callback) {
            $http.get('/api/publications/index.json')
            .success(function (response) {
                callback(response);
            })
            .error(function(response){
                console.log('error in index');
            });
        }

        function show(publication_id, callback) {
            $http.get('/api/publications/show.json?publication_id=' + publication_id)
            .success(function (response) {
                callback(response);
            })
            .error(function(response){
                console.log('error in show');
            });
        }

        function create(publication, callback) {
            $http.get('/api/publications/create.json?title=' + publication.title + '&body=' + 
                publication.body + '&image_url=' + publication.image_url + '&has_image=' + 
                publication.has_image)
            .success(function (response) {
                callback(response);
            })
            .error(function(response){
                console.log('error in create');
            });
        }

        function update(publication, callback) {
         $http.get('/api/publications/update.json?publication_id=' + publication.id + '&title=' + publication.title + '&body=' + 
                publication.body + '&image_url=' + publication.image_url + '&has_image=' + 
                publication.has_image)
         .success(function (response) {
            callback(response);
        })
         .error(function(response){
            console.log('error in update');
        });
     }

     function destroy(publication_id, callback) {
        $http.get('/api/publications/destroy.json?publication_id=' + publication_id)
        .success(function (response) {
            callback(response);
        })
        .error(function(response){
            console.log('error in destroy');
        });
    }
}
})();