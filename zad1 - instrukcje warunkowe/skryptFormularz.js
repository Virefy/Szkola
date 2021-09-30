function logowanie(formularz){
if (formularz.haslo.value == null && formularz.phaslo.value == null){
    document.write("Podaj poprawne hasło")
}
if (formularz.haslo.value == formularz.phaslo.value){
    alert("Hasła się zgadzają")
}
}