import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import config from './config';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsSubject = new Subject<News>();

  private news: News = null;

  error = false;

  getNews() {
    this.httpClient.get<News>(config.url + 'news')
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
