# simple-basic-math-problems
# Test 2 : NodeJS/Loopback

Task is to implement a service with couple of endpoints accessing a database through the Loopback 4 ORM.
#### Given a Postgres database
```CREATE TABLE notes (
id SERIAL PRIMARY KEY,
added VARCHAR(255) NULL,
author VARCHAR(255) NOT NULL,
content VARCHAR(255) NOT NULL
);```

#### Build GET /notes
Variable return example:
```
{
  id: 1,
  added: "2019-11-23",
  author: "John",
  content: "Remember to buy some milk"
},
{
  id: 2,
  added: "2019-11-24",
  author: "Jane",
  content: "By cereals..."
}
```

#### Build GET /notes/:id
Varibale return example:
```
{
  id: 2,
  added: "2019-11-24",
  author: "Jane",
  content: "By cereals..."
}
```

#### Build GET /notes?author=John
Varibale return example:
```
{
  id: 1,
  added: "2019-11-23",
  author: "John",
  content: "Remember to buy some milk"
},
```

#### Build POST /notes
Create new data.

### Run App

#### Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

#### Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

#### Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

#### Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

#### Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file

#### Tests

```sh
npm test
```
