import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TratamientoCosmetico } from 'src/app/models/paciente.model';

interface TratamientoCosmeticoCard {
  tratamientoCosmetico: TratamientoCosmetico,
  display: boolean 
}

@Component({
  selector: 'app-antecedentes-form',
  templateUrl: './antecedentes-form.component.html',
  styleUrls: ['./antecedentes-form.component.scss']
})
export class AntecedentesFormComponent implements OnInit {
  rellenos: TratamientoCosmeticoCard[] = [];
  toxinas: TratamientoCosmeticoCard[] = [];

  constructor() {
    
  }
  
  ngOnInit() {}

  onCheckRellenosChange(event: MatCheckboxChange) {
    if(event.checked && this.rellenos.length === 0){
      this.rellenos.push({tratamientoCosmetico: {producto: '', fecha: ''}, display: false});
    }
  }

  onCheckToxinaChange(event: MatCheckboxChange) {
    if(event.checked && this.toxinas.length === 0){
      this.toxinas.push({tratamientoCosmetico: {producto: '', fecha: ''}, display: false});
    }
  }

  onNewRellenoClicked(){
    for(let i = 0; i < this.rellenos.length; i++){
      this.rellenos[i].display = true;
    }
    this.rellenos.push({tratamientoCosmetico: {producto: '', fecha: ''}, display: false});
    
  }

  onNewToxinaClicked(){
    for(let i = 0; i < this.toxinas.length; i++){
      this.toxinas[i].display = true;
    }
    this.toxinas.push({tratamientoCosmetico: {producto: '', fecha: ''}, display: false});
  }
}
