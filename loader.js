module.exports = {
    loading: "chargement",
    chargement: function (visualisation , vitesse, nombre) 
    {
      var tempsDeChargement = 0;
      const durée = nombre * vitesse;

      setInterval(() => {
        if (tempsDeChargement < durée) 
        {
          console.log(visualisation);
        } 
        else if (tempsDeChargement == durée) 
        {
          console.log("Mise à jour terminé.");
        }
        tempsDeChargement += vitesse;
      }, vitesse);
      return "Telechargement de la mise à jour en cour veuillez patienter : ";
    },
  };