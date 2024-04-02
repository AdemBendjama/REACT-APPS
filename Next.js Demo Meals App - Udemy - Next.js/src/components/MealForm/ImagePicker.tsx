"use client";
import Image from "next/image";
import classes from "./ImagePicker.module.css";
import { ChangeEvent, useRef, useState } from "react";

function ImagePicker({ label, name }: { label: string; name: string }) {
  const [pickedImage, setPickedImage] = useState<string | null>();
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    imageInput.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string | null);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && (
              <Image
                src={pickedImage}
                alt="The image selected by the user."
                fill
              />
            )}
          </div>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
          />
          <button
            className={classes.button}
            type="button"
            onClick={handlePickClick}
          >
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}

export default ImagePicker;
