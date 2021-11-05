import { Injectable } from '@angular/core';
import { DatosPersonales, Piel } from '../models/paciente.model';

const SignosSintomas = [
  "Alteraciones cuello",
  "Belfos",
  "Código de barras",
  "Deficiencia malar",
  "Deficiencia mentón",
  "Deformidad nasal",
  "Depresión temporal",
  "Inconformidad palpebral",
  "Inconformidad Periocular",
  "Inconformidad Perioral",
  "Lineas de Marioneta",
  "Lineas Frontales",
  "Lineas Glabelares",
  "Perdida de la linea mandibular",
  "Surcos nasogenianos"
]

const Diagnosticos = [
  "Cansancio (Ojeras)",
  "Caquexia (Esquelético)",
  "Enojo (Entrecejo)",
  "Flacidez (Cachetes caídos y cachete de perrito)",
  "Maldad (Crueldad)",
  "Rudeza (Corte en la frente)",
  "Tristeza (Cejas caídas y las comisuras de la boca caídas)"
]

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor() { }

  saveDatosPersonales(datosPersonales: DatosPersonales){
    console.log(datosPersonales);
  }

  saveCaracterizacionPiel(caracterizacionPiel: Piel){
    console.log(caracterizacionPiel);
  }

  saveSignosSintomas(signosSintomas: string[]){}

  saveDiagnostico(diagnostico: string[]){}

  getSignosSintomas(): string[]{
    return SignosSintomas;
  }

  getDiagnosticos(): string[]{
    return Diagnosticos;
  }
}
