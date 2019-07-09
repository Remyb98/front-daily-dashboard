import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import URL from './config';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsSubject = new Subject<any[]>();

  private news = [];

  error = false;

  getNews() {
    this.httpClient.get<any[]>(URL + 'news')
      .subscribe(
        response => {
          this.news = response;
          this.emitNews();
        },
        error => this.error = true
      );
  }

  emitNews() {
    this.newsSubject.next(this.news);
  }

  constructor(private httpClient: HttpClient) { }
}
