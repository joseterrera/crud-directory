This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project explores a CRUD directory using [GraphQL](https://graphql.org/), [apollo](https://www.apollographql.com/), [GraphCMS](https://graphcms.com/) and React [Hooks](https://reactjs.org/docs/hooks-intro.html).

To start this project, first we need to set up GraphCMS:

1. Create a new project with GraphCMS (from scratch, developer plan, which is free).
2. Create a new model called phonebook (in the schema tab), and add two fields, name and address.
3. Under Content create 4 entries, with name and address.
4. Still on this content tab, press the play button, which will show a preview in API Explorer, which will be what we are going to use in our app for our get query.
5. Go to settings tab, copy the URL under endpoints and paste it in the /src/index.js file. The permission I left it as OPEN, which is probably not safe in production.

After these steps, run: 

### `npm install`

### `npm start`


## Goal
To put into practice these technologies together into an app that can be easily adapted into any other type of crud app.


