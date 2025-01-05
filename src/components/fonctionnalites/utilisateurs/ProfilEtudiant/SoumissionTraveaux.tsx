import React, { useState } from 'react';
import { Upload, Link, Github, File, Trash2 } from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function AssignmentSubmission() {
  const { sidebarOpen } = useLayout();
  // const [uploading, setUploading] = useState(false);
  // const [submitting, setSubmitting] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [links, setLinks] = useState([]);
  const [formData, setFormData] = useState({
    course: '',
    assignmentType: '',
    title: '',
    description: '',
    githubUrl: '',
  });

  const courses = [
    { id: 1, name: 'Développement Web', professor: 'Coach Wane' },
    { id: 2, name: 'Base de données', professor: 'Coach Aly' },
  ];

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleAddLink = () => {
    setLinks([...links, '']);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const removeFile = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
  };

  const removeLink = (index) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
  };

  return (
    <main
      className={`
        fixed 
        top-[73px] 
        right-0 
        bottom-0 
        overflow-y-auto
        bg-gray-50
        transition-all
        duration-300
        ${sidebarOpen ? 'left-64' : 'left-20'}
      `}
    >
      <div className="h-full">
        <div className="p-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
            <h1 className="text-3xl font-bold mb-2">Soumission de Travaux</h1>
            <p className="text-blue-100">Soumettez vos devoirs et projets</p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cours
                    </label>
                    <select
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                    >
                      <option value="">Sélectionnez un cours</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name} - {course.professor}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de travail
                    </label>
                    <select
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={formData.assignmentType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          assignmentType: e.target.value,
                        })
                      }
                    >
                      <option value="">Sélectionnez le type</option>
                      <option value="devoir">Devoir</option>
                      <option value="projet">Projet</option>
                      <option value="tp">TP</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titre
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Titre du travail"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Décrivez votre travail..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub Repository
                  </label>
                  <div className="relative">
                    <Github className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="url"
                      className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="https://github.com/username/repository"
                      value={formData.githubUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, githubUrl: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fichiers
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      id="file-upload"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        Cliquez pour ajouter des fichiers
                      </p>
                    </label>
                  </div>

                  {selectedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {selectedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <File className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">{file.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Liens additionnels
                  </label>
                  {links.map((link, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <div className="relative flex-1">
                        <Link className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="url"
                          className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="https://..."
                          value={link}
                          onChange={(e) =>
                            handleLinkChange(index, e.target.value)
                          }
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeLink(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddLink}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    + Ajouter un lien
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  <Upload className="h-5 w-5" />
                  Soumettre le travail
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
