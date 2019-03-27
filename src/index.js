import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo-hooks';



const client = new ApolloClient({
    uri: "https://api-uswest.graphcms.com/v1/cjtgsd4hq493901b9v7rokkq7/master",
});


ReactDOM.render(
    <ApolloProvider client={ client } >
        <App />
    </ApolloProvider>
, document.getElementById('root'));


