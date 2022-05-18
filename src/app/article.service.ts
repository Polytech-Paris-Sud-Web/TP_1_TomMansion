import { Injectable } from '@angular/core';
import { Article } from './article';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  public async getArticles(): Promise<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles").toPromise();
  }

  public async getArticle(id: number): Promise<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`).toPromise();
  }
  public async getAuthorArticles(author: string):  Promise<Article[]> {
    const allArticles = await this.getArticles();

    return allArticles.filter((a:Article) => {
      return a.author === author
    })
  }

  public async deleteArticle(id: number) {
    return this.http.delete(`http://localhost:3000/articles/${id}`).toPromise();
  }

  public async createArticle(Input: { title: string; content: string; author: string; }): Promise<number> {
    // const articles = await this.getArticles();
    // const maxId = articles.reduce((max, article) => article.id > max ? article.id : max, 0);

    // ID will auto increment
    // Latest article will always have the highest ID

    const article = {
      // id: maxId + 1,
      title: Input.title,
      content: Input.content,
      author: Input.author,
    }
    const retArticle: Article = await this.http.post<Article>("http://localhost:3000/articles", article).toPromise();

    return retArticle.id;
  }
}
