import { Component, AfterViewInit, Input } from '@angular/core';

import { ApiService } from '@app/shared/services/api/api.service';
import { fade } from '@shared/animations/fade';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  animations: [fade]
})
export class ReposComponent implements AfterViewInit {

  /**
   * Repos or Starred type
   */
  @Input() type: string;

  /**
   * User Name
   */
  @Input() userName: string;

  /**
   * Loading data
   */
  public loading = true;

  /**
   * Data array
   */
  public data = [];

  constructor(private apiService: ApiService) { }

  ngAfterViewInit(): void {
    this.loading = true;

    this.apiService.loadRepos(this.userName, this.type).then((results) => {
      this.data = results;
      this.loading = false;

      if (!this.apiService.usersDetails[this.userName][`${this.type}`]) {
        this.apiService.usersDetails[this.userName][`${this.type}`] = this.data;
      }
    });
  }

}
