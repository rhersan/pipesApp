import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  


  nombre:string = 'riCardo hERNandez';
  valor: number = 1000;
  obj = {
    nombre: 'Ricardo hernandez'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }

  constructor(private primengConfig: PrimeNGConfig) {}
  
  ngOnInit():void{
    this.primengConfig.ripple = true;
  }

}
