import { Component, signal, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
  options = input<string[]>([]);
  placeholder = input<string>('Select an option');
  selected = output<string>();

  isOpen = signal(false);
  selectedOption = signal<string | null>(null);

  toggle() {
    this.isOpen.update(v => !v);
  }

  selectOption(option: string) {
    this.selectedOption.set(option);
    this.selected.emit(option);
    this.isOpen.set(false);
  }

  // Close dropdown when clicking outside (basic implementation)
  // In a real app, we'd use a directive or host listener for click outside
  onBlur() {
    // Small delay to allow click event to register on options
    setTimeout(() => {
      this.isOpen.set(false);
    }, 200);
  }
}
