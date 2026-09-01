import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Cita {
  id: number;
  nombrePaciente: string;
  dpi: string;
  telefono: string;
  especialidad: string;
  fecha: string;
  hora: string;
  estado: 'Programada' | 'Atendida' | 'Cancelada';
}

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private citasSource = new BehaviorSubject<Cita[]>([
    {
      id: 1,
      nombrePaciente: 'María Gómez',
      dpi: '3012345670101',
      telefono: '55123456',
      especialidad: 'Medicina General',
      fecha: '2026-09-10',
      hora: '09:00',
      estado: 'Programada'
    }
  ]);
  
  citas$ = this.citasSource.asObservable();

  agregarCita(citaData: Omit<Cita, 'id' | 'estado'>): void {
    // Validar duplicidad básica por DPI y fecha
    const citasActuales = this.citasSource.getValue();
    const existe = citasActuales.some(
      c => c.dpi === citaData.dpi && c.fecha === citaData.fecha && c.estado !== 'Cancelada'
    );

    if (existe) {
      alert('Error: Ya existe una cita activa para este DPI en la misma fecha.');
      return;
    }

    const nuevaCita: Cita = {
      ...citaData,
      id: Date.now(),
      estado: 'Programada'
    };

    this.citasSource.next([nuevaCita, ...citasActuales]);
    alert('¡Cita registrada y agregada al listado con éxito!');
  }

  actualizarEstado(id: number, nuevoEstado: 'Programada' | 'Atendida' | 'Cancelada'): void {
    const citasActuales = this.citasSource.getValue();
    const actualizadas = citasActuales.map(c => 
      c.id === id ? { ...c, estado: nuevoEstado } : c
    );
    this.citasSource.next(actualizadas);
  }
}