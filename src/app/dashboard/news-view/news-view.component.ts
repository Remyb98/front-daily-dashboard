import { Component, OnInit } from '@angular/core';
import mockNews from './mockNews';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit {

  constructor() { }

  news = mockNews;

  ngOnInit() { }

}
