import React from 'react';
import { TextInputProps, View } from 'react-native';
import { Container } from './styles';

// import { Container } from './styles';

const Input: React.FC<TextInputProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default Input;
