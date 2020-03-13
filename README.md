# TODO app

Playground for testing technologies.

## Technologies

- React Native
- Expo
- GraphQL
- Apollo Client
- Hasura

## Config

Create a `config.ts` in the root of the project with the following prefilled information.

```js
export const AUTH_CLIENT_ID = '<your-auth0-client-id>'
export const AUTH_DOMAIN = 'https://<your-subdomain>.eu.auth0.com'
export const AUTH_NAMESPACE = 'https://user'
export const ID_TOKEN_KEY = 'todo-id-token'
export const NONCE_KEY = 'todo-nonce'
export const GRAPHQL_ENDPOINT = 'http://<your-host>/v1/graphql'
```
