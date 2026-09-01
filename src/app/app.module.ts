import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularioCitaComponent } from './components/formulario-cita/formulario-cita.component';
import { ListadoCitasComponent } from './components/listado-citas/listado-citas.component';
import { ResumenCitasComponent } from './components/resumen-citas/resumen-citas.component';
import { CitasContainerComponent } from './components/citas-container/citas-container.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioCitaComponent,
    ListadoCitasComponent,
    ResumenCitasComponent,
    CitasContainerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}