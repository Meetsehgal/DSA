import React, { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
// import "pdfjs-dist/build/pdf.worker.entry";

const PdfImageExtractorFromURL = ({ pdfUrl }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pdfUrl) {
      fetchAndExtractImages(pdfUrl);
    }
  }, [pdfUrl]);

  const fetchAndExtractImages = async (url) => {
    try {
      setLoading(true);
      const pdfDoc = await pdfjsLib.getDocument(url).promise;
      const extractedImages = [];

      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const imagesOnPage = await extractImagesFromPage(page);
        extractedImages.push(...imagesOnPage);
      }

      setImages(extractedImages);
    } catch (error) {
      console.error("Error extracting images from PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  const extractImagesFromPage = async (page) => {
    const images = [];
    const operatorList = await page.getOperatorList();
    const viewport = page.getViewport({ scale: 1 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    for (let i = 0; i < operatorList.fnArray.length; i++) {
      if (
        operatorList.fnArray[i] === pdfjsLib.OPS.paintJpegXObject ||
        operatorList.fnArray[i] === pdfjsLib.OPS.paintImageXObject
      ) {
        const key = operatorList.argsArray[i][0];
        const img = await page.objs.get(key);

        canvas.width = img.width;
        canvas.height = img.height;
        context.putImageData(img, 0, 0);
        images.push(canvas.toDataURL());
      }
    }

    return images;
  };

  return (
    <div>
      <h2>PDF Image Extractor</h2>
      {loading ? (
        <p>Loading images...</p>
      ) : images.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Extracted ${index}`}
              style={{
                width: "200px",
                height: "auto",
                margin: "10px",
                border: "1px solid #ddd",
              }}
            />
          ))}
        </div>
      ) : (
        <p>No images found in the PDF.</p>
      )}
    </div>
  );
};

export default PdfImageExtractorFromURL;
