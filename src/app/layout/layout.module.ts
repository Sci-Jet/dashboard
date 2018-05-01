import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { HelloComponent } from './hello/hello.component';
import { OverviewModule } from '../overview/overview.module';

@NgModule({
  imports: [
    SharedModule,
    OverviewModule,
    LayoutRoutingModule
  ],
  declarations: [HelloComponent]
})
export class LayoutModule { }
