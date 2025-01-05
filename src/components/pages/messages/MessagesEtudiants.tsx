import React from 'react';
import { Mail, Star, Trash2, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';
import { useLayout } from '../../../contexts/LayoutContext';

export default function MessageView() {
  const { sidebarOpen } = useLayout();
  const messages = [
    {
      id: 1,
      sender: 'Administration',
      subject: "Rappel - Justificatif d'absence",
      content: "Votre justificatif d'absence pour le cours...",
      date: '2024-01-02',
      isUrgent: true,
      isRead: false,
    },
    {
      id: 2,
      sender: 'Coach Wane',
      subject: 'Devoir à rendre',
      content: "N'oubliez pas de rendre le devoir de...",
      date: '2024-01-01',
      isUrgent: false,
      isRead: true,
    },
    {
      id: 2,
      sender: 'Coach Aly',
      subject: 'Projet à rendre',
      content: "N'oubliez pas de rendre le projet de Python",
      date: '2024-01-01',
      isUrgent: false,
      isRead: false,
    },
  ];

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
            <h1 className="text-3xl font-bold mb-2">Messages</h1>
            <p className="text-blue-100">Boîte de réception</p>
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
                          <span className="font-semibold">
                            {message.sender}
                          </span>
                          {message.isUrgent && (
                            <AlertCircle className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                        <h3 className="text-lg font-medium">
                          {message.subject}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {message.content}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">
                        {message.date}
                      </span>
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
        </div>
      </div>
    </main>
  );
}
