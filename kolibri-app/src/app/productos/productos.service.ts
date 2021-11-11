import { Injectable } from '@angular/core';

// solo son strings por el momento...en realidad deberían ser objetos "Producto"
const rellenos: string[] = [
  "JUVEDERM Ultra Plus XC",
  "JUVEDERM Ultra XC",
  "JUVEDERM Volbella",
  "JUVEDERM Volift"
]

const toxina: string[] = [
  "Botox",
  "Nabota",
  "Dituroxal",
  "DYSPORT"
]

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  getProductosFuncion(funcion: string){
    if(funcion === 'relleno') return rellenos;
    return toxina;
  }
}
