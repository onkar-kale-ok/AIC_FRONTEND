import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabulatorService {

  constructor(private http: HttpClient) {

  }

  private refreshSubject = new Subject<void>();
  private sortSubject = new Subject<void>();

  // Method to trigger refresh
  triggerRefresh() {
    this.refreshSubject.next();
  }

  // Method to trigger sort
  triggerSort() {
    this.sortSubject.next();
  }

  // Observable to subscribe for refresh events
  onRefresh() {
    return this.refreshSubject.asObservable();
  }

  // Observable to subscribe for sort events
  onSort() {
    return this.sortSubject.asObservable();
  }
}
