// Récupérer les deux champs
const eurdollarInput = document.getElementById("input-eurdollar");
const dollareurInput = document.getElementById("input-dollareur");

// Associer un événement qui correspond au changement
// de la valeur du champ
eurdollarInput.addEventListener("input", () => {
  // Récupérer la valeur saisie par l'utilisateur
  const eur = eurdollarInput.value;

  // Convertir la valeur en nombre
  const eurNombre = parseFloat(eur);

  // Récupérer le taux
  const taux = dollareurInput.getAttribute("data-taux");

  // Convertir le taux en nombre
  const tauxNombre = parseFloat(taux);

  // Calculer la nouvelle conversion
  const nouvelleConversion = eurNombre * tauxNombre;

  console.log(nouvelleConversion);

  // Convertir le nouveau nombre en texte avec 5 digits
  const nouvelleConversionTexte = nouvelleConversion.toFixed(5);

  console.log(nouvelleConversionTexte);

  // Mettre à jour le champ
  dollareurInput.value = nouvelleConversionTexte;
});

dollareurInput.addEventListener("input", () => {
  // Récupérer la valeur saisie par l'utilisateur
  const dollar = dollareurInput.value;

  // Convertir la valeur en nombre
  const dollarNombre = parseFloat(dollar);

  // Récupérer le taux
  const taux = dollareurInput.getAttribute("data-taux");

  // Convertir le taux en nombre
  const tauxNombre = parseFloat(taux);

  // Calculer la nouvelle conversion
  const nouvelleConversion = dollarNombre / tauxNombre;

  console.log(nouvelleConversion);

  // Convertir le nouveau nombre en texte avec 5 digits
  const nouvelleConversionTexte = nouvelleConversion.toFixed(5);

  console.log(nouvelleConversionTexte);

  // Mettre à jour le champ
  eurdollarInput.value = nouvelleConversionTexte;
});

let solde = 0;

document.getElementById("solde").innerHTML = solde;

document.getElementById("addMoney").addEventListener("click", function () {
  let valueAddMoney = document.getElementById("valueAddMoney").value;
  solde = solde + parseFloat(valueAddMoney);
  document.getElementById("solde").innerHTML = solde;
  let date = new Date();
  let dateCourante = date.toLocaleDateString();

  document.getElementById("historique").innerHTML +=
    "<div class='tab'><h4>" +
    dateCourante +
    "<span>+" +
    valueAddMoney +
    "€</span></h4></div>";
});

document.getElementById("removeMoney").addEventListener("click", function () {
  let valueRemoveMoney = document.getElementById("valueRemoveMoney").value;
  solde = solde - parseFloat(valueRemoveMoney);
  document.getElementById("solde").innerHTML = solde;
  let date = new Date();
  let dateCourante = date.toLocaleDateString();

  document.getElementById("historiqueRemove").innerHTML +=
    "<div class='tab1'><h4>" +
    dateCourante +
    "<span>-" +
    valueRemoveMoney +
    "€</span></h4></div>";
});
