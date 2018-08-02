var module=angular.module("mpApp.public");module.controller("searchEventosController",["$scope","$log","eventosResource","searchByTextoResource","searchByLugarResource","$uibModal","lugaresResource",function(e,o,n,r,a,t,u){var s=this;s.textoBusqueda,s.eventos=[],s.lugares=[],s.search=function(){o.info("Busca todas");s.textoBusqueda="",n.queryAll({max:100},function(e,o){s.eventos=e},function(e){o.info("search error "+e)})},s.searchLugares=function(){o.info("Busca todas los lugares");u.queryAll(function(e,o){s.lugares=e},function(e){o.info("search error "+e)})},s.searchByCategory=function(e){o.info("Busquedea por lugar... "+e.id);a.queryByLugar({idLugar:e.id},function(e,o){s.eventos=e},function(e){o.info("search error "+e)})},s.searchByTexto=function(){o.info("Texto a buscar... "+s.textoBusqueda);r.queryByTexto({texto:s.textoBusqueda},function(e,o){s.eventos=e},function(e){o.info("search error "+e)})},s.update=function(e){n.update(e,function(e,n){o.info("updating successfuly "+e)},function(e){o.error("error while persisting")})},s.open=function(e){s.evento=e,t.open({animation:!0,ariaLabelledBy:"modal-title-top",ariaDescribedBy:"modal-body-top",templateUrl:"./build/public/eventos/modal.html",size:"sm",controllerAs:s,controller:["$scope","$uibModalInstance",function(e,r){e.evento=s.evento,e.descrip=e.evento.descripcion,e.actualizar=function(a){e.evento.descripcion=a;n.update(e.evento,function(e,n){o.info("updating successfuly "+e)},function(e){o.error("error while persisting")}),r.dismiss("cancel")},e.cerrar=function(){r.dismiss("cancel")}}]})},s.openLugar=function(){t.open({animation:!0,ariaLabelledBy:"modal-title-top",ariaDescribedBy:"modal-body-top",templateUrl:"./build/public/eventos/newLugar.html",size:"sm",controllerAs:s,controller:["$scope","$uibModalInstance",function(e,n){e.lugar={},e.guardar=function(){u.save(e.lugar,function(e,n){o.info("save successfuly "+e),s.searchLugares()},function(e){o.error("error while persisting")}),e.cerrar()},e.cerrar=function(){n.dismiss("cancel")}}]})},s.searchLugares()}]),module.controller("newEventosController",["$scope","$log","$location","eventosResource","lugaresResource","lugaresByNombreResource",function(e,o,n,r,a,t){e.location=n.path(),e.eventos={},e.lugares=[],e.lugar={},e.save=function(){t.queryByNombre({nombre:e.lugar.nombre},function(n,r){o.info("data: "+n),""==n?(o.info("no encontro la lugar "+n),a.save(e.lugar,function(n,r){o.info("se guardo la lugar"+n),e.lugar=n,e.saveEvento()},function(e){o.error("error while persisting")})):(e.cats=n,e.lugar=e.cats[0],o.info("$scope.lugar.nombre"+e.lugar.id),o.info("$scope.lugar.nombre"+e.lugar.nombre),e.saveEvento())},function(e){o.error("error while persisting")})},e.saveEvento=function(){e.eventos.idLugar=e.lugar.id,e.eventos.lugar=e.lugar.nombre,r.save(e.eventos,function(e,r){o.info("saved evento successfuly "+e),n.path("/eventos")},function(e){o.error("error while persisting")})},e.cancel=function(){n.path("/eventos")},e.searchLugares=function(){o.info("Busca todas las lugares");a.queryAll(function(o,n){e.lugares=o},function(e){o.info("search error "+e)})},e.isOpen=!1,e.openCalendar=function(o){o.preventDefault(),o.stopPropagation(),e.isOpen=!0},e.searchLugares()}]);