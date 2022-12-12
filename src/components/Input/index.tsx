import React from 'react';
import { useTheme } from 'styled-components';
import { TextInputProps, View } from 'react-native';
import { Container } from './styles';

// import { Container } from './styles';

const Input: React.FC<TextInputProps> = ({ ...rest }) => {
  const { COLORS } = useTheme();
  return <Container placeholderTextColor={COLORS.GRAY_300} {...rest} />;
};

export default Input;
