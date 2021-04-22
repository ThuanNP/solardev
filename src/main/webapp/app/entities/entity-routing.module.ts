import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
      // {
      //   path: 'province',
      //   data: { pageTitle: 'seSolarSalemanagementApp.province.home.title' },
      //   loadChildren: () => import('./province/province.module').then(m => m.ProvinceModule),
      // },
      // {
      //   path: 'district',
      //   data: { pageTitle: 'seSolarSalemanagementApp.district.home.title' },
      //   loadChildren: () => import('./district/district.module').then(m => m.DistrictModule),
      // },
      // {
      //   path: 'ward',
      //   data: { pageTitle: 'seSolarSalemanagementApp.ward.home.title' },
      //   loadChildren: () => import('./ward/ward.module').then(m => m.WardModule),
      // },
      // {
      //   path: 'address',
      //   data: { pageTitle: 'seSolarSalemanagementApp.address.home.title' },
      //   loadChildren: () => import('./address/address.module').then(m => m.AddressModule),
      // },
    ]),
  ],
})
export class EntityRoutingModule {}
