module.exports = {
    nomDuChargement: "chargement",
    chargement: function (signe , vitesse, nombreDesigne) {
      var tempsActuel = 0;
      const durée = nombreDesigne * vitesse;
      setInterval(() => {
        if (tempsActuel < durée) {
          console.log(signe);
        } else if (tempsActuel == durée) {
          console.log("Le chargement est terminé");
        }
        tempsActuel += vitesse;
      }, vitesse);
      return "Le chargement commence : ";
    },
  };