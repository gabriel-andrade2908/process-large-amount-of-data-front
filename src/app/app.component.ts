import { Component } from '@angular/core';
import { DataProcessingService } from './../services/data-processing-service';
import { MultiplicationResult } from './../types/multiplication-result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numberList: string = '';
  results: MultiplicationResult[] = [];

  constructor(private dataProcessingService: DataProcessingService) { }

  getResults(): void {
    const numbers = this.numberList.split(',').map(Number);
    this.dataProcessingService.getResults(numbers)
      .subscribe(
        results => {
          this.results = results;
        }
      );

      this.numberList = '';
  }
}