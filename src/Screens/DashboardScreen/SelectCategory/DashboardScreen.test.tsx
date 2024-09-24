import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import DashboardScreen from '.';

describe('DashboardScreen Component', () => {
  const labelMatcher = /Área de Negócio/i;
    
  it('Renders header text and icon correctly', () => {
      render(
        <DashboardScreen />
      );
      
      const labelElements = screen.getAllByText(labelMatcher);
      const iconElements = screen.getAllByTestId("icon");
      
      expect(labelElements.length).toBeGreaterThan(0);
      labelElements.forEach(labelElement => {
        expect(labelElement).toBeInTheDocument();
      });
      expect(iconElements.length).toBeGreaterThan(0);
      iconElements.forEach(iconElement => {
        expect(iconElement).toBeInTheDocument();
      });
  });

  it('Displays NavigableCard components with correct data', () => {
      render(<DashboardScreen />);
      const labelMatcher = /Área de Negócio/i;
      const navigableCards = screen.getAllByText(labelMatcher);
      expect(navigableCards.length).toBeGreaterThan(0);
      navigableCards.forEach((card) => {
          expect(card).toBeInTheDocument();
      });
  });
  
    it('Renders NavigableCard components with correct icon', () => {
      render(
        <DashboardScreen />
      );
      
      const iconImages = screen.getAllByTestId("icon");
      expect(iconImages).toHaveLength(6);
    });
});