import { Pipe, PipeTransform } from '@angular/core';
import { IEstadio } from 'src/app/shared/interfaces/brasileirao/brasileirao.interface';

@Pipe({
  name: 'sortEstadio'
})
export class SortEstadioPipe implements PipeTransform {

  transform(value: IEstadio[]): IEstadio[] {

    if (value) {
      return value.sort(this.compare);
    }
    return [];
  }

  compare(a: IEstadio, b: IEstadio) {
    if (a.apelido.toLocaleLowerCase() > b.apelido.toLocaleLowerCase())
      return 1;
    else if (a.apelido.toLocaleLowerCase() < b.apelido.toLocaleLowerCase())
      return -1
    else
      return 0;
  }

}
