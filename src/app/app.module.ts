import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { FormularioCitaComponent } from './components/formulario-cita/formulario-cita.component';
import { ListadoCitasComponent } from './components/listado-citas/listado-citas.component';

@NgModule({
  declarations: [
    App,
    FormularioCitaComponent,
    ListadoCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }