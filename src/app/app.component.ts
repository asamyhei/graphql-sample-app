import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AddAuthorGQL, Author, AuthorAddedGQL, AuthorGQL, AuthorsGQL, Book, BooksGQL} from '../generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-client';
  authors$: Observable<Author[]>;
  author$: Observable<Author>;
  books$: Observable<Book[]>;
  authorAdded$: Observable<Author>;

  constructor(private allBookGqlService: BooksGQL,
              private allAuthorGQLService: AuthorsGQL,
              private authorGQLService: AuthorGQL,
              private addAuthorGQL: AddAuthorGQL,
              private authorAddedGQL: AuthorAddedGQL) {

    this.authors$ = this.allAuthorGQLService
      .watch()
      .valueChanges.pipe(map((response) => response.data.authors));

    this.books$ = this.allBookGqlService
      .watch()
      .valueChanges.pipe(map((response) => response.data.books));

    this.authorAdded$ = this.authorAddedGQL.subscribe().pipe(map(response => response.data.authorAdded));
  }

  clickAuthor(authorId: string) {
    console.log(authorId);

    this.author$ = this.authorGQLService
      .watch({id: authorId})
      .valueChanges.pipe(map((response) => response.data.author));
  }

  clickAddAuthor() {
    this.addAuthorGQL.mutate({age: 12, name: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 9)}).subscribe();
  }
}
