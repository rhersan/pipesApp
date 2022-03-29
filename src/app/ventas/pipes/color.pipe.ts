
import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interface';

@Pipe({
    name: 'color'
})
export class ColorPipe implements PipeTransform {

    transform(value: Color, status: boolean = true): any {
        if (status) {

            let color: string = '';
            console.log(value);
            switch (value) {
                case Color.rojo:
                    color = 'Rojo';
                    break;
                case Color.negro:
                    color = 'Negro';
                    break;
                case Color.azul:
                    color = 'Azul';
                    break;
                case Color.verde:
                    color = 'Verde';

            }
            return color;
        }
        return value;
    }
}