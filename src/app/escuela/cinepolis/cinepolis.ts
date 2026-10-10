import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cinepolis.html',
})
export class Cinepolis {

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    cantCompradores: new FormControl(1),
    tarjCineco: new FormControl('No'),
    cantBoletas: new FormControl(1)
  });

  clientes = {
    nombre: '',
    cantidad: ''
  };

  pagar = 0;
  error = '';

  procesar() {
    this.error = '';
    this.pagar = 0;

    if (this.formulario.invalid) {
      this.error = 'Ingresa el nombre del comprador.';
      return;
    }

    let compradores = Number(this.formulario.value.cantCompradores);
    let boletas = Number(this.formulario.value.cantBoletas);

    if (compradores <= 0 || boletas <= 0) {
      this.error = 'Las cantidades deben ser mayores a 0.';
      return;
    }

    if (boletas > compradores * 7) {
      this.error = 'Máximo 7 boletas por persona.';
      return;
    }

    let total = boletas * 12;

    if (boletas > 5) {
      total = total * 0.85;
    } else if (boletas >= 3) {
      total = total * 0.90;
    }

    if (this.formulario.value.tarjCineco == 'Si') {
      total = total * 0.90;
    }

    this.pagar = total;

    this.clientes.nombre = this.formulario.value.nombre;
    this.clientes.cantidad = String(boletas);
  }

}
