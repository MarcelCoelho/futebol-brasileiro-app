import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { IData } from '../../interfaces/shared.interface';

import { DropdownFilterOptions } from 'primeng/dropdown';

@Component({
  selector: 'app-dropdown-image',
  templateUrl: './dropdown-image.component.html',
  styleUrls: ['./dropdown-image.component.css']
})
export class DropdownImageComponent implements OnInit, OnChanges {

  @Input() data: IData[] = [];

  selectedData!: IData;

  @Output() onSelectedData: EventEmitter<IData> = new EventEmitter();

  filterValue: string = '';

  constructor(

  ) {

  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges) { }

  myResetFunction(options: DropdownFilterOptions) {
    // if (options) {
    //   options.reset();
    //   this.filterValue = '';
    // }
  }

  clubeSelecionado() {
    this.onSelectedData.emit(this.selectedData);
  }

}
