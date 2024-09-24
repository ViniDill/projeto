import React, { useState, useRef, useEffect, useCallback } from "react";
import theme from "../../theme";
import { Container, CodeDigit, ErrorMessage } from "./styles";
import { useTranslation } from "react-i18next";
import Spacer from "../Spacer";

interface PropsDigitInputCode {
  error: boolean;
  onBlur?: () => void;
}

const DigitInputCode: React.FC<PropsDigitInputCode> = ({ error, onBlur }) => {
  const [code, setCode] = useState<string[]>(Array(4).fill(''));
  const [errorMessage, setErrorMessage] = useState<string>(''); 
  const inputs = useRef<HTMLInputElement[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      setErrorMessage(t('Digit_input_code_invalid_code'));
    }
  }, [error, t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (!/^\d*$/.test(value)) {
      setErrorMessage(t('Digit_input_code_only_numbers_are_allowed'));
      return;
    }
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (index < 3 && value !== '') {
      inputs.current[index + 1]?.focus();
    }
    if (value !== '' && !isValid(value)) {
      setErrorMessage(t('Digit_input_code_invalid_code'));
    } else {
      if (errorMessage === t('Digit_input_code_invalid_code')) {
        setErrorMessage('');
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && index > 0 && code[index] === '') {
      e.preventDefault(); // Evita que o navegador navegue para trás
      let newIndex = index - 1;
      while (newIndex >= 0 && code[newIndex] === '') {
        newIndex--;
      }
      if (newIndex >= 0) {
        const previousInput = inputs.current[newIndex];
        if (previousInput) {
          previousInput.focus();
        }
      }
    }
  };

  const handleBlur = useCallback(() => {
    const enteredCode = code.join('');
    console.log(enteredCode);
    if (onBlur) {
      onBlur();
    }
  }, [code, onBlur]);

  const isValid = (value: string) => {
    return value !== '' && !isNaN(Number(value));
  };

  return (
    <div>
      <Container data-testid="digit-input-container">
        {Array.from({ length: 4 }).map((_, index) => (
          <CodeDigit
            key={index}
            type="text"
            maxLength={1}
            value={code[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onBlur={handleBlur}
            invalid={error}
            ref={(input) => (inputs.current[index] = input as HTMLInputElement)}
            style={{ border: `1px solid ${error ? theme.colors.error : theme.colors.neutrals90}` }}
            aria-invalid={!isValid(code[index])}
            aria-label={`Digit ${index + 1}`}
            data-testid={`digit-input-${index}`}
          />
        ))}
      </Container>
      <Spacer size="m" />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};

export default DigitInputCode;
