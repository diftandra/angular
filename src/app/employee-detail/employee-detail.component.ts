import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Worker } from '../model/workers';
import { WorkersService } from '../service/workers.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  paramId = Number(this.route.snapshot.paramMap.get('id'));
  worker: Worker | undefined;

  constructor(
    private workersService: WorkersService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.getWorker();
  }

  ngOnInit(): void {}

  getWorker(): void {
    this.workersService
      .getWorker(this.paramId)
      .subscribe((response) => (this.worker = response));
  }

  delete() {
    this.workersService.deleteHeroService(this.paramId);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
