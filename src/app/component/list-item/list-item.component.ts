import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})
export class ListItemComponent implements OnInit {

  dataItems: any = [];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.employeeService.getAllData().subscribe(data => {
      this.dataItems = [];
      data.forEach((ele:any) => {
        this.dataItems.push({
          id: ele.payload.doc.id,
          ...ele.payload.doc.data()
        })
      });
      console.log(this.dataItems);
    })
  }
}
