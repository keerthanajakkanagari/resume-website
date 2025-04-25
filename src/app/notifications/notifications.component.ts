import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  @Input() message = '';
  @Input() type: 'success' | 'error' = 'success';

  show = true;

  ngOnInit() {
    setTimeout(() => {
      this.show = false;
    }, 3000); // hide after 3s
  }
}
