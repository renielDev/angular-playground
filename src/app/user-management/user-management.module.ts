import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementRoutingModule } from './user-management-routing.module';



@NgModule({
  declarations: [
    UsersListComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,

    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
