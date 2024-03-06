import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MultiplicationResult } from 'src/types/multiplication-result.model';

@Injectable({
  providedIn: 'root'
})
export class DataProcessingService {
  private apiUrl = 'https://localhost:7283/api/data-processing/process';

  constructor(private http: HttpClient) { }

  getResults(numbers: number[]): Observable<MultiplicationResult[]> {
    return this.http.post<MultiplicationResult[]>(this.apiUrl, numbers);
  }
}
