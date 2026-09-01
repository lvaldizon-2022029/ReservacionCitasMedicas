export interface Cita {
  id: string;
  nombrePaciente: string;
  dpi: string;              // 13 dígitos
  correo?: string;          // opcional, pero válido si se ingresa
  telefono: string;         // 8 dígitos
  especialidad: 'Medicina general' | 'Pediatra' | 'Odontología' | 'Psicología' | 'Nutrición';
  medico: string;
  fecha: string;            // YYYY-MM-DD
  hora: string;             // HH:mm
  motivo: string;           // 10–200 caracteres
  primeraConsulta: boolean;
  estado: 'Programada' | 'Atendida' | 'Cancelada';
}