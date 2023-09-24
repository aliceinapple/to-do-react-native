import { createContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TextProps, View } from 'react-native';
import { getTodos } from './src/actions/get-todos';
import { texts } from './src/resources/texts';

import ToDoItemList from './src/components/to-do-item-list/to-do-item-list.component';
import ToDoInput from './src/components/to-do-input/to-do-input.component';
import { styles } from './src/ui/styles/styles';


export const TodosContext = createContext({
  handleGetTodos: async () => { },
});

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleGetTodos = async () => {
    const items = await getTodos();
    setTodos(items);
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  return (
    <View style={styles.container}>
      <TodosContext.Provider value={{ handleGetTodos }}>
        <View style={styles.col}>
          <Text style={styles.title}>{texts.app_title}</Text>
          <ToDoInput />
          <View style={{height: 20}}></View>
          <ToDoItemList todos={todos} />
        </View>
      </TodosContext.Provider>
    </View>
  );
}

