import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})
export class ListItemComponent implements OnInit {

  employee: any[] = [];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employee = [];
      data.forEach((ele: any) => {
        this.employee.push({
          id: ele.payload.doc.id,
          ...ele.payload.doc.data()
        })
        console.log(ele.payload.doc.id)
        console.log(ele.payload.doc.data())
      })
    });
    console.log(this.employee);
  }
}
