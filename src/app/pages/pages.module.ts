import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AgGridModule } from 'ag-grid-angular';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    UserlistComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    Ng2SmartTableModule,
    SharedModule,
    MatTabsModule,
    AgGridModule,
    CrystalLightboxModule
  ]
})
export class PagesModule { }
