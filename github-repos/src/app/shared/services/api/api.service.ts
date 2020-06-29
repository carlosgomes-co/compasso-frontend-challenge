import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * API Endpoint
   */
  private endpoint = 'https://api.github.com';

  /**
   * Last term searched
   */
  private lastSearchTerm: string;
  /**
   * Last search performed results
   */
  public lastSearchResult: any[];

  constructor(private httpClient: HttpClient) { }

  /**
   * Search Users
   * @param searchTerm Search term to match users
   */
  public async searchUsers(searchTerm: string): Promise<any> {
    if (this.lastSearchTerm !== searchTerm) {
      this.lastSearchTerm = searchTerm;
      return this.httpClient.get<any>(`${this.endpoint}/search/users?q=${searchTerm}`).toPromise();
    } else {
      return new Promise((resolve) => resolve(this.lastSearchResult));
    }
  }
}
