
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ver-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ver-registro.html'
})
export class VerRegistro implements OnInit {

  cliente: any[] = [];
  indiceEdicion = -1;

  formulario = new FormGroup({
    nombre: new FormControl(''),
    compradores: new FormControl(1),
    tarjeta: new FormControl('No'),
    boletos: new FormControl(1)
  });

  ngOnInit(): void {
    const datos = localStorage.getItem('cliente');
    this.cliente = datos ? JSON.parse(datos) : [];
  }

  editarClientes(i: number): void {
    this.indiceEdicion = i;
    this.formulario.patchValue(this.cliente[i]);
  }

  guardarCambios(): void {
    if (this.indiceEdicion === -1) return;

    const datos = this.formulario.value;
    const boletos = Number(datos.boletos);

    let pago = boletos * 12;

    if (boletos > 5) pago *= 0.85;
    else if (boletos >= 3) pago *= 0.90;

    if (datos.tarjeta === 'Si') pago *= 0.90;

    this.cliente[this.indiceEdicion] = {
      nombre: datos.nombre,
      compradores: Number(datos.compradores),
      tarjeta: datos.tarjeta,
      boletos: boletos,
      pago: Number(pago.toFixed(2))
    };

    localStorage.setItem('cliente', JSON.stringify(this.cliente));
    this.cancelarEdicion();
  }

  cancelarEdicion(): void {
    this.indiceEdicion = -1;
    this.formulario.reset({
      nombre: '',
      compradores: 1,
      tarjeta: 'No',
      boletos: 1
    });
  }

  eliminarClientes(i: number): void {
    this.cliente.splice(i, 1);
    localStorage.setItem('cliente', JSON.stringify(this.cliente));

    if (this.indiceEdicion === i) {
      this.cancelarEdicion();
    }
  }
}
