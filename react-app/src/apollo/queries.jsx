import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
    query GetTasks {
        currentUser
    }
`

export const LOGIN = gql`
    query GetTasks($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
        user {
            email, password
        }
        }
    }
`

export const GET_TASKS = gql`
    query GetTasks {
        getTasks {
            _id
            title
            dueDate
            ownerId
            priority
            setDate
        }
    }
`

export const LOG_OUT = gql`
    query GetTasks {
        signOut
    }
`

export const TEST_QUERY = gql`
query Query {
    testQuery
  }
`