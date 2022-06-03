import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private afs: AngularFirestore) {}
  // create new employee
  createNewInvoice(data: any): Promise<any> {
    return this.afs.collection('items').add(data);
  }
  // view all employee
  getAllEmployee(): Observable<any> {
    return this.afs.collection('items').snapshotChanges();
  }
  // get employee by id
  getEmployeeById(id: any):Observable<any> {
    return this.afs.collection('items').doc(id).snapshotChanges();
  }
  // update employee
  updateEmployeeById(data: any, id: string):Promise<any> {
    return this.afs.collection('items').doc(id).update(data);
  }
  // delete employee by id
  deleteEmployee(id: string): Promise<any> {
    return this.afs.collection('items').doc(id).delete();
  }
}
