import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { PacienteService } from '../paciente.service';
import { MatStepper } from '@angular/material/stepper';
import { DatosPersonalesFormComponent } from '../datos-personales-form/datos-personales-form.component';
import { PielFormComponent } from '../piel-form/piel-form.component';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.scss']
})
export class NuevoPacienteComponent implements OnInit {
  @ViewChild('stepper') private stepper!: MatStepper;
  stepperOrientation: Observable<StepperOrientation>;
  showBottomBar: Observable<boolean>;

  @ViewChild('datosPersonales') private datosPersonales!: DatosPersonalesFormComponent;
  @ViewChild('piel') private piel!: PielFormComponent;

  signosSintomas = [{name: '', selected: false}];
  selectedSignosSintomas: string[] = [];
  diagnostico = [{name: '', selected: false}]


  constructor(private formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private pacienteService: PacienteService) {
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));

    this.showBottomBar = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({matches}) => matches ? true : false));

    this.signosSintomas = pacienteService.getSignosSintomas().map(s => { return {name: s, selected: false}});
    this.diagnostico = pacienteService.getDiagnosticos().map(d => {return {name: d, selected: false}})
  
  }

  ngOnInit(): void {
  
  }

  updateSelectedSignosSintomas(){
    this.selectedSignosSintomas = this.signosSintomas.filter(s => s.selected).map(s => s.name);
  }

  goBack(){
    this.stepper.previous();
  }

  goForward(finishedStep: number){
    switch(finishedStep){
      case 1:
        this.pacienteService.saveDatosPersonales(this.datosPersonales.datosPersonales.value);
        break;
      case 2:
        this.pacienteService.saveCaracterizacionPiel({color: this.piel.piel.value.color, grosor: this.piel.piel.value.grosor, enfermedades: this.piel.selectedEnfermedadesPiel});
    }
    this.stepper.next();
  }
}
