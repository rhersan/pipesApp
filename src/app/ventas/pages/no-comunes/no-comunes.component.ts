import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  nombre  : string = 'Ricardo';
  genero  : string = 'masculino';
 // clientes: any[]  = ['SORIANA','OXXO', 'FDA'];
  clientes: string[] = ['a', 'b', 'c', 'd','e','f','g','h','i','j'];

  invitacionMap = {
    'femenino': 'invitarla',
    'masculino': 'invitarlo'
  }


  
  messageMapping =       {
        '=0': 'no tenemos ningún cliente esperando', 
        '=1': 'tenemos un cliente esperando.', 
        '=2': 'tenemos 2 clientes esperando.',
        'other': 'tenemos # clientes esperando.'
      };

      cambiarNombre(){
        if(this.genero === 'masculino')
        {
          this.nombre = 'Ángelica';
          this.genero = 'femenino';
        }else {
          this.nombre = "Ricardo";
          this.genero = 'masculino';
        }
      }

      borrarCTE(){
          this.clientes.shift();
      }

      persona = {
        nombre: 'Ricardo',
        edad: 26,
        direccion: 'Nuevo Leon'
      }

      //Json Pipe
      heroes=[
        {
          nombre: 'superman',
          vuela: true
        },
        {
          nombre: 'spiderman',
          vuela: true
        },
        {
          nombre: 'acuaman',
          vuela: false
        },
        {
          nombre: 'mujer maravilla',
          vuela: true
        },
    ];

    // Async Pipe

    miObservable =  interval(5000);//EMITE VALORES NUMERICOS : 0.1.2.3.4.5.6

    valorPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data de promesa');
      }, 3500);
    });

}
