import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import PageNotFound from '.';

describe('PageNotFound Component', () => {
  it('Should render 404 image', () => {
    render(<PageNotFound />);
    const imageElement = screen.getByAltText('Error 404 Icon');
    expect(imageElement).toBeInTheDocument();
  });

  it('Should render error message', () => {
    render(<PageNotFound />);
    const errorMessage = screen.getByText('Page_Not_Found_Oops_Something_went_wrong');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Should render explanation message', () => {
    render(<PageNotFound />);
    const explanationMessage = screen.getByText('Page_Not_Found_We_couldnt_find_this_page_or_the_link_is_incorrect');
    expect(explanationMessage).toBeInTheDocument();
  });

  it('Should render link to return to system', () => {
    render(<PageNotFound />);
    const returnLink = screen.getByText('Page_Not_Found_Return_to_our_system');
    expect(returnLink).toBeInTheDocument();
    expect(returnLink).toHaveAttribute('href', '/');
  });
});