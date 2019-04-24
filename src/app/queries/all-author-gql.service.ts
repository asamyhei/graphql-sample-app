import {Injectable} from '@angular/core';
import {Query} from 'apollo-angular';
import gql from 'graphql-tag';
import {Book} from './all-book-gql.service';

export interface Author {
  id: string;
  name: string;
  age: number;
  books: Book[];
}

export interface Response {
  authors: Author[];
}

@Injectable({
  providedIn: 'root'
})
export class AllAuthorGqlService extends Query<Response> {
  document = gql`
    query allAuthors {
      authors {
        id
        name
        age
      }
    }
  `;
}
