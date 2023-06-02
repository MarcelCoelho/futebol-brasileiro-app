import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { getClubes } from './shared/utilidades/clubes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
