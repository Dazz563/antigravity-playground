import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-native-popover',
  imports: [],
  templateUrl: './native-popover.html',
  styleUrl: './native-popover.css',
})
export class NativePopover {
  @ViewChild('toastPopover') toastPopover!: ElementRef<HTMLElement>;

  onToastToggle(event: Event) {
    const e = event as ToggleEvent;
    if (e.newState === 'open') {
      setTimeout(() => {
        this.toastPopover.nativeElement.hidePopover();
      }, 3000);
    }
  }
}
