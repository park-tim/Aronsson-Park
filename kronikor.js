// ============================================================
//  ARONSSON & PARK – KRÖNIKOR
//  Lägg till nya krönikor här uppe i listan.
//  Den senaste krönikan ska vara FÖRST.
//
//  Så här lägger du till en ny krönika:
//  1. Kopiera ett block (från { till },) och klistra in ÖVERST
//  2. Fyll i rubrik, datum, författare, intro, bild och innehåll
//  3. Spara och pusha till GitHub – klart!
//
//  INNEHÅLL-fältet:
//  Skriv texten med dessa taggar:
//    <h2>Din underrubrik</h2>
//    <p>Ditt stycke här.</p>
//    <img src="bilder/bild.jpg" alt="Bildbeskrivning">
//
//  Tips för bilder:
//  - Lägg bilden i GitHub-mappen och skriv: "bilder/bild.jpg"
//  - Eller en länk från nätet: "https://..."
// ============================================================

const kronikor = [

  {
    id: "ishockey-och-tennis-varldens-basta-kombo",
    rubrik: "Ishockey och tennis – världens bästa kombo?",
    datum: "24 juni 2026",
    forfatter: "Emil Aronsson",
    intro: "Alla säger att man inte kan älska två sporter lika mycket. Vi bevisar motsatsen varje vecka.",
    bild: "aronsson_park.png",
    innehall: `
      <p>Det är en fråga vi får hela tiden: varför just ishockey och tennis? De verkar ju inte ha något gemensamt. Men det är precis där folk har fel.</p>

      <h2>Farten och tystnaden</h2>
      <p>Ishockey är kaos i sin vackraste form. Pucken studsar, kropparna krockar och publikens dån fyller hela arenan. Tennis däremot är tyst. En serve, ett return, ett slag i taget. Ändå är spänningen identisk.</p>

      <p>Det är den mentala kampen som förenar dem. I båda sporterna kan allt vända på en sekund. En felpassning, ett dubbelfel – och plötsligt är matchen en annan.</p>

      <h2>Varför vi startade podden</h2>
      <p>Vi satt en kväll efter en lång hockeymatch och diskuterade varför Björn Borg var en bättre mentalspelare än de flesta hockeyspelare vi sett. Tre timmar senare hade vi fortfarande inte kommit överens – men vi hade kommit på att vi behövde en podcast.</p>

      <img src="aronsson_park.png" alt="Aronsson och Park">

      <p>Och resten, som de säger, är historia. Välkommen till vår värld.</p>
    `
  }

  // ← Lägg till fler krönikor ovanför den här raden

];
