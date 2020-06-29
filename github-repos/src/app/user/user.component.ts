import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  /**
   * Search term
   */
  public searchTerm = '';

  /**
   * Get searchTerm subscription
   */
  private searchTerm$: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchTerm$ = this.activatedRoute.params.subscribe(({ searchTerm }) => this.searchTerm = searchTerm ? searchTerm : '');
  }

}
