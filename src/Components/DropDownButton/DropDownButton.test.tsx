import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import DropDownButton from '.';

describe('DropDownButton Component', () => {
  const iconName = 'exampleIcon';
  const headerText = 'Example Header';
  
  it('Renders header text and icon correctly', () => {
    render(
      <DropDownButton iconName={iconName} header={headerText}>
        Content
      </DropDownButton>
    );
    
    const headerElement = screen.getByText(headerText);
    const iconElement = screen.getByAltText(iconName);
    
    expect(headerElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
  
  it('Displays children content when accordion is expanded', () => {
    render(
      <DropDownButton iconName={iconName} header={headerText}>
        <div>Content</div>
      </DropDownButton>
    );
    
    const accordionButton = screen.getByRole('button');
    fireEvent.click(accordionButton);
    
    const contentElement = screen.getByText('Content');
    
    expect(contentElement).toBeInTheDocument();
  });
  
  it('Hides children content when accordion is collapsed', () => {
    render(
      <DropDownButton iconName={iconName} header={headerText}>
        <div>Content</div>
      </DropDownButton>
    );
  
    const accordionButton = screen.getByRole('button');
    fireEvent.click(accordionButton);

    const contentElementVisible = screen.getByText('Content');
    expect(contentElementVisible).toBeInTheDocument();
  
    fireEvent.click(accordionButton);
  
    setTimeout(() => {
      const contentElementHidden = screen.queryByText('Content');
      expect(contentElementHidden).not.toBeInTheDocument();
    },500);
  });
});