import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon } from './styles';

type Props = TouchableOpacityProps & {};

const ButtonIcon: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Icon name="home" type="PRIMARY" />
    </Container>
  );
};

export default ButtonIcon;
