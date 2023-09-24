import React, { useContext } from 'react';
import { TextInput, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TodosContext } from '../../../App';
import { styles } from '../styles/styles';
import { colors } from '../styles/colors';

interface TodoInputProps {
  placeholder?: string;
  multiline: boolean;
  readOnly?: boolean;
  value: string;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  setValue: (value: string) => void;
  onPressEnter: () => Promise<void>;
}

const TodoInput: React.FC<TodoInputProps> = ({
  placeholder,
  multiline,
  readOnly,
  value,
  style,
  setValue,
  onPressEnter,
}) => {
  const { handleGetTodos } = useContext(TodosContext);

  const handleInputChange = (text: string) => {
    setValue(text);
  };

  const handlePressEnter = async () => {
    await onPressEnter();
    await handleGetTodos();
  };

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.transparentBlack}
      editable={!readOnly}
      value={value}
      onChangeText={handleInputChange}
      onSubmitEditing={handlePressEnter}
      multiline={multiline}
      style={[style,
        styles.input
      ]}
    />
  );
};

export default TodoInput;
