import React, { useState } from 'react';
import {
  Mail,
  Users,
  Send,
  Filter,
  Star,
  Trash2,
  AlertCircle,
  Calendar,
  Search,
} from 'lucide-react';
import { Card, CardContent } from '../../ui/card';

export default function AdminMessaging() {
  const [activeTab, setActiveTab] = useState('inbox');
  const [messageType, setMessageType] = useState('individual');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Messages reçus simulés
  const messages = [
    {
      id: 1,
      from: 'Ibrahima Diallo',
      role: 'Étudiant',
      type: 'absence',
      subject: "Demande de justification d'absence",
      content: 'Je sollicite une justification pour mon absence...',
      date: '2024-01-02',
      isUrgent: true,
      isRead: false,
      classe: '2ème année',
    },
    {
      id: 2,
      from: 'M.Ndiaye',
      role: 'Professeur',
      type: 'conge',
      subject: 'Demande de congé',
      content: 'Je souhaiterais prendre un congé du...',
      date: '2024-01-01',
      isUrgent: false,
      isRead: true,
      departement: 'Informatique',
    },
  ];

  // Données pour les destinataires
  const classes = [
    { id: 1, name: 'L2 RI' },
    { id: 2, name: '3ème année Info' },
  ];

  const students = [
    { id: 1, name: 'Ibrahima Diallo', class: 'L2 RI' },
    { id: 2, name: 'Fatou Diallo', class: 'L2 RI' },
  ];

  const professors = [
    { id: 1, name: 'M.Robert', department: 'Informatique' },
    { id: 2, name: 'M.Seck', department: 'Mathématiques' },
  ];

  const NewMessage = () => (
    <Card className="mt-6">
      <CardContent className="p-6">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type de destinataire
            </label>
            <select
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={messageType}
              onChange={(e) => setMessageType(e.target.value)}
            >
              <option value="all">Tous les utilisateurs</option>
              <option value="individual_student">Étudiant</option>
              <option value="individual_professor">Professeur</option>
              <option value="student_group">Groupe d'étudiants</option>
              <option value="professor_group">Groupe de professeurs</option>
              <option value="class">Classe entière</option>
              <option value="all_students">Tous les étudiants</option>
              <option value="all_professors">Tous les professeurs</option>
            </select>
          </div>

          {messageType !== 'all' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rechercher des destinataires
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}
          {messageType === 'class' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sélectionner la classe
              </label>
              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                {classes.map((classe) => (
                  <option key={classe.id} value={classe.id}>
                    {classe.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {messageType === 'individual_student' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sélectionner l'étudiant
              </label>
              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.name} - {student.class}
                  </option>
                ))}
              </select>
            </div>
          )}

          {messageType === 'individual_professor' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sélectionner le professeur
              </label>
              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                {professors.map((prof) => (
                  <option key={prof.id} value={prof.id}>
                    {prof.name} - {prof.department}
                  </option>
                ))}
              </select>
            </div>
          )}
          {messageType === 'student' && (
            <div className="border rounded-lg p-4 space-y-2">
              {students.map((student) => (
                <label key={student.id} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span>
                    {student.name} - {student.class}
                  </span>
                </label>
              ))}
            </div>
          )}

          {messageType === 'professor' && (
            <div className="border rounded-lg p-4 space-y-2">
              {professors.map((professor) => (
                <label
                  key={professor.id}
                  className="flex items-center space-x-2"
                >
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span>
                    {professor.name} - {professor.department}
                  </span>
                </label>
              ))}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sujet
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Sujet du message"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={6}
              placeholder="Écrivez votre message..."
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-blue-600" />
              <span className="text-sm text-gray-700">
                Marquer comme urgent
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-blue-600" />
              <span className="text-sm text-gray-700">
                Nécessite une confirmation de lecture
              </span>
            </label>
            <button
              type="submit"
              className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Envoyer
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  const Inbox = () => (
    <>
      <div className="flex gap-4 mb-6">
        <select
          className="p-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">Toutes les demandes</option>
          <option value="absence">Demandes d'absence</option>
          <option value="conge">Demandes de congé</option>
          <option value="annulation">Annulations de cours</option>
          <option value="other">Autres demandes</option>
        </select>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <Card
            key={message.id}
            className={`hover:shadow-lg transition-shadow ${!message.isRead ? 'bg-blue-50' : ''}`}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Mail
                    className={`h-5 w-5 ${message.isRead ? 'text-gray-400' : 'text-blue-600'}`}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{message.from}</span>
                      <span className="text-sm text-gray-500">
                        ({message.role})
                      </span>
                      {message.isUrgent && (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                    <h3 className="text-lg font-medium">{message.subject}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {message.content}
                    </p>
                    <span className="text-sm text-blue-600">
                      {message.classe || message.departement}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{message.date}</span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm text-green-600 bg-green-100 rounded-full hover:bg-green-200">
                      Approuver
                    </button>
                    <button className="px-3 py-1 text-sm text-red-600 bg-red-100 rounded-full hover:bg-red-200">
                      Refuser
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Messages Administratifs</h1>
            <p className="text-blue-100">
              Gestion des demandes et communications
            </p>
          </div>
          <button
            onClick={() => setActiveTab('new')}
            className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition"
          >
            <Send className="h-5 w-5" />
            Nouveau message
          </button>
        </div>
      </div>

      <div className="flex space-x-4 border-b mb-6">
        <button
          className={`px-6 py-3 font-medium ${
            activeTab === 'inbox'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('inbox')}
        >
          Demandes reçues
        </button>
        <button
          className={`px-6 py-3 font-medium ${
            activeTab === 'new'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('new')}
        >
          Nouveau message
        </button>
      </div>

      {activeTab === 'inbox' ? <Inbox /> : <NewMessage />}
    </div>
  );
}

/* import React, { useState } from 'react';
import { Send, Users, Search, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';

export default function AdminMessaging() {
  const [messageType, setMessageType] = useState('student');
  const [recipients, setRecipients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const classes = [
    { id: 1, name: 'L2 RI', department: 'dInformatique' },
    { id: 2, name: '3ème année Info', department: 'Informatique' },
  ];

  const students = [
    { id: 1, name: 'Ibrahima Diallo', class: 'L2 RI' },
    { id: 2, name: 'Fatou Diallo', class: 'L2 RI' },
  ];

  const professors = [
    { id: 1, name: 'M.Ndiaye', department: 'Informatique' },
    { id: 2, name: 'Dr. Bernard', department: 'Mathématiques' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Messages Administratifs</h1>
            <p className="text-blue-100">
              Envoyez des messages aux étudiants et professeurs
            </p>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de destinataire
              </label>
              <select
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={messageType}
                onChange={(e) => setMessageType(e.target.value)}
              >
                <option value="student">Étudiant</option>
                <option value="professor">Professeur</option>
                <option value="class">Classe entière</option>
                <option value="department">Département</option>
                <option value="all">Tous les utilisateurs</option>
              </select>
            </div>

            {messageType !== 'all' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rechercher des destinataires
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            )}

            {messageType === 'class' && (
              <div className="border rounded-lg p-4 space-y-2">
                {classes.map((classe) => (
                  <label
                    key={classe.id}
                    className="flex items-center space-x-2"
                  >
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>
                      {classe.name} - {classe.department}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {messageType === 'student' && (
              <div className="border rounded-lg p-4 space-y-2">
                {students.map((student) => (
                  <label
                    key={student.id}
                    className="flex items-center space-x-2"
                  >
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>
                      {student.name} - {student.class}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {messageType === 'professor' && (
              <div className="border rounded-lg p-4 space-y-2">
                {professors.map((professor) => (
                  <label
                    key={professor.id}
                    className="flex items-center space-x-2"
                  >
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>
                      {professor.name} - {professor.department}
                    </span>
                  </label>
                ))}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sujet
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Sujet du message"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={6}
                placeholder="Écrivez votre message..."
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="text-sm text-gray-700">Message urgent</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="text-sm text-gray-700">
                  Nécessite une confirmation de lecture
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              Envoyer le message
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
 */
