let a = prompt("Podaj długość boku a")
let b = prompt("Podaj długość boku b")
let c = prompt("Podaj długość boku c")

if(a==b && b==c){
    alert("To jest trójkąt równoboczny")
}

else if(a==b || b==c || a==c){
    alert("To jest trójkąt równoramienny")
}

else{
    alert("To jest trójkąt różnoboczny")
}