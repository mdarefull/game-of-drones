import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';

import { StartPageComponent } from '../core/startPage/startPage.component';
import { StatisticsComponent } from '../statistics/statistics.component';

/**
 * This route guard, guards that certain pages cannot be accessed
 * unless StartPage component has been accessed first.
 * It should be applied to the StartPage and to any other component that
 * requires a previous access to the StartPage.
 */
@Injectable()
export class FirstNavigationGuard implements CanActivate {
  private _firstNavigation = true;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this._firstNavigation) {
      return true;
    }

    if (route.component === StartPageComponent) {
      this._firstNavigation = false;
      return true;
    }

    this.router.navigateByUrl('/');
    return false;
  }
}
