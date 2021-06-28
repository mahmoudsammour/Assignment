import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { FilterChildComponent } from './filter-child/filter-child.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PatientModalComponent } from './../modal/patient-modal.component'

@NgModule({
  declarations: [PatientsListComponent, FilterChildComponent, PatientModalComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    PatientsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PatientsModule { }
