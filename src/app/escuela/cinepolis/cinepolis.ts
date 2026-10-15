import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface ICliente {
  nombre: string;
  compradores: number;
  tarjeta: string;
  boletos: number;
  pago: number;
}

@Component({
  selector: 'app-cinepolis',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
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

  procesar(): void {
    this.error = '';
    this.pagar = 0;

    if (this.formulario.invalid) {
      this.error = 'Ingresa el nombre del comprador.';
      return;
    }

    const datos = this.formulario.getRawValue();

    const nombre = datos.nombre?.trim() ?? '';
    const compradores = Number(datos.cantCompradores);
    const boletos = Number(datos.cantBoletas);
    const tarjeta = datos.tarjCineco ?? 'No';

    if (!nombre) {
      this.error = 'Ingresa el nombre del comprador.';
      return;
    }

    if (
      !Number.isInteger(compradores) ||
      !Number.isInteger(boletos) ||
      compradores <= 0 ||
      boletos <= 0
    ) {
      this.error = 'Las cantidades deben ser números enteros mayores a 0.';
      return;
    }

    if (boletos > compradores * 7) {
      this.error = 'Máximo 7 boletas por persona.';
      return;
    }

    let total = boletos * 12;

    if (boletos > 5) {
      total = total * 0.85;
    } else if (boletos >= 3) {
      total = total * 0.90;
    }

    if (tarjeta === 'Si') {
      total = total * 0.90;
    }

    this.pagar = Number(total.toFixed(2));

    this.clientes.nombre = nombre;
    this.clientes.cantidad = String(boletos);

    const nuevoCliente: ICliente = {
      nombre: nombre,
      compradores: compradores,
      tarjeta: tarjeta,
      boletos: boletos,
      pago: this.pagar
    };

    const datosGuardados = localStorage.getItem('cliente');
    const lista: ICliente[] = datosGuardados
      ? JSON.parse(datosGuardados)
      : [];

    lista.push(nuevoCliente);

    localStorage.setItem('cliente', JSON.stringify(lista));
  }
}
