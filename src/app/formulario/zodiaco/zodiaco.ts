import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';

  dia: number;
  mes: number;
  anio: number;

  sexo: string = '';
  edad: number = 0;
  signo: string = '';

  nMostrar: string = '';
  ApMostrar: string = '';
  AmMostrar: string = '';

  diaMostrar: number;
  mesMostrar: number;
  anioMostrar: number;


  sexoMostrar: string = '';

  imagen: string = '';
  imageWidth: number = 200;
  imageMargin: number = 10;

  calcular() {
    this.nMostrar = this.nombre;
    this.ApMostrar = this.apaterno;
    this.AmMostrar = this.amaterno;
    this.sexoMostrar = this.sexo;

    this.diaMostrar = this.dia;
    this.mesMostrar = this.mes;
    this.anioMostrar = this.anio;

    const day = new Date();
    this.edad = day.getFullYear() - this.anio;

    const years = new Date(day.getFullYear(), this.mes - 1, this.dia);
    if (day < years) {
      this.edad--;
    }

    switch (this.mes) {
      case 1:
        if (this.dia <= 19) {
          this.signo = 'Capricornio';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47156.png';
        } else {
          this.signo = 'Acuario';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47387.png';
        }
        break;

      case 2:
        if (this.dia <= 18) {
          this.signo = 'Acuario';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47387.png';
        } else {
          this.signo = 'Piscis';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47405.png';
        }
        break;

      case 3:
        if (this.dia <= 20) {
          this.signo = 'Piscis';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47405.png';
        } else {
          this.signo = 'Aries';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47303.png';
        }
        break;

      case 4:
        if (this.dia <= 19) {
          this.signo = 'Aries';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47303.png';
        } else {
          this.signo = 'Tauro';
          this.imagen = 'https://media.istockphoto.com/id/1283694295/es/vector/silueta-de-toro-logotipo-monocromo-s%C3%ADmbolo-del-a%C3%B1o-en-el-calendario-del-zodiaco-chino.jpg?s=612x612&w=0&k=20&c=9Atvy3SMKJgmZT1j0bmW8MMRntScH07tLB4dz4XejmM=';
        }
        break;

      case 5:
        if (this.dia <= 20) {
          this.signo = 'Tauro';
          this.imagen = 'https://media.istockphoto.com/id/1283694295/es/vector/silueta-de-toro-logotipo-monocromo-s%C3%ADmbolo-del-a%C3%B1o-en-el-calendario-del-zodiaco-chino.jpg?s=612x612&w=0&k=20&c=9Atvy3SMKJgmZT1j0bmW8MMRntScH07tLB4dz4XejmM=';
        } else {
          this.signo = 'Geminis';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47140.png';
        }
        break;

      case 6:
        if (this.dia <= 20) {
          this.signo = 'Geminis';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47140.png';
        } else {
          this.signo = 'Cancer';
          this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMtBOMJcJpNQmCPyuO_FVlyrZzdDiQWhGZarmSNY4lg&s=10';
        }
        break;

      case 7:
        if (this.dia <= 22) {
          this.signo = 'Cancer';
          this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMtBOMJcJpNQmCPyuO_FVlyrZzdDiQWhGZarmSNY4lg&s=10';
        } else {
          this.signo = 'Leo';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47337.png';
        }
        break;

      case 8:
        if (this.dia <= 22) {
          this.signo = 'Leo';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47337.png';
        }else{
          this.signo = 'Virgo';
          this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecRP_EPBnL0r1Z5WfpuuOHTh1_dVUmrXWpJi3W2ri_Q&s=10';
        }
        break;

      case 9:
        if (this.dia <= 22) {
          this.signo = 'Virgo';
          this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecRP_EPBnL0r1Z5WfpuuOHTh1_dVUmrXWpJi3W2ri_Q&s=10';
        } else {
          this.signo = 'Libra';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47298.png';
        }
        break;

      case 10:
        if (this.dia <= 22) {
          this.signo = 'Libra';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47298.png';
        } else {
          this.signo = 'Escorpion';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47250.png';
        }
        break;

      case 11:
        if (this.dia <= 21) {
          this.signo = 'Escorpion';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47250.png';
        } else {
          this.signo = 'Sagitario';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47213.png';
        }
        break;

      case 12:
        if (this.dia <= 21) {
          this.signo = 'Sagitario';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47213.png';
        } else {
          this.signo = 'Capricornio';
          this.imagen = 'https://cdn-icons-png.flaticon.com/512/47/47156.png';
        }
        break;
    }
  }
}

