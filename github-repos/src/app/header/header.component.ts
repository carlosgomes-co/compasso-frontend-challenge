import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { fade } from '@shared/animations/fade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  animations: [fade]
})
export class HeaderComponent implements OnInit, OnDestroy {

  /**
   * Search term name
   */
  @Input() searchTermName = 'UserName';

  /**
   * Needs to be displayed as a Page?
   */
  @Input() isPage: boolean;

  /**
   * Get isPage value subscription
   */
  private isPage$: Subscription;

  /**
   * Search term
   */
  public searchTerm = '';

  /**
   * Get searchTerm subscription
   */
  private searchTerm$: Subscription;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /**
     * Component needs to be displayed as a page?
     */
    if (this.isPage === undefined) {
      this.isPage$ = this.activatedRoute.data.subscribe(({ isPage }) => this.isPage = isPage);
    }
    this.searchTerm$ = this.activatedRoute.params.subscribe(({ searchTerm }) => this.searchTerm = searchTerm ? searchTerm : '');
  }

  ngOnDestroy(): void {
    if (this.isPage$) {
      this.isPage$.unsubscribe();
    }
    this.searchTerm$.unsubscribe();
  }

  /**
   * Search GitHub Repos by UserName
   */
  public search(): void {
    this.router.navigateByUrl(`/users/${this.searchTerm}`);
  }
}
