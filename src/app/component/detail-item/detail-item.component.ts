import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
})
export class DetailItemComponent implements OnInit {
  id!: any;
  dataEmployee: any[] =[];
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getItemById();
  }

  getItemById(){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    if(this.id !== null) {
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        console.log(data);
      })
    }    
  }

  deleteEmploye(id: string) {
    this.employeeService
      .deleteEmployeeById(id)
      .then(() => {
        this.router.navigate(['detail-item']);
        console.log();
      })
      .catch((error) => {
        console.log('error');
      });
  }
}
