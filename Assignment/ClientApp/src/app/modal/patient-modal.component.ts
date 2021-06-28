import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PatientService } from '../app.service';
import { IPatient } from '../model';

@Component({
  selector: 'patient-modal',
  template: `
  <div class="modal-header clearfix">
  <h4 class="modal-title float-left">Register/edit</h4>
  <button type="button" class="close float-right" aria-label="Close" (click)="hide()">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" formControlName="name" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.name.errors }" />
      <div *ngIf="submitted && f.name.errors" class="invalid-feedback">
        <div *ngIf="f.name.errors.required">Name is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="fileNo">File Number</label>
      <input type="number" formControlName="fileNo" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.fileNo.errors }" />
      <div *ngIf="submitted && f.fileNo.errors" class="invalid-feedback">
        <div *ngIf="f.fileNo.errors.required">File Number is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="birthDate">Birth Date</label>
      <input type="date" formControlName="birthDate" class="form-control">
    </div>
    <div class="form-group">
      <label for="citizenId">Citizen Id</label>
      <input type="text" formControlName="citizenId" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.citizenId.errors }" />
      <div *ngIf="submitted && f.citizenId.errors" class="invalid-feedback">
        <div *ngIf="f.citizenId.errors.required">Citizen Id is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="phoneNumber">Phone Number</label>
      <input type="text" formControlName="phoneNumber" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.phoneNumber.errors }" />
      <div *ngIf="submitted && f.phoneNumber.errors" class="invalid-feedback">
        <div *ngIf="f.phoneNumber.errors.required">Citizen Id is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="country">Country</label>
      <input type="text" formControlName="country" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.country.errors }" />
      <div *ngIf="submitted && f.country.errors" class="invalid-feedback">
        <div *ngIf="f.country.errors.required">Citizen Id is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="nationality">Nationality</label>
      <input type="text" formControlName="nationality" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.nationality.errors }" />
      <div *ngIf="submitted && f.nationality.errors" class="invalid-feedback">
        <div *ngIf="f.nationality.errors.required">Nationality is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" formControlName="email" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.email.errors }" />
      <div *ngIf="submitted && f.email.errors" class="invalid-feedback">
        <div *ngIf="f.email.errors.required">Email is required</div>
      </div>
    </div>

    <div class="form-group">
      <label for="city">City</label>
      <input type="text" formControlName="city" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.city.errors }" />
      <div *ngIf="submitted && f.city.errors" class="invalid-feedback">
        <div *ngIf="f.city.errors.required">City is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="street">Street</label>
      <input type="text" formControlName="street" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.street.errors }" />
      <div *ngIf="submitted && f.street.errors" class="invalid-feedback">
        <div *ngIf="f.street.errors.required">Street is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="Address1">First Address</label>
      <input type="text" formControlName="address1" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.address1.errors }" />
      <div *ngIf="submitted && f.address1.errors" class="invalid-feedback">
        <div *ngIf="f.address1.errors.required">First Address is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="address2">Second Address</label>
      <input type="text" formControlName="address2" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.address2.errors }" />
      <div *ngIf="submitted && f.address2.errors" class="invalid-feedback">
        <div *ngIf="f.address2.errors.required">Second Address is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="contactPerson">Contact Person</label>
      <input type="text" formControlName="contactPerson" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.contactPerson.errors }" />
      <div *ngIf="submitted && f.contactPerson.errors" class="invalid-feedback">
        <div *ngIf="f.contactPerson.errors.required">Contact Person is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="contactRelation">Contact Relation</label>
      <input type="text" formControlName="contactRelation" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.contactRelation.errors }" />
      <div *ngIf="submitted && f.contactRelation.errors" class="invalid-feedback">
        <div *ngIf="f.contactRelation.errors.required">Contact Relation is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="contactPhone">Contact Phone</label>
      <input type="text" formControlName="contactPhone" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.contactPhone.errors }" />
      <div *ngIf="submitted && f.contactPhone.errors" class="invalid-feedback">
        <div *ngIf="f.contactPhone.errors.required">Contact Phone is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="firstVisitDate">First Visit Date</label>
      <input type="date" formControlName="firstVisitDate" class="form-control">
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">
            <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>
            REGISTER
        </button>
    </div>
</form>

</div>
<div class="modal-footer">
  <div class="clearfix">
    <div class="float-right">
      <button class="btn btn-default" (click)="hide()">Cancel</button>
      <button class="btn btn-primary">Update</button>
    </div>
  </div>
</div>
`,
})

export class PatientModalComponent {
  registerForm: FormGroup;
  modalRef: BsModalRef;
  loading = false;
  submitted = false;
  error: string;

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private router: Router,
    public service: PatientService,
    public modalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      citizenId: ['', Validators.required],
      fileNo: ['', Validators.required],
      birthDate: ['', Validators.required],
      nationality: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: ['', [Validators.required]],
      country: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      contactPerson: ['', Validators.required],
      contactRelation: ['', Validators.required],
      contactPhone: ['', Validators.required],
      firstVisitDate: ['', Validators.required],
    });
  }

  hide() {
    this.router.navigate(['/patients']);
    this.bsModalRef.hide();
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    //stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.modalService.hide();
    this.service.createPatient(this.registerForm.value)
      .subscribe(
        data => {
          this.service.getAllPatients();
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}

