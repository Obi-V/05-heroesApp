import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/pages/interfaces/user.interface';
import { AuthService } from 'src/app/auth/pages/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list'},
    { label: 'Añadir', icon: 'add', url: './new-hero'},
    { label: 'buscar', icon: 'search', url: './search'},
  ]

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  get user() : User | undefined{
    return this.authService.currentUser
  }

  onLogout(){
    this.authService.logOut()
    this.router.navigate(['/auth/login'])
  }

}
