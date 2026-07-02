import { useState } from "react";

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert("Please select an image file first.");
      return;
    }
    const formData = new FormData();
    formData.append("profilePicture", selectedImage);

    try {
      const response = await fetch("", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Picture uploaded successfully!");
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      alert("Could not connect to the upload server.");
    }
  };

  return (
    <div>
      <h2>Upload Profile Picture</h2>
      <form onSubmit={handleUploadSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {previewUrl && (
          <div>
            <p>Image Preview:</p>
            <img src={previewUrl} alt="Preview" width="150" height="150" />
          </div>
        )}

        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}
