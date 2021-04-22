import { Route } from '@angular/router';
import { HeaderComponent } from 'app/layouts/header/header.component';

export const headerRoute: Route = {
  path: '',
  component: HeaderComponent,
  outlet: 'navbar',
};
