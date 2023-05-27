import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '../pages/services/auth.service';

@Injectable({ providedIn: 'root' })
export class PublicGuard implements CanMatch, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAuthentication()
      .pipe(
        tap(isAuthenticated => {
          if (isAuthenticated) {
            this.router.navigate(['./heroes/list'])
          }
        }),
        map( isAuthenticated => !isAuthenticated)
      )
  }

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {

    return this.checkAuthStatus()
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

    return this.checkAuthStatus()
  }
}
