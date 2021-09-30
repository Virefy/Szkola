let a = prompt("Jaki dzisiaj jest dzień tygodnia? (Podaj liczbę od 1 do 7)")
switch(a){
    case '1': alert("Dzisiaj jest poniedziałek (dzień roboczy)"); break;
    case '2': alert("Dzisiaj jest wtorek (dzień roboczy)"); break;
    case '3': alert("Dzisiaj jest środa (dzień roboczy)"); break;
    case '4': alert("Dzisiaj jest czwartek (dzień roboczy)"); break;
    case '5': alert("Dzisiaj jest piątek (dzień roboczy)"); break;
    case '6': alert("Dzisiaj jest sobota (weekend)"); break;
    case '7': alert("Dzisiaj jest niedziela (weekend)"); break;
    default: alert("Podano nieprawidłową wartość!"); break;
}