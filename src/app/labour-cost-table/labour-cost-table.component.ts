import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProviderI } from '../interfaces/labourCostReport.interface';
import { HttpService } from '../services/http/http.service';
import { SortingService } from '../services/sorting/sorting.service';

@Component({
  selector: 'app-labour-cost-table',
  templateUrl: './labour-cost-table.component.html',
  styleUrls: ['./labour-cost-table.component.scss']
})
export class LabourCostTableComponent implements OnInit {

  constructor(
    private _sortingService: SortingService,
    private _httpService: HttpService
  ) { }
  payrollArrow: boolean;
  labourCostTotalArrow: boolean;

  providers: ProviderI[] = [];
  total: ProviderI[] = [];

  ngOnInit(): void {
    this._httpService.getLabourCostDataReport().subscribe(
      data => {
      if (data && (data.providers || data.directContractors || data.total)) {
        this.providers = data.directContractors ? data.directContractors.concat(data.providers) : data.providers;
        this.total = data.total;  
      }
    },
    err => {
      console.log('error has occured');
    });
  }

  sortInverse() {
    this.payrollArrow = !this.payrollArrow;
    this.providers = this._sortingService.sortReverse(this.providers, this.payrollArrow);
  }


  sortByKey(key: string) {
    this.labourCostTotalArrow = !this.labourCostTotalArrow;
    this.providers = this._sortingService.sortByKey(key, this.providers, this.labourCostTotalArrow);
  }

}
