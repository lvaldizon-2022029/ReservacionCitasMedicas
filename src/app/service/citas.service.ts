import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cita, EstadoCita } from '../model/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private keyLocalStorage = 'citas_medicas_data';

  private citasIniciales: Cita[] = [
    {
      id: '1',
      nombrePaciente: 'Carlos López',
      dpi: '1234567890101',
      telefono: '55551234',
      especialidad: 'Medicina General',
      medico: 'Dr. García',
      fecha: '2026-09-02',
      hora: '10:00',
      estado: 'Programada'
    }
  ];

  private citasSubject = new BehaviorSubject<Cita[]>(this.cargarDeLocalStorage());
  citas$: Observable<Cita[]> = this.citasSubject.asObservable();

  private citaEditarSubject = new BehaviorSubject<Cita | null>(null);
  citaEditar$ = this.citaEditarSubject.asObservable();

  constructor() {}

  private cargarDeLocalStorage(): Cita[] {
    const data = localStorage.getItem(this.keyLocalStorage);
    return data ? JSON.parse(data) : this.citasIniciales;
  }

  private guardarEnLocalStorage(citas: Cita[]): void {
    localStorage.setItem(this.keyLocalStorage, JSON.stringify(citas));
    this.citasSubject.next(citas);
  }

  obtenerCitas(): Cita[] {
    return this.citasSubject.getValue();
  }

  agregarCita(cita: Omit<Cita, 'id' | 'estado'>): boolean {
    const actual = this.obtenerCitas();
    const existeChoque = actual.some(
      c => c.medico === cita.medico && c.fecha === cita.fecha && c.hora === cita.hora && c.estado !== 'Cancelada'
    );

    if (existeChoque) {
      alert('Error: El médico ya tiene una cita reservada en esta fecha y hora.');
      return false;
    }

    const nuevaCita: Cita = {
      ...cita,
      id: Date.now().toString(),
      estado: 'Programada'
    };

    this.guardarEnLocalStorage([...actual, nuevaCita]);
    return true;
  }

  actualizarCita(citaActualizada: Cita): void {
    const actual = this.obtenerCitas().map(c => c.id === citaActualizada.id ? citaActualizada : c);
    this.guardarEnLocalStorage(actual);
    this.citaEditarSubject.next(null);
  }

  cambiarEstado(id: string, nuevoEstado: EstadoCita): void {
    const actual = this.obtenerCitas().map(c => c.id === id ? { ...c, estado: nuevoEstado } : c);
    this.guardarEnLocalStorage(actual);
  }

  eliminarCita(id: string): void {
    const actual = this.obtenerCitas().filter(c => c.id !== id);
    this.guardarEnLocalStorage(actual);
  }

  seleccionarParaEditar(cita: Cita): void {
    this.citaEditarSubject.next(cita);
  }
}