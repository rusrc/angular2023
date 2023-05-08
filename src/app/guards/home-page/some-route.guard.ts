import {
  ActivatedRouteSnapshot, CanActivateFn,
  RouterStateSnapshot
} from '@angular/router';

export const someRouteGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    // Проверим можно ли попасть по маршруту, 
    // где "навешен" данные гард?
    return confirm('Вы уверены, что хотите перейти?');
  };
