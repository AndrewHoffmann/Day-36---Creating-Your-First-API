(function() {
    'use strict';

    angular
        .module('node')
        .factory('API', function($http) {

            return {
                getData:() => {                              // will get all users             
                    return $http({
                    method: 'GET',
                    url: "http://localhost:8080/people"     
                    })                                           
                },

                createData:(data)=>{                        // will create(post) a user
                    return $http({
                    method: 'POST',
                    data: data,
                    url: "http://localhost:8080/people"
                    })
                },

                getSingleData:(data)=>{                         // will get 1 person
                    return $http({
                    method: 'GET',
                    url: "http://localhost:8080/people/${id}"
                    })
                },

                deleteData:(data)=>{                        // will delete new user
                    return $http({
                    method: 'DELETE',
                    url: "http://localhost:8080/people/${id}" 
                    })
                }
            };

        })
})();