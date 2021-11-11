import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { ProductosService } from 'src/app/productos/productos.service';

@Component({
  selector: 'app-tratamiento-cosmetico-control',
  templateUrl: './tratamiento-cosmetico-control.component.html',
  styleUrls: ['./tratamiento-cosmetico-control.component.scss']
})
export class TratamientoCosmeticoControlComponent implements OnInit {
  @Input() funcion!: string;
  @Input() displayMode: boolean = false;

  formGroup!: FormGroup;

  private opcionesProductos!: string[];
  filteredOpcionesProductos?: Observable<string[]>;

  producto!: Observable<string>
  fecha!: Observable<string>

  constructor(private productoService: ProductosService, private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.opcionesProductos = this.productoService.getProductosFuncion(this.funcion);
    this.buildFormGroup();
    this.filteredOpcionesProductos = this.formGroup.get('producto')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this.filterProductos(value)),
    );

    this.formGroup.get('producto')?.valueChanges.subscribe(value => {
      this.producto = value;
    })

    this.formGroup.get('fecha')?.valueChanges.subscribe(value => {
      this.fecha = value;
    })
  }

  buildFormGroup(){
    this.formGroup = this.formBuilder.group(
      {
        producto: [],
        fecha: []
      }
    )
  }

  private filterProductos(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.opcionesProductos.filter(option => option.toLowerCase().includes(filterValue));
  }

  onEditClick(){
    this.displayMode = false;
  }

}
