export type EstadoCita = 'Programada' | 'Atendida' | 'Cancelada';

export interface Cita {
  id: string;
  nombrePaciente: string;
  dpi: string;
  telefono: string;
  especialidad: string;
  medico: string;
  fecha: string;
  hora: string;
  estado: EstadoCita;
}