import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouterModule } from './router/app-router.module';

import { SharedModule } from './shared/shared.module';

import { JogosModule } from '../app/jogos/jogos.module';
import { SimuladorModule } from '../app/simulador/simulador.module';
import { RodadasModule } from '../app/rodadas/rodadas.module';
import { TabelaModule } from '../app/tabela/tabela.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './shared/components/interceptor-loading/interceptor-loading.component';
import { BrasileiraoComponent } from './brasileirao/pages/brasileirao/brasileirao.component';
import { BrasileiraoModule } from './brasileirao/brasileirao.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    BrasileiraoModule,
    JogosModule,
    SimuladorModule,
    TabelaModule,
    RodadasModule,

    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
