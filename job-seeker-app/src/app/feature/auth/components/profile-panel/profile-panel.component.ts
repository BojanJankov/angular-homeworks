import { Component, inject, signal } from '@angular/core';
import { User } from '../../models/auth.model';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-profile-panel',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './profile-panel.component.html',
  styleUrl: './profile-panel.component.scss',
})
export class ProfilePanelComponent {
  private authService = inject(AuthService);

  user = this.authService.currentUser;

  isAuthInfoShown = signal(false);

  onUserInfoClick() {
    this.isAuthInfoShown.set(true);
  }

  onPersonalInfoClick() {
    this.isAuthInfoShown.set(false);
  }

  onLogoutClick() {
    this.authService.logoutUserFromServer();
    this.authService.logoutUser();
  }
}
