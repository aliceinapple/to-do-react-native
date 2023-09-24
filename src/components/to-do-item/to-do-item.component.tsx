import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import ToggleTodoButton from '../../ui/button/buttons/toggle-todo-button';
import EditTodoButton from '../../ui/button/buttons/edit-todo-button';
import DeleteTodoButton from '../../ui/button/buttons/delete-todo-button';
import TodoItemInput from '../../ui/input/inputs/todo-item-input';
import { editTodo } from '../../actions/edit-todo';
import { styles } from '../../ui/styles/styles';

interface ToDoItemProps {
  text: string;
  id: string;
  completed: boolean;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ text, id, completed }) => {
  const [value, setValue] = useState(text);
  const [readOnly, setReadOnly] = useState(true);

  const [fadeAnim] = useState(new Animated.Value(0));

  const handleEdit = async () => {
    await editTodo(id, value);
    setReadOnly(true);
  };

  const getColor = () => {
    if (completed) {
      return styles.itemCompleted;
    } else if (!readOnly) {
      return styles.itemEdit;
    } else {
      return styles.item;
    }
  };

  useEffect(() => {
    // Анимация появления при монтировании компонента
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      <View style={{ ...getColor() }} key={id}>
        <TodoItemInput
          readOnly={readOnly}
          completed={completed}
          value={value}
          setValue={setValue}
          handleEdit={handleEdit}
        />
        <View style={{ ...styles.row, alignSelf: 'stretch', justifyContent: 'flex-end' }}>
          <ToggleTodoButton id={id} completed={completed} />
          <EditTodoButton
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            handleEdit={handleEdit}
            completed={completed}
          />
          <DeleteTodoButton id={id} />
        </View>
      </View>
    </Animated.View>
  );
};


export default ToDoItem;
