import React, { useRef, useState } from 'react';
import { Upload, X, File, AlertCircle } from 'lucide-react';
import { ProgressBar } from './ProgressBar';

interface TelechargementFichierProps {
  onFileUpload: (file: File) => Promise<void>;
  acceptedTypes?: string[];
  maxSize?: number; // en Mo
  label?: string;
}

export default function TelechargementFichier({
  onFileUpload,
  acceptedTypes = ['.pdf', '.jpg', '.jpeg', '.png'],
  maxSize = 5, // 5Mo par défaut
  label = 'Déposer votre fichier ici',
}: TelechargementFichierProps) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const validateFile = (file: File): boolean => {
    // Vérification du type de fichier
    const fileType = `.${file.name.split('.').pop()?.toLowerCase()}`;
    if (!acceptedTypes.includes(fileType)) {
      setError(
        `Type de fichier non accepté. Types autorisés: ${acceptedTypes.join(', ')}`,
      );
      return false;
    }

    // Vérification de la taille
    if (file.size > maxSize * 1024 * 1024) {
      setError(`Le fichier est trop volumineux. Taille maximale: ${maxSize}Mo`);
      return false;
    }

    return true;
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFile = e.dataTransfer.files[0];
    await handleFile(droppedFile);
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      await handleFile(selectedFile);
    }
  };

  const handleFile = async (selectedFile: File) => {
    setError(null);
    if (!validateFile(selectedFile)) return;

    setFile(selectedFile);
    setLoading(true);

    try {
      // Simulation de l'upload avec progression
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      await onFileUpload(selectedFile);
      setProgress(100);
    } catch (err) {
      setError('Erreur lors du téléchargement du fichier');
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setProgress(0);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-md">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center
          ${error ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-gray-50'}
          ${loading ? 'opacity-50' : 'hover:bg-gray-100'}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileInput}
          accept={acceptedTypes.join(',')}
          className="hidden"
        />

        {!file && (
          <div className="space-y-4">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-blue-600 hover:text-blue-700 font-medium"
                disabled={loading}
              >
                {label}
              </button>
              <p className="text-sm text-gray-500 mt-1">
                ou glissez-déposez votre fichier ici
              </p>
            </div>
            <p className="text-xs text-gray-500">
              Types acceptés: {acceptedTypes.join(', ')} - Max: {maxSize}Mo
            </p>
          </div>
        )}

        {file && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-3 rounded">
              <div className="flex items-center space-x-3">
                <File className="h-6 w-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">
                  {file.name}
                </span>
              </div>
              <button
                onClick={handleRemove}
                className="p-1 hover:bg-gray-100 rounded"
                disabled={loading}
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <ProgressBar progress={progress} />
          </div>
        )}

        {error && (
          <div className="mt-4 flex items-center space-x-2 text-red-600">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}
