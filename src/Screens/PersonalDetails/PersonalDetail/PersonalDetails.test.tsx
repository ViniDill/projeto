import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectCategory from '.';

describe('SelectCategory Component', () => {
    it('Renders without errors', () => {
      render(<SelectCategory />);
      
      const headerElement = screen.getByText('Personal_details_Registration_information');
      expect(headerElement).toBeInTheDocument();
  
      const personalInformationSubtitle = screen.getByText('Personal_details_personal_details');
      expect(personalInformationSubtitle).toBeInTheDocument();
  
      const functionsSubtitle = screen.getByText('Personal_details_functions');
      expect(functionsSubtitle).toBeInTheDocument();
    });
  
    it('Allows user input in form fields', () => {
      render(<SelectCategory />);
  
      const firstNameInput = screen.getByPlaceholderText('Personal_details_name_placeholder');
      const lastNameInput = screen.getByPlaceholderText('Personal_details_lastname_placeholder');
      const emailInput = screen.getByPlaceholderText('Personal_details_email_placeholder');
      const usernameInput = screen.getByPlaceholderText('Personal_details_user_placeholder');
      const passwordInput = screen.getByPlaceholderText('Personal_details_password_placeholder');
      const confirmPasswordInput = screen.getByPlaceholderText('Personal_details_confirm_password_placeholder');
      const activeInput = screen.getByPlaceholderText('Personal_details_active_placeholder');
  
      fireEvent.change(firstNameInput, { target: { value: 'John' } });
      fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
      fireEvent.change(activeInput, { target: { value: 'yes' } });
  
      expect(firstNameInput).toHaveValue('John');
      expect(lastNameInput).toHaveValue('Doe');
      expect(emailInput).toHaveValue('john@example.com');
      expect(usernameInput).toHaveValue('johndoe');
      expect(passwordInput).toHaveValue('password123');
      expect(confirmPasswordInput).toHaveValue('password123');
      expect(activeInput).toHaveValue('yes');
    });
});