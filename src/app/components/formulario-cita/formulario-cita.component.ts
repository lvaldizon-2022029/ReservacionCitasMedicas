import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from '../../cita.service';

@Component({
  selector: 'app-formulario-cita',
  standalone: false,
  templateUrl: './formulario-cita.component.html',
  styleUrls: ['./formulario-cita.component.scss']
})
export class FormularioCitaComponent implements OnInit {
  citaForm!: FormGroup;

  constructor(private fb: FormBuilder, private citaService: CitaService) {}

  ngOnInit(): void {
    this.citaForm = this.fb.group({
      nombrePaciente: ['', [Validators.required, Validators.minLength(3)]],
      dpi: ['', [Validators.required, Validators.pattern(/^[0-9]{13}$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
      especialidad: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.citaForm.valid) {
      this.citaService.agregarCita(this.citaForm.value);
      this.citaForm.reset();
    } else {
      this.citaForm.markAllAsTouched();
    }
  }
}
