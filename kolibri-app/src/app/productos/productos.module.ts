import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from './productos.service';


@NgModule({
  declarations: [],
  providers: [ProductosService],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
