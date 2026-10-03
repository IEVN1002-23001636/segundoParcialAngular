import { Component, signal } from '@angular/core';
import { Zodiaco } from './formulario/zodiaco/zodiaco';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Zodiaco, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {

  protected readonly title = signal('segundoParcialAngular');

  ngOnInit(): void {
    initFlowbite();
  }

}