import React, { useRef } from 'react';
import { Upload, X, File } from 'lucide-react';

export default function TelechargementJustificatif({
  onFileSelect,
  fichierActuel,
}) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Justificatif
      </label>

      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {!fichierActuel ? (
          <div className="space-y-2">
            <div className="flex justify-center">
              <Upload className="h-10 w-10 text-gray-400" />
            </div>
            <div className="text-gray-600">
              Glissez votre justificatif ici ou
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-blue-600 hover:text-blue-700 mx-1"
              >
                parcourez
              </button>
              vos fichiers
            </div>
            <div className="text-sm text-gray-500">
              PDF, JPG ou PNG (Max. 10MB)
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
            <div className="flex items-center">
              <File className="h-6 w-6 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">
                {fichierActuel.name}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onFileSelect(null)}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
        />
      </div>
    </div>
  );
}
