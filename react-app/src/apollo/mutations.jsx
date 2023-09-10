import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
    mutation Mutation($email: String!, $password: String!) {
        registerUser(email: $email, password: $password)
    }
`

export const ADD_TASK = gql`
    mutation Mutation($title: String!) {
        addTask(title: $title) {
        _id
        title
        dueDate
        setDate
        priority
        ownerId
        }
    }
`

export const DELETE_TASK = gql`
    mutation Mutation {
        deleteTask
    }
`

export const UPDATE_TASK = gql`
    mutation Mutation($updateTaskId: ID!, $title: String!) {
        deleteTask
        updateTask(id: $updateTaskId, title: $title) {
        _id
        title
        dueDate
        setDate
        priority
        ownerId
        }
    }
`
