import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ApiService } from '@shared/services/api/api.service';
import { fade } from '@shared/animations/fade';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  animations: [fade]
})
export class DetailsComponent implements OnInit, AfterViewInit {

  /**
   * Loading data
   */
  public loading = true;

  /**
   * Data array
   */
  public data: any = {};

  /**
   * Open Modal Target
   */
  public modalRepos = '';

  /**
   * User name
   */
  public userName = '';

  /**
   * Get userName subscription
   */
  private userName$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.userName$ = this.activatedRoute.params.subscribe(({ userName }) => {
      this.userName = userName;
      this.getData();
    });
  }

  ngAfterViewInit(): void {
    console.log('this.data', this.data);
    this.apiService.loadUser(this.userName).then((results) => {
      this.apiService.usersDetails[this.userName] = this.data = results;
      this.loading = false;
    });
  }

  /**
   * Get data by userName
   */
  getData(username = this.userName): void {
    if (this.apiService.lastSearchResult && this.apiService.lastSearchResult.items && this.apiService.lastSearchResult.items.length) {
      this.data = this.apiService.lastSearchResult.items.find(({ login }) => login === username);
    }
  }

}
