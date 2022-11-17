import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Worker, WorkerModel } from '../model/workers';
import { WorkersService } from '../service/workers.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  paramId = Number(this.route.snapshot.paramMap.get('id'));
  title: string = 'Judul awal';
  count: number = 1;
  inc(value: number) {
    this.count = this.count + value;
  }

  activity: string = '[Activity] Contact';
  addActivity: boolean = false;
  editActivity: boolean = false;

  workerModel = new WorkerModel(
    'Employee Name',
    '123456789',
    'none',
    'none'
  );
  submitted = false;

  constructor(
    private workersService: WorkersService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.processData(this.workerModel);
  }

  initForm(): void {
    if (this.paramId == 0) {
      this.activity = 'Add';
    } else {
      this.activity = 'Edit';
      this.workersService
        .getWorker(this.paramId)
        .subscribe((worker) => (this.workerModel = worker));
    }
  }

  goBack(): void {
    this.location.back();
  }

  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  processData(data: WorkerModel = this.workerModel): void {
    data.name = data.name.trim();
    if (!data.name) {
      return;
    }
    if (this.activity == 'Add') {
      this.workersService.addHeroService(data as Worker).subscribe((worker) => {
        this.goBack();
      });
    } else if (this.activity == 'Edit') {
      this.workersService
        .editHeroService(data as Worker, this.paramId)
        .subscribe((worker) => {
          this.goBack();
        });
    }
  }

}
