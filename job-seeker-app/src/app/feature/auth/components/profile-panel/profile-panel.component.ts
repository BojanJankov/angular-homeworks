import { Component, signal } from '@angular/core';
import { User } from '../../models/auth.model';
import { userMock } from '../../users.mock';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-panel',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './profile-panel.component.html',
  styleUrl: './profile-panel.component.scss',
})
export class ProfilePanelComponent {
  user = signal<User>(userMock);
}
