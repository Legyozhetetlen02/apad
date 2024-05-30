var pont = document.getElementById("be").value


function elitbereg(){
    if(pont<10){
        document.getElementById("ki").innerHTML="Gratulálok hülyébb vagy mint egy bereges"
    }
    if(pont>10 && pont<50){ 
        document.getElementById("ki").innerHTML="Gratulálok hogy bereges lettél"
    }
    if(pont>50){ 
        document.getElementById("ki").innerHTML="Túl okos vagy a bereghez na taka nerd"
    }
    if(pont<0 || pont>100){ 
        document.getElementById("ki").innerHTML="Valamit nem jól matekoztál ki hé"
    }
} 



