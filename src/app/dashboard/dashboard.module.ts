import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';


import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
        SharedModule,
        MdModule,
        DashboardRoutingModule

    ],
    declarations: [DashboardComponent]
})

export class DashboardModule { }
