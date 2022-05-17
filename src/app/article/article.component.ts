import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article!: Article;
  @Output() deleteRequest = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteRequest.emit(this.article.id);
  }


}