import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { inovaceData } from '../model/invoiceData.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private afs: AngularFirestore) { }

  createNewInvoice(data: inovaceData){
    data.id = this.afs.createId();
    return this.afs.collection('items').add(data);
  }

  getAllData(){
    return this.afs.collection('items').snapshotChanges();
  }

  deleteEmployeeById(id: string): Promise<any>{
    return this.afs.collection('items').doc(id).delete();
  }

  getEmployeeById(id: string): Observable<any>{
    return this.afs.collection('items').doc(id).snapshotChanges();
  }
}
