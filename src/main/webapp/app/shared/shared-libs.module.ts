import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JhMaterialModule } from 'app/shared/jh-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    NgbModule,
    InfiniteScrollModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    JhMaterialModule,
    FlexLayoutModule,
    NgMaterialMultilevelMenuModule,
  ],
})
export class SharedLibsModule {}
