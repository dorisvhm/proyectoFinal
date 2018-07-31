var module = angular.module('mpApp.public');


module.factory('personasResource', function ($resource, comm) {
    return $resource(comm.url +'/personas/:id', {
            id : '@id'
        }, {
        'queryAll': {
            method: 'GET',
            isArray: true
        },
        
        'delete' : {
            method : 'DELETE'
        }
    });
});

module.factory('personasResourceUpdate', function ($resource, comm) {
    return $resource(comm.url +'/personas', {
           
        }, {
       
        'update' : {
            method : 'PUT'
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
