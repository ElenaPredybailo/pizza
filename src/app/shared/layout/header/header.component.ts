import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedState: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isLoggedIn: boolean) => {
      this.loggedState = isLoggedIn;
      // other logic
      console.log('State has been change: ' + isLoggedIn);
    })
  }

  login() {
    this.authService.logIn();
  }

  logout() {
    this.authService.logOut();
  }

}
