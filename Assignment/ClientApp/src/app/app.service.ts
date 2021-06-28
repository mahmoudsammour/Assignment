import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, endWith, map } from 'rxjs/operators';
import { Routes } from './app.service.routes';
import { IPatient } from './model/index'

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) { }
  readonly baseURL = 'https://localhost:44377'
  formData: IPatient = new IPatient();
  list: IPatient[];
  patient: IPatient;

  createPatient(patient: IPatient) {
    console.log("this.baseURL + Routes.createPatient", this.baseURL + Routes.createPatient);
    return this.http.post(this.baseURL + Routes.createPatient, patient);
  }

  getAllPatients() {
    return this.http.get(this.baseURL + Routes.getAllPatients)
      .toPromise()
      .then(res => {
        this.list = res as IPatient[]
      });
  }

  editPatient(id: string, patient: IPatient) {
    return this.http.put(this.baseURL + Routes.editePatient(id), patient);
  }

  getPatientById(id: string) {
    return this.http.get(this.baseURL + Routes.getPatientById(id));
  }

  deletePatientDetail(id: string) {
    return this.http.delete(this.baseURL + Routes.deletePatient(id));
  }


}
