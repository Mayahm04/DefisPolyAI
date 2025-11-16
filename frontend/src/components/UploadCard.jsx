import { useState } from "react";
import axios from "axios";

export default function UploadCard({ onResult, refreshHistory }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handleImagePredict = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/predict/image",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      onResult(res.data.prediction);
      refreshHistory();
    } catch (err) {
      console.error(err);
    }
  };

  const handleTextPredict = async () => {
    if (!text) return;

    const formData = new FormData();
    formData.append("description", text);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/predict/text",
        formData
      );

      onResult(res.data.prediction);
      refreshHistory();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">Analyse ton objet</h2>

      {/* IMAGE */}
      <label className="block mb-2 font-medium">Image :</label>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-3"
      />
      <button
        onClick={handleImagePredict}
        className="w-full bg-blue-600 text-white py-2 rounded mb-4 hover:bg-blue-700"
      >
        Prédire via Image
      </button>

      {/* TEXTE */}
      <label className="block mb-2 font-medium">Description :</label>
      <textarea
        className="border p-2 w-full h-20 rounded"
        placeholder="ex : bouteille plastique"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={handleTextPredict}
        className="w-full bg-green-600 text-white py-2 rounded mt-2 hover:bg-green-700"
      >
        Prédire via Texte
      </button>
    </div>
  );
}
