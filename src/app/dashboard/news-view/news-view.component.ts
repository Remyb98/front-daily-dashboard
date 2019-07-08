import { Component, OnInit } from '@angular/core';
import mockNews from './mockNews';
import { NewsService } from 'src/app/service/news.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  news;

  newsSubscription: Subscription;

  ngOnInit() {
    this.newsSubscription = this.newsService.newsSubject.subscribe(
      (news: any[]) => this.news = news
    );
    this.newsService.emitNews();
    this.newsService.getNews();
  }

}
