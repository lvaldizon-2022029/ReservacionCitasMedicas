import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { FormularioCitaComponent } from './components/formulario-cita/formulario-cita.component';
import { ListadoCitasComponent } from './components/listado-citas/listado-citas.component';
import { ResumenCitasComponent } from './components/resumen-citas/resumen-citas.component';
import { CitasContainerComponent } from './components/citas-container/citas-container.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    App,
    FormularioCitaComponent,
    ListadoCitasComponent,
    ResumenCitasComponent,
    CitasContainerComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
