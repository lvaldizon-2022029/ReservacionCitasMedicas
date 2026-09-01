import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { FormularioCitaComponent } from './components/formulario-cita/formulario-cita.component';
import { ListadoCitasComponent } from './components/listado-citas/listado-citas.component';
import { ResumenCitas } from './components/resumen-citas/resumen-citas.component';
import { CitasContainer } from './components/citas-container/citas-container.component';
import { Header } from './components/header/header.component';

@NgModule({
  declarations: [
    App,
    FormularioCitaComponent,
    ListadoCitasComponent,
    ResumenCitas,
    CitasContainer,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
