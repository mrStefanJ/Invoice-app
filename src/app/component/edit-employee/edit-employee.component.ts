import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html'
})
export class EditEmployeeComponent implements OnInit {
  @Input() inputSideNav!: MatSidenav;
  submitted = false;

  invoiceForm = this.fb.group(
    {
      senderAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      clientName: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      // clientAddress: this.fb.group({
      //   street: ['', Validators.required],
      //   city: ['', Validators.required],
      //   postCode: ['', Validators.required],
      //   country: ['', Validators.required],
      // }),
      paymentDue: ['', Validators.required],
      // paymentTerms: ['', Validators.required],
      //description: ['', Validators.required],
      //invoiceItemList: this.fb.array([], Validators.required)
    },
    { 
      updateOn: 'submit' 
    });

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  public closeSidenav() {
    return this.inputSideNav.close();
  }

  onEditInvoice(){

  }
}
