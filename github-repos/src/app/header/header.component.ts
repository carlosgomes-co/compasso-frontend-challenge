import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  @Input() isPage = false;

  /**
   * Get isPage value
   */
  private isPage$: Subscription;

  /**
   * Search term
   */
  public searchTerm: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /**
     * Component needs to be displayed as a page?
     */
    this.isPage$ = this.activatedRoute.data.subscribe(({ isPage }) => this.isPage = isPage);
  }

  ngOnDestroy(): void {
    this.isPage$.unsubscribe();
  }

  /**
   * Search GitHub Repos by UserName
   */
  public search(): void {

  }
}
