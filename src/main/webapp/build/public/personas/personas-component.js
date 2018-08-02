var module=angular.module("mpApp.public");module.component("personasComponent",{templateUrl:"build/public/personas/search.html",bindings:{view:"@"},controller:["$log","$location","personasResource","personasResourceUpdate",function(e,o,n,s){var r=this;r.textoPersonaBusqueda="",r.personas="",r.personas.editMode=!1,this.handleModeChange=function(o){if(o.editMode){s.update(o,function(n,s){e.info("update persona successfuly "+n),o.editMode=!o.editMode,r.searchPersonas()},function(o){e.error("error while persisting"+o)})}else o.editMode=!o.editMode},this.reset=function(e){e.editMode=!1},this.searchPersonas=function(){n.queryAll(function(o,n){e.info("lo busco "+o),r.personas=o},function(o){e.info("search error "+o)})},this.nuevaPersona=function(){o.path("/nuevaPersona")},this.borrarPersona=function(o){n.delete({id:o.id},function(o,n){e.info("delete persona successfuly "+o),r.searchPersonas()},function(o){e.error("error while persisting"+o)})},r.searchPersonas()}]}),module.component("nuevaPersonaComponent",{templateUrl:"build/public/personas/detail.html",bindings:{view:"@"},controller:["$q","$http","comm","$log","$location","personasResource",function(e,o,n,s,r,t){this.persona={},this.savePersonas=function(){s.error(this.persona.nombre),t.save(this.persona,function(e,o){s.info("saved evento successfuly "+e),r.path("/personas")},function(e){s.error("error while persisting"+e)})},this.cancelPersona=function(){r.path("/personas")}}]});