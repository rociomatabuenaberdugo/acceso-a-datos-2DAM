import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  public settings = {
    perPage: 10,
    subreddit: 'gifs',
    sort: '/hot'
  };

  public posts: any[] = [];

  public loading: boolean = false;

  private page: number = 1;
  
  private after: string;

  private moreCount: number = 0;

  constructor( private httpClient: HttpClient, private dataServices: DataService ) { }

  load(): void {

  }

  fetchDate(): void {

  }

  nextPage(): void {

  }

  resetPost(): void {

  }

  changeSubreddit(subreddit: string): void {

  }
}
