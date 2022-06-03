import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
})
export class DetailItemComponent implements OnInit {
  id: any;
  dataEmployee: any;
  city!: string;

  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.employeeService.getEmployeeById(this.id).subscribe(res => {
      console.log(res.payload._delegate._document.data.value.mapValue.fields)
      this.dataEmployee = res.payload._delegate._document.data.value.mapValue.fields;
    });
  }


  removeEmployee(){
    this.employeeService.deleteEmployee(this.id);
    console.log('delete');
    this.router.navigate(['home'])
  }
}
