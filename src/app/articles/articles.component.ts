import { Component, OnInit, Input, Output } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles!: Article[];
  @Output() updateRequest = new EventEmitter<void>();

  constructor(private articleService: ArticleService) {
  }

  async ngOnInit() {
  }

  async delete(id: number): Promise<void> {
    await this.articleService.deleteArticle(id);
    this.articles = await this.articleService.getArticles();
    // Tell parent to update list
    this.updateRequest.emit();
  }
}

