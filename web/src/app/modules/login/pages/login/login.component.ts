import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private keycloakService: KeycloakService
  ) {
    if(this.keycloakService.isLoggedIn()) {
      this.router.navigate(['transactions']);
    }
  }

}
