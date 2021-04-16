import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VERSION } from 'app/app.constants';
import { LoginService } from 'app/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('opened') sideBarOpen!: boolean;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  toggleSideBar(): void {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  getImageUrl(): string {
    return this.isAuthenticated() ? this.accountService.getImageUrl() : '';
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
