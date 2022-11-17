import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Worker } from '../model/workers';

@Injectable({
  providedIn: 'root',
})
export class WorkersService {
  private workersUrl: string = 'http://localhost:8000/freelancers';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  getWorkers(searchQuery: string): Observable<Worker[]> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    params = params.set('name_like', searchQuery);
    console.log('searchQuery: ' + searchQuery);
    return this.http.get<Worker[]>(this.workersUrl, { params: params });
  }

  getWorker(id: number): Observable<Worker> {
    const urlByID = `${this.workersUrl}/${id}`;
    return this.http.get<Worker>(urlByID); //
  }

  /**
   * Add hero service
   */
  addHeroService(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.workersUrl, worker, this.httpOptions);
  }

  editHeroService(worker: Worker, id: number): Observable<Worker> {
    const urlByID = `${this.workersUrl}/${id}`;
    return this.http.put<Worker>(urlByID, worker, this.httpOptions);
  }

  deleteHeroService(id: number): void {
    const urlByID = `${this.workersUrl}/${id}`;
    this.http.delete(urlByID).subscribe({
      next: (data) => {
        return 'Delete successful';
      },
      error: (error) => {
        return error.message;
        console.error('There was an error!', error);
      },
    });
  }
}
