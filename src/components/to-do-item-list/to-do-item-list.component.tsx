import React from 'react';
import { ScrollView, View } from 'react-native';
import ToDoItem from '../to-do-item/to-do-item.component';
import { styles } from '../../ui/styles/styles';

interface ToDoItemListProps {
  todos: { _id: string; text: string; completed: boolean }[];
}

const ToDoItemList: React.FC<ToDoItemListProps> = ({ todos }) => {

  const done = todos?.filter((item) => item.completed);
  const todo = todos?.filter((item) => !item.completed);

  return (
    <ScrollView contentContainerStyle={{ justifyContent: 'center', gap: 10 }}>
      {todo?.map((item) => (
        <ToDoItem key={item._id} text={item.text} id={item._id} completed={item.completed} />
      ))}
      {done?.map((item) => (
        <ToDoItem key={item._id} text={item.text} id={item._id} completed={item.completed} />
      ))}
    </ScrollView>
  );
};

export default ToDoItemList;
