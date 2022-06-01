import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
})
export class AddItemComponent implements OnInit {
  @Input() inputSideNav!: MatSidenav;
  submitted = false;
  invoiceStatus = 'Pending';
  showErrorMessage = false;

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
      //paymentDue: ['', Validators.required],
      // paymentTerms: ['', Validators.required],
      //description: ['', Validators.required],
      //invoiceItemList: this.fb.array([], Validators.required)
    },
    { updateOn: 'submit' }
  );

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public closeSidenav() {
    return this.inputSideNav.close();
  }

  onAddInvoice() {
    this.submitted = true;
    if (this.invoiceForm.invalid) {
      return;
    }
    console.log(this.invoiceForm.value.senderAddress)
    console.log(this.invoiceForm.value.senderAddress.street)
    const employee: any = {
      street: this.invoiceForm.value.senderAddress.street,
      city: this.invoiceForm.value.senderAddress.city,
      postCode: this.invoiceForm.value.senderAddress.postCode,
      country: this.invoiceForm.value.senderAddress.country,
      clientName: this.invoiceForm.value.clientName,
      clientEmail: this.invoiceForm.value.clientEmail,
      // clientAddress: this.invoiceForm.value.clientAddress.street,
      // clientCity: this.invoiceForm.value.clientAddress.city,
      // clientPostCode: this.invoiceForm.value.clientAddress.postCode,
      // clientCountry: this.invoiceForm.value.clientAddress.country,
      // paymentDue: new Date(),
      // paymentTerms: this.invoiceForm.value.paymentTerms,
      // project: this.invoiceForm.value.description,
    };
    console.log(this.invoiceForm.value);
    console.log(employee)
    this.employeeService
      .createNewInvoice(employee)
      .then(() => {
        this.toastr.success('Successfully added', 'Employee Invoices', {
          positionClass: 'toast-top-right'
        });
        console.log(employee);
        this.invoiceForm.reset();
      })
      .catch((error) => {
        console.log(error);
        this.toastr.error('Error added', 'Employee Invoices', {positionClass: 'toast-top-right'})
      });
  }

  get emailClient(){
        return this.invoiceForm.get('clientEmail');
  }
}
