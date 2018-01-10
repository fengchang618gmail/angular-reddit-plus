import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];
  article: Article;

  constructor() {
    this.articles = [
      new Article('Angualr 5', 'http://angualr.io', 10),
      new Article('Fullstack', 'http://fullstack.io', 10),
      new Article('Angualr Homepage', 'http://angualr.io', 10),
    ];
  }

  addArticle(newtitle, newlink): boolean {
    this.articles.push(new Article(`${newtitle.value}`, `${newlink.value}`, 10));
    newtitle.value = '';
    newlink.value = '';
    console.log(`${newtitle.value}`);
    return false;
  }

  sortedArticle(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
