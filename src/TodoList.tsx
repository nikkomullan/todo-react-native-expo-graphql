import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import TodoItem from './TodoItem'
import { GET_TODOS } from '../data/queries'

const TodoList = () => {
  const { loading, error, data } = useQuery(GET_TODOS)

  if (error) return <Text>`Error! ${error.message}`</Text>
  // const loading = false
  // const data = {
  //   todos: [
  //     { id: 1, text: 'Water the cat' },
  //     { id: 2, text: 'Walk the TV' },
  //     { id: 3, text: 'Mop the dishes' },
  //   ],
  // }

  return loading ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data.todos}
        renderItem={({ item }: { item: ITodoItem }) => <TodoItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

interface ITodoItem {
  id: Number
  text: String
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 500,
  },
})

export default TodoList
