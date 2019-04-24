import {Injectable} from '@angular/core';
import {Query} from 'apollo-angular';
import gql from 'graphql-tag';
import {Author} from './all-author-gql.service';

export interface Response {
  author: Author;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorGqlService extends Query<Response> {
  document = gql`
    query author($id: ID!) {
      author(id: $id) {
        id
        name
        age
        books {
          id
          name
          genre
        }
      }
    }
  `;
}
