export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  age?: Maybe<Scalars["Int"]>;
  books?: Maybe<Array<Maybe<Book>>>;
};

export type Book = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  genre?: Maybe<Scalars["String"]>;
  author?: Maybe<Author>;
};

export type Mutation = {
  addAuthor?: Maybe<Author>;
  updateAuthor?: Maybe<Author>;
  deleteAuthor?: Maybe<Author>;
  addBook?: Maybe<Book>;
  updateBook?: Maybe<Book>;
  deleteBook?: Maybe<Book>;
};

export type MutationAddAuthorArgs = {
  name: Scalars["String"];
  age: Scalars["Int"];
};

export type MutationUpdateAuthorArgs = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  age?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteAuthorArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type MutationAddBookArgs = {
  name: Scalars["String"];
  genre: Scalars["String"];
  authorId: Scalars["ID"];
};

export type MutationUpdateBookArgs = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  genre?: Maybe<Scalars["String"]>;
  authorId?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteBookArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type Query = {
  book?: Maybe<Book>;
  author?: Maybe<Author>;
  books?: Maybe<Array<Maybe<Book>>>;
  authors?: Maybe<Array<Maybe<Author>>>;
};

export type QueryBookArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryAuthorArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type Subscription = {
  authorAdded?: Maybe<Author>;
};
export type AuthorsQueryVariables = {};

export type AuthorsQuery = { __typename?: "Query" } & {
  authors: Maybe<
    Array<
      Maybe<{ __typename?: "Author" } & Pick<Author, "id" | "name" | "age">>
    >
  >;
};

export type BooksQueryVariables = {};

export type BooksQuery = { __typename?: "Query" } & {
  books: Maybe<
    Array<Maybe<{ __typename?: "Book" } & Pick<Book, "id" | "name" | "genre">>>
  >;
};

export type AuthorQueryVariables = {
  id: Scalars["ID"];
};

export type AuthorQuery = { __typename?: "Query" } & {
  author: Maybe<
    { __typename?: "Author" } & Pick<Author, "id" | "name" | "age"> & {
        books: Maybe<
          Array<
            Maybe<{ __typename?: "Book" } & Pick<Book, "id" | "name" | "genre">>
          >
        >;
      }
  >;
};

export type AddAuthorMutationVariables = {
  name: Scalars["String"];
  age: Scalars["Int"];
};

export type AddAuthorMutation = { __typename?: "Mutation" } & {
  addAuthor: Maybe<
    { __typename?: "Author" } & Pick<Author, "id" | "name" | "age">
  >;
};

export type AddBookMutationVariables = {
  name: Scalars["String"];
  genre: Scalars["String"];
  authorId: Scalars["ID"];
};

export type AddBookMutation = { __typename?: "Mutation" } & {
  addBook: Maybe<
    { __typename?: "Book" } & Pick<Book, "id" | "name" | "genre"> & {
        author: Maybe<{ __typename?: "Author" } & Pick<Author, "id" | "name">>;
      }
  >;
};

export type AuthorAddedSubscriptionVariables = {};

export type AuthorAddedSubscription = { __typename?: "Subscription" } & {
  authorAdded: Maybe<
    { __typename?: "Author" } & Pick<Author, "id" | "name" | "age">
  >;
};

import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

export const AuthorsDocument = gql`
  query authors {
    authors {
      id
      name
      age
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class AuthorsGQL extends Apollo.Query<
  AuthorsQuery,
  AuthorsQueryVariables
> {
  document = AuthorsDocument;
}
export const BooksDocument = gql`
  query books {
    books {
      id
      name
      genre
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class BooksGQL extends Apollo.Query<BooksQuery, BooksQueryVariables> {
  document = BooksDocument;
}
export const AuthorDocument = gql`
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

@Injectable({
  providedIn: "root"
})
export class AuthorGQL extends Apollo.Query<AuthorQuery, AuthorQueryVariables> {
  document = AuthorDocument;
}
export const AddAuthorDocument = gql`
  mutation addAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class AddAuthorGQL extends Apollo.Mutation<
  AddAuthorMutation,
  AddAuthorMutationVariables
> {
  document = AddAuthorDocument;
}
export const AddBookDocument = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
      author {
        id
        name
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class AddBookGQL extends Apollo.Mutation<
  AddBookMutation,
  AddBookMutationVariables
> {
  document = AddBookDocument;
}
export const AuthorAddedDocument = gql`
  subscription authorAdded {
    authorAdded {
      id
      name
      age
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class AuthorAddedGQL extends Apollo.Subscription<
  AuthorAddedSubscription,
  AuthorAddedSubscriptionVariables
> {
  document = AuthorAddedDocument;
}
