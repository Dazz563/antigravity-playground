import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Darkmode } from './base-line/darkmode/darkmode';
import { NativePopover } from './base-line/native-popover/native-popover';
import { Stylesheet } from './stylesheet/stylesheet';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    // Stylesheet,
    // Darkmode
    NativePopover
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('antigravity-playground');
}
