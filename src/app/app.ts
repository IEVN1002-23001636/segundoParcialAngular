import { Component, signal } from '@angular/core';
import { Zodiaco } from './formulario/zodiaco/zodiaco';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Usuario } from './formulario/usuario/usuario';

@Component({
  imports: [RouterOutlet, Navbar, Usuario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }

}