import React from 'react';
import { useTheme } from 'styled-components';
import { TextInput, TextInputProps, View } from 'react-native';
import { Container } from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

const Input: React.FC<Props> = ({ inputRef, ...rest }) => {
  const { COLORS } = useTheme();
  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
};

export default Input;
