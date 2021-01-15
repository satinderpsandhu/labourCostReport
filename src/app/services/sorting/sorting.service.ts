import { Injectable, Provider } from '@angular/core';
import { ProviderI } from 'src/app/interfaces/labourCostReport.interface';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  
  sortReverse(array: ProviderI[], arrowKey: boolean) {
    return array.sort((a,b) => {
      if (a.name === b.name) {
        return 0;
      }
      if (a.name === 'Direct Contractors') {
        return -1;
      }
      if (b.name === 'Direct Contractors') {
        return 1;
      }
      return arrowKey ? a.name > b.name  ? 1 : -1 : a.name > b.name ? -1 : 1;   
    });
  }


  sortByKey(key: string, array: ProviderI[], arrowKey: boolean): any[] {
    return array.sort((a, b) => {
      let x = a[key];
      let y = b[key];
      
      return arrowKey ? ((x < y) ? -1 : ((x > y) ? 1 : 0)) : ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });
  }
}
