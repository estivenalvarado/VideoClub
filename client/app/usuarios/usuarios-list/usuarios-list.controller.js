'use strict';

(function(){

class UsuariosListComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
    this.query={
      order: 'nombres',
      limit: 5,
      page:1
    };
  }

  $onInit(){
  	this.usuariosService.query().$promise
  	.then(response => {
  		console.log("USUARIOS OK",response);
      this.usuarios = response;
  	})
  	.catch(err => {
  		console.log("ERROR",err);
  	});


  }
}

UsuariosListComponent.$inject = ['usuariosService'];
angular.module('videoClubApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs: 'vm'
  });

})();
