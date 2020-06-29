import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

import { ApiService } from '@shared/services/api/api.service';

import { fade } from '@shared/animations/fade';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [fade]
})
export class ListComponent implements OnChanges {

  /**
   * Search term name
   */
  @Input() searchTerm: string;

  /**
   * Loading data
   */
  public loading = true;

  /**
   * Data array
   */
  public data = [];

  constructor(private apiService: ApiService) { }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    this.loading = true;
    this.apiService.searchUsers(this.searchTerm).then((results) => {
      this.apiService.lastSearchResult = results;
      this.data = results.items;
      this.loading = false;
    });
  }

}
