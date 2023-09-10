import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// with 'client', we are now ready to start fetching data
const client = new ApolloClient({
    url: 'http://localhost:4000',
    cache: new InMemoryCache(), //  instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
    connectToDevTools: true
});

export default client

