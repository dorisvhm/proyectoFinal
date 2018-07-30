
var module = angular.module('mpApp.public');

module.component('personasComponent', {
    templateUrl: 'app/public/personas/search.html',
    bindings: {
        view: "@"
    },
    controller: function ($log, $location, personasResource) {

        var self = this;
        self.textoPersonaBusqueda = "";
        self.personas = "";



        //  Promise chaining
        this.searchPersonaByTexto = function () {



        };

        this.searchPersonas = function () {

            var successCallback = function (data, responseHeaders) {
                $log.info('lo busco ' + data);
                self.personas = data;

            };

            var errorCallback = function (responseHeaders) {
                $log.info('search error ' + responseHeaders);
            };


            personasResource.queryAll(successCallback, errorCallback);



        };

        this.nuevaPersona = function () {
            $location.path('/nuevaPersona');
        };


        this.borrarPersona = function (persona) {

            var successCallback = function (data, responseHeaders) {
                $log.info('delete persona successfuly ' + data);
                self.searchPersonas();
            };

            var errorCallback = function (responseHeaders) {
                $log.error('error while persisting' + responseHeaders);
            };


            personasResource.delete({"id": persona.id}, successCallback, errorCallback);

        };

        this.actualizarPersona = function (id) {
            $log.info('persona:  ' + id);
            $location.path('/nuevaPersona');
        };


        self.searchPersonas();

    }
});

module.component('nuevaPersonaComponent', {
    templateUrl: 'app/public/personas/detail.html',
    bindings: {
        view: "@"
    },
    controller: function ($q, $http, comm, $log, $location, personasResource) {

        this.persona = {};

        this.savePersonas = function () {

            var successCallback = function (data, responseHeaders) {
                $log.info('saved evento successfuly ' + data);
                $location.path('/personas');
            };

            var errorCallback = function (responseHeaders) {
                $log.error('error while persisting' + responseHeaders);
            };

            $log.error(this.persona.nombre);

            personasResource.save(this.persona, successCallback, errorCallback);

        };

        this.cancelPersona = function () {
            $location.path('/personas');
        };

    }



});
