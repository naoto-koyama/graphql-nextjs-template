/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'mutation createPost($params: CreatePost!) {\n  createPost(input: {params: $params}) {\n    id\n    title\n    body\n  }\n}':
    types.CreatePostDocument,
  'mutation UpdatePost($params: UpdatePost!) {\n  updatePost(input: {params: $params}) {\n    id\n    title\n    body\n  }\n}':
    types.UpdatePostDocument,
  'query GetPost($id: ID!) {\n  post(id: $id) {\n    id\n    title\n    body\n  }\n}':
    types.GetPostDocument,
  'query GetPosts {\n  posts {\n    id\n    title\n  }\n}':
    types.GetPostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation createPost($params: CreatePost!) {\n  createPost(input: {params: $params}) {\n    id\n    title\n    body\n  }\n}'
): (typeof documents)['mutation createPost($params: CreatePost!) {\n  createPost(input: {params: $params}) {\n    id\n    title\n    body\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation UpdatePost($params: UpdatePost!) {\n  updatePost(input: {params: $params}) {\n    id\n    title\n    body\n  }\n}'
): (typeof documents)['mutation UpdatePost($params: UpdatePost!) {\n  updatePost(input: {params: $params}) {\n    id\n    title\n    body\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetPost($id: ID!) {\n  post(id: $id) {\n    id\n    title\n    body\n  }\n}'
): (typeof documents)['query GetPost($id: ID!) {\n  post(id: $id) {\n    id\n    title\n    body\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetPosts {\n  posts {\n    id\n    title\n  }\n}'
): (typeof documents)['query GetPosts {\n  posts {\n    id\n    title\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
