import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) {
  }

  async ngOnInit() {
    await this.updateArticles()
  }

  async updateArticles(): Promise<void> {
    this.articles = await this.articleService.getArticles();
    // Sort by creation date (ID)
    this.articles =
     this.articles.sort((a:Article, b:Article) => b.id - a.id)

    // Get the 10 first articles
    this.articles = this.articles.splice(0, 10);
    // TODO: articles filters
  }
}
