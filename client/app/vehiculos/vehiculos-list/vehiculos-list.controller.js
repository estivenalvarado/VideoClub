'use strict';

(function(){

class VehiculosListComponent {
  constructor() {
    this.vehiculos = [{
      id:1,
      marca:"Kia",
      descripcion:"Color gris, transmisión automática, cuatro puertas",
      valorAlquiler: 101723,
      tipo:"Pequeño"
    },
  {
    id:2,
    marca:"Kia",
    descripcion:"Color gris, transmisión automática, cuatro puertas",
    valorAlquiler: 201723,
    tipo:"Mediano"
  },
  {
    id:3,
    marca:"Renault",
    descripcion:"Color blanco, transmisión manual, aire acondicionado, cuatro puertas",
    valorAlquiler: 138960,
    tipo:"Grande"
  },
  {
    id:4,
    marca:"Kia",
    descripcion:"Color negro, transmisión automática, aire acondicionado, cuatro puertas",
    valorAlquiler: 216903,
    tipo:"Mediano"
  },
  {
    id:5,
    marca:"Kia",
    descripcion:"Color blanco, transmisión manual, aire acondicionado",
    valorAlquiler: 280000,
    tipo:"Gama alta"
  }
  ];
  }

$onInit(){
  for(var i= 0; i < this.vehiculos.length; i++){
    this.vehiculos[i].valorAlquiler = (this.vehiculos[i].valorAlquiler + (this.vehiculos[i].valorAlquiler * 0.15));
    if (this.vehiculos[i].tipo == "Mediano"){
      this.vehiculos[i].valorDescuento = (this.vehiculos[i].valorAlquiler - (this.vehiculos[i].valorAlquiler * 0.20));
    }else {
      this.vehiculos[i].valorDescuento = "No tiene"
    }
    console.log(this.vehiculos[i].valorAlquiler);
  }
}

}

angular.module('videoClubApp')
  .component('vehiculosList', {
    templateUrl: 'app/vehiculos/vehiculos-list/vehiculos-list.html',
    controller: VehiculosListComponent,
    controllerAs: 'vm'
  });

})();
