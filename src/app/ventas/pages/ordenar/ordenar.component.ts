import { Component, OnInit } from '@angular/core';
import { IHeroe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  bandera    : boolean = false;
  statusColor: boolean = true;
  statusVuela: boolean = true;
  statusOrden: boolean = true;

  typeOrder: number = 0;

  heroes: IHeroe[] = [
    {
      nombre: 'super man',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: false,
      color: Color.verde
    }
  ];
  cambiarMayuscula(){
    this.bandera = !this.bandera;
  }
  
  cambiarOrden(tipo: number = 0){
    this.typeOrder = tipo;
    this.statusOrden = !this.statusOrden;

  }
}
