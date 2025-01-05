import React from 'react';

type Props = {
  cours: Array<{
    id: string;
    module: string;
    professeur: string;
    salle: string;
    debut: string;
    fin: string;
    classe: string;
  }>;
  semaine: Date;
};

export default function VueGrille({ cours, semaine }: Props) {
  const heures = Array.from({ length: 12 }, (_, i) => i + 8); // 8h à 19h
  const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  const getCoursParJourEtHeure = (jour: string, heure: number) => {
    return cours.find((c) => {
      const dateDebut = new Date(c.debut);
      return (
        dateDebut.getDay() === jours.indexOf(jour) + 1 &&
        dateDebut.getHours() === heure
      );
    });
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-max">
        {/* En-tête avec les jours */}
        <div className="grid grid-cols-7 gap-2">
          <div className="w-20"></div> {/* Cellule vide pour l'alignement */}
          {jours.map((jour) => (
            <div key={jour} className="font-medium text-center py-2 bg-gray-50">
              {jour}
            </div>
          ))}
        </div>

        {/* Grille des heures et cours */}
        {heures.map((heure) => (
          <div key={heure} className="grid grid-cols-7 gap-2">
            {/* Colonne des heures */}
            <div className="w-20 py-2 text-right text-sm text-gray-600">
              {`${heure}:00`}
            </div>

            {/* Colonnes des jours */}
            {jours.map((jour) => {
              const coursActuel = getCoursParJourEtHeure(jour, heure);

              return (
                <div
                  key={`${jour}-${heure}`}
                  className="h-16 border border-gray-200 p-1"
                >
                  {coursActuel && (
                    <div className="bg-blue-100 text-blue-800 p-2 rounded h-full text-sm">
                      <div className="font-medium">{coursActuel.module}</div>
                      <div className="text-xs">{coursActuel.professeur}</div>
                      <div className="text-xs">{coursActuel.salle}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
