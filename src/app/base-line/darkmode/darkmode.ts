import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  imports: [],
  templateUrl: './darkmode.html',
  styleUrl: './darkmode.css',
})
export class Darkmode {
  isDarkMode = signal(false);

  toggleDarkMode() {
    this.isDarkMode.update(v => !v);
  }
}
