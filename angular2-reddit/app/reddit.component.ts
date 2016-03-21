import { Component } from 'angular2/core';
import { ArticleComponent } from './article.component';
import { Article } from './article';

@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    templateUrl: 'app/reddit.component.html'
})

export class RedditApp {
    articles: Article[];

    constructor() {
        this.articles = [
            new Article('Raincal\'s Blog', 'http://cyj228.com', 3),
            new Article('Angular 2', 'http://angular.io', 2),
            new Article('Fullstack', 'http://fullstack.io', 1)
        ];

    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        if (title.value && link.value) {
            this.articles.push(new Article(title.value, link.value, 0));
        }
        this.clearForm(title, link);
    }

    clearForm(title: HTMLInputElement, link: HTMLInputElement) {
        title.value = '';
        link.value = '';
    }
    
    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}