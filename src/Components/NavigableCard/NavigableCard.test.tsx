import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import NavigableCard from '.';

describe('NavigableCard component', () => {
  const mockProps = {
    iconName: 'exampleIcon',
    label: 'Example Label',
    text: 'Example Text',
    onClick: jest.fn(),
  };

  it('renders correctly components', () => {
    const { getByText, getByAltText } = render(<NavigableCard {...mockProps} />);
    
    expect(getByText(mockProps.label)).toBeInTheDocument();
    expect(getByText(mockProps.text)).toBeInTheDocument();
    expect(getByAltText(mockProps.iconName)).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const { getByTestId } = render(<NavigableCard {...mockProps} />);
    fireEvent.click(getByTestId('navigable-card-container'));
    
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});