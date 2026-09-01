import { Component, OnInit } from '@angular/core';
import { CitaService, Cita } from '../../cita.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-citas',
  standalone: false,
  templateUrl: './listado-citas.component.html',
  styleUrls: ['./listado-citas.component.scss']
})
export class ListadoCitasComponent implements OnInit {
  citas$!: Observable<Cita[]>;

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {
    this.citas$ = this.citaService.citas$;
  }

  cambiarEstado(id: number, estado: 'Programada' | 'Atendida' | 'Cancelada'): void {
    this.citaService.actualizarEstado(id, estado);
  }
}
