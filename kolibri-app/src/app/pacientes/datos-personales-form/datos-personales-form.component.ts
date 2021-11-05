import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { OpcionesMotivacionPaciente } from '../datos-paciente-opciones';

@Component({
  selector: 'app-datos-personales-form',
  templateUrl: './datos-personales-form.component.html',
  styleUrls: ['./datos-personales-form.component.scss']
})
export class DatosPersonalesFormComponent implements OnInit {
  datosPersonales!: FormGroup;
  opcionesMotivacion: string[];
  filteredOpcionesMotivacion!: Observable<string[]>;

  constructor(private formBuilder: FormBuilder) {
    this.opcionesMotivacion = OpcionesMotivacionPaciente;
  }

  ngOnInit(): void {
    this.buildDatosPersonalesGroup();

    
    this.filteredOpcionesMotivacion = this.datosPersonales.get('motivacion')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterMotivacion(value))
      );
  }

  buildDatosPersonalesGroup(){
    this.datosPersonales = this.formBuilder.group({
      nombre: [''],
      email: ['', Validators.email],
      fechaNacimiento: [''],
      sexo: ['', Validators.required],
      celular: ['', Validators.required],
      telefonoFijo: ['', Validators.required],
      deportista: [false],
      fumador: [false],
      motivacion: ['']
    })
  }

  private _filterMotivacion(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.opcionesMotivacion.filter(option => option.toLowerCase().includes(filterValue));
  }

}
