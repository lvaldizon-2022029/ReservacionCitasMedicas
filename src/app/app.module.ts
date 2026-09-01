import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // 1. Importar RouterModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CitaListComponent } from './components/cita-list/cita-list.component';

@NgModule({
  declarations: [
    AppComponent // CitaListComponent NO va aquí por ser standalone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // 2. Resuelve el error de 'router-outlet'
    CitaListComponent // 3. Se importa aquí por ser standalone
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }