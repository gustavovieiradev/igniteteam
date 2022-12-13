import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonIconStyleProps, Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconStyleProps;
};

const ButtonIcon: React.FC<Props> = ({ icon, type = 'PRIMARY', ...rest }) => {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
};

export default ButtonIcon;
