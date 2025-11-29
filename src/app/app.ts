import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Darkmode } from './base-line/darkmode/darkmode';
import { Stylesheet } from './stylesheet/stylesheet';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Stylesheet,
    Darkmode
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('antigravity-playground');
}
