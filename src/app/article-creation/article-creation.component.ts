import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm: FormGroup;
  @Output() creationRequest = new EventEmitter<number>();

  constructor(private fb: FormBuilder,
    private articleService: ArticleService,
    private _router: Router) {
    this.articleForm = this.fb.group({
      title: ['New Article', Validators.required],
      content: ['This is the thing! I love sandwich', Validators.required],
      author: ['ToMansion', Validators.required],
    });
  }

  ngOnInit() {
  }

  async createArticle() {
    const newId = await this.articleService.createArticle({
      title: this.articleForm.get('title').value,
      content: this.articleForm.get('content').value,
      author: this.articleForm.get('author').value,
    });
    this.creationRequest.emit();
    this._router.navigateByUrl(`/articles/${newId}`)
  }

}
