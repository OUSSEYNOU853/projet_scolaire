import React, { useState } from 'react';
import {
  Mail,
  Users,
  Send,
  Search,
  Star,
  Trash2,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';
import { Card, CardContent } from '../../ui/card';
import { useLayout } from '../../../contexts/LayoutContext';

export default function ProfessorMessaging() {
  const { sidebarOpen } = useLayout();
  const [activeTab, setActiveTab] = useState('inbox');
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const [messageType, setMessageType] = useState('individual');

  const messages = [
    {
      id: 1,
      from: 'Ibrahima Diallo',
      subject: 'Question sur le devoir',
      content: "Bonjour Professeur, j'ai une question concernant...",
      date: '2024-01-02',
      isUrgent: true,
      isRead: false,
      classe: '2ème année',
    },
    {
      id: 2,
      from: 'Fatou Diallo',
      subject: "Justificatif d'absence",
      content: 'Je vous prie de bien vouloir excuser mon absence...',
      date: '2024-01-01',
      isUrgent: false,
      isRead: true,
      classe: '3ème année',
    },
  ];

  const classes = [
    { id: 1, name: 'L2 RI' },
    { id: 2, name: 'L3 GL' },
  ];

  const students = [
    { id: 1, name: 'Ibrahima Diallo', classe: 'L2 RI' },
    { id: 2, name: 'Fatou Diallo', classe: 'L2 RI' },
    { id: 3, name: 'Lamine Goudiaby', classe: 'L3 GL' },
  ];

  const NewMessage = () => (
    <Card className="mt-6">
      <CardContent className="p-6">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type de message
            </label>
            <select
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={messageType}
              onChange={(e) => setMessageType(e.target.value)}
            >
              <option value="individual">Message individuel</option>
              <option value="group">Groupe d'étudiants</option>
              <option value="class">Classe entière</option>
            </select>
          </div>

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

          {messageType === 'individual' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destinataire
              </label>
              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.name} - {student.classe}
                  </option>
                ))}
              </select>
            </div>
          )}

          {messageType === 'group' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sélectionner les étudiants
              </label>
              <div className="border rounded-lg p-3">
                {students.map((student) => (
                  <label
                    key={student.id}
                    className="flex items-center space-x-2 p-2"
                  >
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>
                      {student.name} - {student.classe}
                    </span>
                  </label>
                ))}
              </div>
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
    <div className="space-y-4 mt-6">
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
                    {message.isUrgent && (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <h3 className="text-lg font-medium">{message.subject}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {message.content}
                  </p>
                  <span className="text-sm text-blue-600">
                    {message.classe}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">{message.date}</span>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-yellow-500">
                    <Star className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

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
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Messagerie</h1>
                <p className="text-blue-100">
                  Gérez vos communications avec les étudiants
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
              Boîte de réception
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
      </div>
    </main>
  );
}
