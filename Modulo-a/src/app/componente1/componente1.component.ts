import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {vehiculo } from './../models/vehiculo';
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  @Input () carro: vehiculo;
  
  constructor() { 

  }

  ngOnInit(): void {
  }

}
