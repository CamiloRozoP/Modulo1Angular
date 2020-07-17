import { Component, OnInit, HostBinding } from '@angular/core';
import {vehiculo } from './../models/vehiculo';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  @HostBinding ('attr.class') cssClass = 'col-md-5';
  Vehiculos: string[];
  carros: vehiculo[];
  nombre: string;
  contador: number=1;
  constructor() { 
    this.nombre= 'camilo';
    this.Vehiculos=['Chevrolet','Mazda','Audi'];
    this.carros=[];
  }

  ngOnInit(): void {
  }

  enviar(placa, marca ):boolean{
    if(marca.value ==""|| placa.value==""){
      alert("porfavor ingrese todos los campos");
    }else{
      this.carros.push(new vehiculo(placa.value,marca.value,this.contador));
      this.contador++;
      console.log(this.carros);
      marca.value="";
      placa.value="";
      
      

    }
    

    return false;
  }

}
