import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MaterialModule } from '../material/material.module';

import { MenuComponent } from './components/menu/menu.component';
import { AppRouterModule } from '../router/app-router.module';
import { DropdownImageComponent } from './components/dropdown-image/dropdown-image.component';
import { MultiDropdownImageComponent } from './components/multi-dropdown-image/multi-dropdown-image.component';

import { SvgComponent } from './components/svg/svg.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    MenuComponent,
    DropdownImageComponent,
    MultiDropdownImageComponent,
    SvgComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    MaterialModule,
    AppRouterModule
  ],
  exports: [
    MenuComponent,
    DropdownImageComponent,
    MultiDropdownImageComponent,
    SvgComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
