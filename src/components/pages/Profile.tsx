import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/Avatar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Camera, Mail, Briefcase, MapPin, Calendar, User } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

interface ProfileData {
  name: string;
  email: string;
  bio: string;
  avatar: string;
  role: string;
  location: string;
  joinDate: string;
  department: string;
}

const ProfilePage = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [profileData, setProfileData] = React.useState<ProfileData>({
    name: 'Ibrahima Dev',
    email: 'sorydiallo371@gmail.com',
    bio: "Développeur passionné avec plus de 2 ans d'expérience dans le développement web. Spécialisé dans les technologies front-end modernes et l'architecture des applications.",
    avatar: '/api/placeholder/100/100',
    role: 'Développeur Full-Stack Junior',
    location: 'Dakar, Sénegal',
    joinDate: 'Janvier 2022',
    department: 'Département Informatique',
  });

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleAvatarClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="p-6">
      {showSuccess && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Vos modifications ont été enregistrées avec succès!
          </AlertDescription>
        </Alert>
      )}

      <Card className="shadow-lg">
        <CardHeader className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative group">
                <Avatar
                  className="h-24 w-24 ring-4 ring-white/50 cursor-pointer transition-transform hover:scale-105"
                  onClick={handleAvatarClick}
                >
                  <AvatarImage
                    src={profileData.avatar}
                    alt={profileData.name}
                  />
                  <AvatarFallback className="bg-blue-700">
                    {profileData.name[0]}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-bold">
                  {profileData.name}
                </h1>
                <p className="text-blue-100 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {profileData.role}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {profileData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Membre depuis {profileData.joinDate}
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant={isEditing ? 'default' : 'outline'}
              onClick={() => setIsEditing(!isEditing)}
              className={
                isEditing
                  ? 'bg-white text-blue-800'
                  : 'bg-blue-700 text-white hover:bg-blue-600 border-white/20'
              }
            >
              {isEditing ? 'Annuler' : 'Modifier le profil'}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {isEditing ? (
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Nom complet
                  </Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    className="border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email professionnel
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm font-medium">
                    Poste
                  </Label>
                  <Input
                    id="role"
                    value={profileData.role}
                    onChange={(e) =>
                      setProfileData({ ...profileData, role: e.target.value })
                    }
                    className="border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department" className="text-sm font-medium">
                    Département
                  </Label>
                  <Input
                    id="department"
                    value={profileData.department}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        department: e.target.value,
                      })
                    }
                    className="border-gray-200"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio" className="text-sm font-medium">
                    Biographie
                  </Label>
                  <textarea
                    id="bio"
                    className="w-full min-h-[120px] p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData({ ...profileData, bio: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  onClick={handleSave}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                >
                  Enregistrer les modifications
                </Button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">À propos</h3>
                <p className="text-gray-600 leading-relaxed">
                  {profileData.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    Informations professionnelles
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      <span>{profileData.department}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>{profileData.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>{profileData.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <User className="w-5 h-5 text-blue-600" />
                      <span>
                        @{profileData.name.toLowerCase().replace(' ', '.')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
