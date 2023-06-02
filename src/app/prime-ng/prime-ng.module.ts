import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';

@NgModule({
  declarations: [],
  exports: [
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    DragDropModule,
    DropdownModule,
    InputTextModule,
    MultiSelectModule,
    OrderListModule
  ]
})
export class PrimeNgModule { }
