import React, {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, InputBody } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ text, icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);

    setIsFilled(!!e.target.value);
  }, []);

  return (
    <Container>
      <span>{text}</span>
      <InputBody isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={24} />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          type="text"
          {...rest}
        />
      </InputBody>
    </Container>
  );
};

export default Input;
