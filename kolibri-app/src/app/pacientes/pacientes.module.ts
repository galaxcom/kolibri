import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatosPersonalesFormComponent } from './datos-personales-form/datos-personales-form.component';
import { PielFormComponent } from './piel-form/piel-form.component';
import { AntecedentesFormComponent } from './antecedentes-form/antecedentes-form.component';
import { ProductosModule } from '../productos/productos.module';
import { TratamientoCosmeticoControlComponent } from './tratamiento-cosmetico-control/tratamiento-cosmetico-control.component';



@NgModule({
  declarations: [
    NuevoPacienteComponent,
    DatosPersonalesFormComponent,
    PielFormComponent,
    AntecedentesFormComponent,
    TratamientoCosmeticoControlComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
    ProductosModule
  ],
  exports: [
    NuevoPacienteComponent
  ]
})
export class PacientesModule { }
