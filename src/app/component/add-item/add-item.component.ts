import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';
import { TableModel } from 'src/app/model/table.models';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
})
export class AddItemComponent implements OnInit {
  @Input() inputSideNav!: MatSidenav;
  submitted = false;

  invoiceForm = this.fb.group(
    {
      senderAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', [Validators.required, Validators.maxLength(5)]],
        country: ['', Validators.required],
      }),
      clientName: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientAddress: this.fb.group({
         street: ['', Validators.required],
         city: ['', Validators.required],
         postCode: ['', [Validators.required, Validators.maxLength(5)]],
         country: ['', Validators.required],
       }),
      paymentDue: ['', Validators.required],
      //paymentTerms: ['', Validators.required],
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
  ) {}

  ngOnInit(): void {
  }

  public closeSidenav() {
    return this.inputSideNav.close();
  }

  onAddInvoice() {
    this.submitted = true;
    if (this.invoiceForm.invalid) {
      return;
    }
    const employee: any = {
      street: this.invoiceForm.value.senderAddress.street,
      city: this.invoiceForm.value.senderAddress.city,
      postCode: this.invoiceForm.value.senderAddress.postCode,
      country: this.invoiceForm.value.senderAddress.country,
      clientName: this.invoiceForm.value.clientName,
      clientEmail: this.invoiceForm.value.clientEmail,
      clientStreet: this.invoiceForm.value.clientAddress.street,
      clientCity: this.invoiceForm.value.clientAddress.city,
      clientPostCode: this.invoiceForm.value.clientAddress.postCode,
      clientCountry: this.invoiceForm.value.clientAddress.country,
      paymentDue: this.invoiceForm.value.paymentDue,
      //paymentTerms: this.invoiceForm.value.paymentTerms,
      //description: this.invoiceForm.value.description,
    };

    this.employeeService.createNewInvoice(employee)
    .then((data) => {
        console.log(data);
        this.toastr.success('Successfully added', 'Employee Invoices', {
          positionClass: 'toast-top-right'
        });
        this.invoiceForm.reset();
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error('Error added', 'Employee Invoices', {positionClass: 'toast-top-right'})
      })
  }
}
