var module = angular.module('mpApp.public');


module.factory('personasResource', function ($resource, comm) {
    return $resource(comm.url +'/personas/:id', {
            id : '@id'
        }, {
        'queryAll': {
            method: 'GET',
            isArray: true
        },
        'update' : {
            method : 'PUT'
        },
        'delete' : {
            method : 'DELETE'
        }
    });
});

module.factory('personasByTextoResource', function ($resource, comm) {
    return $resource(comm.url +'/personas/personaTexto', {
          
        }, {        
        'queryByTexto': {
            method: 'GET',
            isArray: true
        }
    });
});
