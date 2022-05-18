import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-articles-all',
  templateUrl: './articles-all.component.html',
  styleUrls: ['./articles-all.component.css']
})
export class ArticlesAllComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) {
  }

  async ngOnInit() {
    // Get all the articles
    await this.updateArticles()
  }

  async delete(id: number): Promise<void> {
    await this.articleService.deleteArticle(id);
    this.articles = await this.articleService.getArticles();
  }

  async updateArticles(): Promise<void> {
    // Get all articles
    this.articles = await this.articleService.getArticles();
  }
}
