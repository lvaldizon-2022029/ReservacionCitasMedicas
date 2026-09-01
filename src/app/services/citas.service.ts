import { Injectable } from '@angular/core';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private citas: Cita[] = [];
  private idCounter = 1;

  constructor() {
    // Opcional: cargar desde localStorage
    const guardadas = localStorage.getItem('citas');
    if (guardadas) {
      this.citas = JSON.parse(guardadas);
      this.idCounter = this.citas.reduce((max, c) => Math.max(max, +c.id), 0) + 1;
    }
  }

  private guardarEnStorage() {
    localStorage.setItem('citas', JSON.stringify(this.citas));
  }

  crearCita(cita: Omit<Cita, 'id' | 'estado'>): Cita {
    const nueva: Cita = {
      ...cita,
      id: String(this.idCounter++),
      estado: 'Programada'
    };
    this.citas.push(nueva);
    this.guardarEnStorage();
    return nueva;
  }

  listarCitas(): Cita[] {
    return [...this.citas];
  }

  listarCitasPorEstado(estado: Cita['estado']): Cita[] {
    return this.citas.filter(c => c.estado === estado);
  }

  obtenerCitaPorId(id: string): Cita | undefined {
    return this.citas.find(c => c.id === id);
  }

  editarCita(id: string, cambios: Partial<Cita>): Cita | null {
    const index = this.citas.findIndex(c => c.id === id);
    if (index === -1) return null;

    const citaEditada: Cita = { ...this.citas[index], ...cambios };
    this.citas[index] = citaEditada;
    this.guardarEnStorage();
    return citaEditada;
  }

  cancelarCita(id: string): Cita | null {
    const index = this.citas.findIndex(c => c.id === id);
    if (index === -1) return null;

    this.citas[index].estado = 'Cancelada';
    this.guardarEnStorage();
    return this.citas[index];
  }

  eliminarCita(id: string): boolean {
    const index = this.citas.findIndex(c => c.id === id);
    if (index === -1) return false;

    this.citas.splice(index, 1);
    this.guardarEnStorage();
    return true;
  }

  tieneChoqueHorario(medico: string, fecha: string, hora: string, idExcluir?: string): boolean {
    return this.citas.some(
      c =>
        c.medico === medico &&
        c.fecha === fecha &&
        c.hora === hora &&
        c.estado !== 'Cancelada' &&
        (!idExcluir || c.id !== idExcluir)
    );
  }

  obtenerResumen() {
    const total = this.citas.length;
    const programadas = this.citas.filter(c => c.estado === 'Programada').length;
    const atendidas = this.citas.filter(c => c.estado === 'Atendida').length;
    const canceladas = this.citas.filter(c => c.estado === 'Cancelada').length;
    return { total, programadas, atendidas, canceladas };
  }
}