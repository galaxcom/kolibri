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


  constructor(private formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private pacienteService: PacienteService) {
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));

    this.showBottomBar = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({matches}) => matches ? true : false));
  }

  ngOnInit(): void {
  
  }

  get datosPersonalesFrmGroup(){
    return this.datosPersonales ? this.datosPersonales.formGroup : null;
  }

  get pielFrmGroup(){
    return this.piel ? this.piel.formGroup : null;
  }

  goBack(){
    this.stepper.previous();
  }

  goForward(finishedStep: number){
    switch(finishedStep){
      case 1:
        this.pacienteService.saveDatosPersonales(this.datosPersonalesFrmGroup!.value);
        break;
      case 2:
        this.pacienteService.saveCaracterizacionPiel({color: this.pielFrmGroup!.value.color, grosor: this.pielFrmGroup!.value.grosor, enfermedades: this.piel.selectedEnfermedadesPiel});
    }
    this.stepper.next();
  }
}
