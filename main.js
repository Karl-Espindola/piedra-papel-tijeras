let pc=0;
let yo=0;
let ganaPc=0;
let ganoYo=0;



function vs(yo,pc){
    if(yo==1){
        switch(pc){
            case 1:
                alert("Empate");
                break;
            case 2:
                ganaPc++;
      
                alert("Pc GANA ");
                break;
            case 3:
   
                ganoYo++;
                alert("TU GANAS ");
                break;
        }
    }
    if(yo==2){
        switch(pc){
            case 1:
 
                ganoYo++;
                alert("TU GANAS ");
                break;
            case 2:
                alert("Empate");
                break;    
            case 3:
                ganaPc++;

                alert("Pc GANA ");
                break;
        }
    }
    if(yo==3){
        switch(pc){
            case 1:
                ganaPc++;
                alert("Pc GANA ");
                break;    
            case 2:
                ganoYo++;
                alert("TU GANAS ");
                break;
            case 3:
                alert("Empate");
                break;
        }
    }
return array=[ganoYo,ganaPc]
}

function total(ganoYo,ganaPc){
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
}


let n=+prompt("Ingresa el numero de veces que jugaras");

for(let i=0; i<n; i++){
    yo=+prompt(`
    Piedra (1)
    Papel  (2) 
    Tijera (3)
    Ingrese el número según la opccion elegida`);

    pc=Math.floor(Math.random()*3+1);

    array=tvs(yo,pc);
    total(array[0],array[1]);
}


