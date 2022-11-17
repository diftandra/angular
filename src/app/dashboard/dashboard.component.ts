import { Component, OnInit } from '@angular/core';

import { Worker } from '../model/workers';
import { WorkersService } from '../service/workers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  workers: Worker[] = [];
  title: string = 'Dashboard';
  searchQuery: string = '';

  date = new Date();
  emptyData: string = 'empty data';

  constructor(private workerService: WorkersService) {}

  ngOnInit(): void {
    this.workers = [];
    this.getWorkers();
  }

  getWorkers(): void {
    console.log('getWorkers is triggered');
    this.workerService.getWorkers(this.searchQuery).subscribe((response) => {
      this.workers = response;
      console.log('new data is received: ' + response);
    });
  }
}
