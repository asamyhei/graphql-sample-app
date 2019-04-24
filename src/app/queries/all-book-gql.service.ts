import {Injectable} from '@angular/core';
import {Query} from 'apollo-angular';
import gql from 'graphql-tag';

export interface Book {
  id: string;
  name: string;
  genre: string;
}

export interface Response {
  books: Book[];
}

@Injectable({
  providedIn: 'root'
})
export class AllBookGqlService extends Query<Response> {
  document = gql`
    query allAuthors {
      books {
        id
        name
        genre
      }
    }
  `;
}
