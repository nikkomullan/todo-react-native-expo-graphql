import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Alert, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import { GRAPHQL_ENDPOINT } from '../config'
import { INSERT_USERS } from '../data/mutations'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

const Main = ({ token, user }) => {
  const [client, setClient] = useState(null)

  useEffect(() => {
    const { id, name, isNewUser } = user

    const client = new ApolloClient({
      uri: GRAPHQL_ENDPOINT,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (isNewUser) {
      client
        .mutate({
          mutation: INSERT_USERS,
          variables: { id, name },
        })
        .catch(console.log)
        .then(console.log)
    }

    setClient(client)
  }, [])

  if (!client) {
    return <ActivityIndicator size="large" color="#00f" />
  }

  return (
    <ApolloProvider client={client}>
      <View>
        <Text>Welcome {user.name}!</Text>
        <AddTodo />
        <TodoList />
      </View>
    </ApolloProvider>
  )
}

Main.propTypes = {
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}

export default Main
