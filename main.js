let pc=0;
let yo=0;
let ganaPc=0;
let ganoYo=0;
let pierdePc=0;
let pierdoYo=0;

let n=+prompt("Ingresa el numero de veces que jugaras");



console.log(pc)

for(let i=0; i<n; i++){
    yo=+prompt(`
    Piedra (1)
    Papel  (2) 
    Tijera (3)
    Ingrese el número según la opccion elegida`);

    pc=Math.floor(Math.random()*3+1);

    if(yo==1){
        switch(pc){
            case 1:
                alert("Empate");
                break;
            case 2:
                ganaPc++;
                pierdoYo++
                alert("Pc GANA ");
                break;
            case 3:
                pierdePc++;
                ganoYo++;
                alert("TU GANAS ");
                break;
        }
    }
    if(yo==2){
        switch(pc){
            case 1:
                pierdePc++;
                ganoYo++;
                alert("TU GANAS ");
                break;
            case 2:
                alert("Empate");
                break;    
            case 3:
                ganaPc++;
                pierdoYo++
                alert("Pc GANA ");
                break;
        }
    }
    if(yo==3){
        switch(pc){
            case 1:
                ganaPc++;
                pierdoYo++
                alert("Pc GANA ");
                break;    
            case 2:
                pierdePc++;
                ganoYo++;
                alert("TU GANAS ");
                break;
            case 3:
                alert("Empate");
                break;
        }
    }
}

if(ganoYo>ganaPc){
    alert(`Tu ganas
    Total partidas ganadas: ${ganoYo}`);
}
else if(ganoYo<ganaPc){
    alert(`Pc gana;
    Pc partidas ganadas: ${ganaPc}`)
}
else if(ganoYo==ganaPc){
    alert(`Empate`);
}