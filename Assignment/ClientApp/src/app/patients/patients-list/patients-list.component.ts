import { Component, Inject, Input, OnInit } from '@angular/core';
import { PatientService } from './../../app.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PatientModalComponent } from './../../modal/patient-modal.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'patients-list',
  templateUrl: './patients-list.component.html'
})
export class PatientsListComponent implements OnInit {
  p: number = 1;
  modalRef: BsModalRef;
  patient: any;
  list: any[] = [];
  @Input() data;

  constructor(public service: PatientService, private modalService: BsModalService, private activatedRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.service.getAllPatients();
    const param = this.activatedRoute.snapshot.queryParamMap.get('isOpened');
    if (param == 'true')
      this.modalRef = this.modalService.show(PatientModalComponent);
  }

  onDelete(id: string) {
    this.service.deletePatientDetail(id).subscribe(
      () => {
        this.service.getAllPatients();
      },
      err => { console.log(err) }
    )
  }

  openModal() {
    this.modalRef = this.modalService.show(PatientModalComponent);
  }

  getPatientById(id: string) {
    return this.service.getPatientById(id).toPromise().then(res => {
      this.patient = res;
    }
    )
  }

  showListOptionsModal() {
    this.router.navigate(['/patients'], { queryParams: { isOpened: 'true' } });
    this.modalRef = this.modalService.show(PatientModalComponent);
  }
}
