import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { IData } from '../../interfaces/shared.interface';
import { getClubePorApelido } from '../../utilidades/clubes';

@Component({
  selector: 'app-multi-dropdown-image',
  templateUrl: './multi-dropdown-image.component.html',
  styleUrls: ['./multi-dropdown-image.component.css']
})
export class MultiDropdownImageComponent {
  @Input() data: IData[] = [];
  dataSelected: IData[] = [];

  selectedData!: string[];

  @Output() onSelectedData: EventEmitter<string[]> = new EventEmitter();

  filterValue: string = '';

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) { }

  clubeSelecionado() {
    let _items: IData[] = [];
    this.selectedData.map(data => {

      const clube = getClubePorApelido(data, false);
      const _data: IData = {
        codigo: clube.apelido,
        descricao: clube.nome,
        imagem: clube.logo
      };
      _items.push(_data);
    });
    this.dataSelected = _items;
    this.onSelectedData.emit(this.selectedData);
  }
}
