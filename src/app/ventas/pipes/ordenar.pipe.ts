import { Pipe, PipeTransform } from '@angular/core';
import { IHeroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: IHeroe[], status: boolean = true, type: number = 0): IHeroe[] {
    switch (type) {
      case 0:
        if (status) {
          heroes = heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
        } else {
          heroes = heroes.sort((a, b) => (a.nombre > b.nombre) ? -1 : 1);
        }
        break;
      case 1:
        if (status) {
          heroes = heroes.sort((a, b) => (a.vuela > b.vuela) ? 1 : -1);
        } else {
          heroes = heroes.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);
        }
        break;
      case 2:
        if (status) {
          heroes = heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
        } else {
          heroes = heroes.sort((a, b) => (a.color > b.color) ? -1 : 1);
        }
        break;
      default:
        if (status) {
          heroes = heroes.sort((a, b) => (a.vuela > b.vuela) ? 1 : -1);
        } else {
          heroes = heroes.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);
        }
        break;
    }


    return heroes;
  }

}
