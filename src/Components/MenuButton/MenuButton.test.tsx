import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuButton from ".";

describe('MenuButton Component', () => {
    const label = 'test';
    const iconName = 'Test';
  
    it('Renders with correct label and icon', () => {
      render(<MenuButton label={label} iconName={iconName} />);
      const labelElement = screen.getByText(label);
      const iconElement = screen.getByAltText(iconName);
      
      expect(labelElement).toBeInTheDocument();
      expect(iconElement).toBeInTheDocument();
    });
  
    it('Applies "selected" class when selected prop is true', () => {
        render(<MenuButton label={label} iconName={iconName} selected={true} />);
        const containerElement = screen.getByTestId('menu-button');
        
        expect(containerElement).toHaveClass('selected');
      });
  
    it('Does not apply "selected" class when selected prop is false', () => {
      render(<MenuButton label={label} iconName={iconName} selected={false} />);
      const containerElement = screen.getByTestId('menu-button');
      
      expect(containerElement).not.toHaveClass('selected');
    });
  });