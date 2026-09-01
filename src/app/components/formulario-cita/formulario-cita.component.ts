import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { CitasService } from '../../services/citas.service';
import { Cita } from '../../models/cita';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-cita',
  standalone: false,
  templateUrl: './formulario-cita.component.html',
  styleUrls: ['./formulario-cita.component.scss']
})
export class FormularioCitaComponent implements OnInit {
  formulario!: FormGroup;
  especialidades: Cita['especialidad'][] = [
    'Medicina general',
    'Pediatra',
    'Odontología',
    'Psicología',
    'Nutrición'
  ];
  medicosPorEspecialidad: Record<Cita['especialidad'], string[]> = {
    'Medicina general': ['Dr. Pérez', 'Dra. López'],
    'Pediatra': ['Dr. Gómez', 'Dra. Ruiz'],
    'Odontología': ['Dr. Hernández', 'Dra. Morales'],
    'Psicología': ['Dr. Díaz', 'Dra. Castro'],
    'Nutrición': ['Dra. Vega', 'Dr. Ramos']
  };
  medicosFiltrados: string[] = [];
  modoEdicion = false;
  citaIdEditar?: string;

  constructor(
    private fb: FormBuilder,
    private citasService: CitasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    this.formulario = this.fb.group({
      nombrePaciente: ['', [Validators.required, Validators.minLength(5)]],
      dpi: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      correo: ['', [Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      especialidad: ['', [Validators.required]],
      medico: ['', [Validators.required]],
      fecha: ['', [Validators.required, this.fechaNoAnteriorValidator()]],
      hora: ['', [Validators.required]],
      motivo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      primeraConsulta: [false]
    });

    this.formulario.get('especialidad')?.valueChanges.subscribe((esp: Cita['especialidad']) => {
      this.medicosFiltrados = esp ? this.medicosPorEspecialidad[esp] : [];
      this.formulario.get('medico')?.setValue('');
    });
  }

  private fechaNoAnteriorValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const valor = control.value;
      if (!valor) return null;
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      const seleccionada = new Date(valor);
      seleccionada.setHours(0, 0, 0, 0);
      return seleccionada < hoy ? { fechaAnterior: true } : null;
    };
  }

  get nombrePaciente() { return this.formulario.get('nombrePaciente'); }
  get dpi() { return this.formulario.get('dpi'); }
  get correo() { return this.formulario.get('correo'); }
  get telefono() { return this.formulario.get('telefono'); }
  get especialidad() { return this.formulario.get('especialidad'); }
  get medico() { return this.formulario.get('medico'); }
  get fecha() { return this.formulario.get('fecha'); }
  get hora() { return this.formulario.get('hora'); }
  get motivo() { return this.formulario.get('motivo'); }
  get primeraConsulta() { return this.formulario.get('primeraConsulta'); }

  onSubmit() {
    this.formulario.markAllAsTouched();
    if (this.formulario.invalid) return;

    const valores = this.formulario.value;
    const existeChoque = this.citasService.tieneChoqueHorario(
      valores.medico,
      valores.fecha,
      valores.hora,
      this.modoEdicion ? this.citaIdEditar : undefined
    );

    if (existeChoque) {
      alert('Ya existe una cita para ese médico, fecha y hora.');
      return;
    }

    const citaBase = {
      nombrePaciente: valores.nombrePaciente,
      dpi: valores.dpi,
      correo: valores.correo || undefined,
      telefono: valores.telefono,
      especialidad: valores.especialidad,
      medico: valores.medico,
      fecha: valores.fecha,
      hora: valores.hora,
      motivo: valores.motivo,
      primeraConsulta: valores.primeraConsulta
    };

    if (this.modoEdicion && this.citaIdEditar) {
      this.citasService.editarCita(this.citaIdEditar, { ...citaBase, estado: 'Programada' });
    } else {
      this.citasService.crearCita(citaBase);
    }

    this.formulario.reset({ primeraConsulta: false });
    this.medicosFiltrados = [];
    this.router.navigate(['/listado']);
  }

  cargarCitaParaEditar(cita: Cita) {
    this.modoEdicion = true;
    this.citaIdEditar = cita.id;

    this.formulario.patchValue({
      nombrePaciente: cita.nombrePaciente,
      dpi: cita.dpi,
      correo: cita.correo,
      telefono: cita.telefono,
      especialidad: cita.especialidad,
      medico: cita.medico,
      fecha: cita.fecha,
      hora: cita.hora,
      motivo: cita.motivo,
      primeraConsulta: cita.primeraConsulta
    });

    this.medicosFiltrados = this.medicosPorEspecialidad[cita.especialidad];
    this.formulario.reset({ primeraConsulta: false });
  }
}
