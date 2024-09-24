import React, { useRef } from "react";
import {
  Container,
  UploadText,
  RemoveButton,
  RemoveButtonContainer,
  CameraContainer,
} from "./styles";
import { useTranslation } from "react-i18next";

export interface UploadImageProps {
  isLoading?: boolean;
  imageSrc?: string | null;
  errorMessage?: string | null;
  setImage: (image: string | null) => void;
  setFile: (file: File) => void;
  setUrlFile: (image: string | null) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({
  isLoading,
  imageSrc,
  errorMessage,
  setImage,
  setFile,
  setUrlFile,
}) => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (!imageSrc) {
      handleFileUpload(file);
    }
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!imageSrc && file) {
      handleFileUpload(file || null);
    }
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const handleClick = () => {
    if (!imageSrc && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setUrlFile(null);
  };

  return (
    <Container
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
      hasImage={!!imageSrc}
      data-testid="upload-container"
    >
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleFileInput}
        data-testid="file-input"
      />

      {imageSrc && (
        <img src={imageSrc} alt="Uploaded" data-testid="uploaded-image" />
      )}

      {errorMessage && (
        <UploadText className="UploadText">{errorMessage}</UploadText>
      )}

      {!imageSrc && !isLoading && !errorMessage && (
        <CameraContainer>
          <img src="/icons/camera.svg" alt="camera" className="CameraImage" />
          <UploadText className="UploadText" data-testid="upload-text">
            {t("Upload_Image_Upload_your_image_here")}
          </UploadText>
        </CameraContainer>
      )}

      {imageSrc && (
        <RemoveButtonContainer data-testid="remove-button-container">
          <RemoveButton onClick={handleRemoveImage} data-testid="remove-button">
            {t("Upload_Image_Remove")}
          </RemoveButton>
        </RemoveButtonContainer>
      )}
    </Container>
  );
};

export default UploadImage;
