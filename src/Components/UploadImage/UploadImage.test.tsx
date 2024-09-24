import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UploadImage from ".";
describe("UploadImage Component", () => {
  // it('Renders without errors', () => {
  //   render(<UploadImage setImage={() => {}} />);
  //   const uploadContainer = screen.getByTestId('upload-container');
  //   expect(uploadContainer).toBeInTheDocument();
  // });
  // it("Allows removal of uploaded image", () => {
  //   const setImageMock = jest.fn();
  //   render(<UploadImage imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." setImage={setImageMock} />);
  //   const removeButton = screen.getByTestId("remove-button");
  //   fireEvent.click(removeButton);
  //   expect(setImageMock).toHaveBeenCalledWith(null);
  // });
  // it("Allows image upload via file input", async () => {
  //   const setImageMock = jest.fn();
  //   render(<UploadImage setImage={setImageMock} />);
  //   const file = new File(['(⌐□_□)'], 'image.png', { type: 'image/png' });
  //   const input = screen.getByTestId('file-input');
  //   fireEvent.change(input, { target: { files: [file] } });
  //   await waitFor(() => expect(setImageMock).toHaveBeenCalled());
  //   expect(setImageMock.mock.calls[0][0]).toEqual(expect.any(String));
  // });
  // it("Allows image upload via drag and drop", async () => {
  //   const setImageMock = jest.fn();
  //   render(<UploadImage setImage={setImageMock} />);
  //   const dropZone = screen.getByTestId('upload-container');
  //   const file = new File(['(⌐□_□)'], 'image.png', { type: 'image/png' });
  //   fireEvent.drop(dropZone, { dataTransfer: { files: [file] } });
  //   await waitFor(() => expect(setImageMock).toHaveBeenCalled());
  //   expect(setImageMock.mock.calls[0][0]).toEqual(expect.any(String));
  // });
});
