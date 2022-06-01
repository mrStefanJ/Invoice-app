import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() readonly darkModeSwitched = new EventEmitter<boolean>();

  isAuth = true;
  private userSub?: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuth = false;
      console.log(!user);
      console.log(!!user);
    });
  }

  onDarkModeSwitched({checked}: MatSlideToggleChange){
    this.darkModeSwitched.emit(checked);
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }
}
