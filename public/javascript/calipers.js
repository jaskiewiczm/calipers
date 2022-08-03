let los = (Math.random()* 6000)/50;

const suwak2 = (rysuj,x,y,kolor,skala,typ,wymiar) => {
    rysuj.beginPath();
    rysuj.moveTo((x + wymiar)*skala,y*skala);
    rysuj.lineTo((x + wymiar)*skala,(y+10.13)*skala);
    rysuj.lineTo((x - 0.69+ wymiar)*skala,(y+10.5)*skala);
    rysuj.lineTo((x - 0.69+ wymiar)*skala,(y+14.13)*skala);
    rysuj.lineTo((x + 2.15+ wymiar)*skala,(y+15.65)*skala);
    rysuj.lineTo((x + 7.43+ wymiar)*skala,(y+15.65)*skala);
    rysuj.lineTo((x + 7.43+ wymiar)*skala,(y+20.2)*skala);
    rysuj.lineTo((x - 6.63+ wymiar)*skala,(y+20.2)*skala);
    rysuj.lineTo((x - 6.63+ wymiar)*skala,(y+13.1)*skala);
    rysuj.arc((x + 17.43+ wymiar)*skala,(y+17.05)*skala, 24.38*skala, 3.3, 3.9, 0);
    rysuj.closePath();
    rysuj.moveTo((x + 218.76)*skala,(y+26.38)*skala);
    rysuj.lineTo((x + 215.76+ wymiar)*skala,(y+26.38)*skala);
    rysuj.arc((x + 217+ wymiar)*skala,(y+26.17)*skala, 1.51*skala, 2, 1.5, 1);
    rysuj.lineTo((x + 218.76+ wymiar)*skala,(y+27.68)*skala);
    rysuj.lineTo((x + 218.76+ wymiar)*skala,(y+29.04)*skala);
    rysuj.lineTo((x + 218.76)*skala,(y+29.04)*skala);
    rysuj.fillStyle=kolor;
    rysuj.fill();
    rysuj.strokeStyle="black"
    rysuj.lineWidth=0.5;
    rysuj.stroke();
}

const prowadnica = (rysuj,x,y,kolor,skala,typ) => { //typ: rodzaj podziałki(cal/mm)
    rysuj.beginPath();
    rysuj.moveTo(x*skala,y*skala);
    rysuj.lineTo(x*skala,(y+16)*skala);
    rysuj.lineTo((x - 6.6)*skala,(y+16)*skala);
    rysuj.lineTo((x - 6.6)*skala,(y+40.7)*skala);
    rysuj.lineTo((x + 1.2)*skala,(y+71.4)*skala);
    rysuj.lineTo((x + 7.1)*skala,(y+74.7)*skala);
    rysuj.lineTo((x + 7.1)*skala,(y+46.8)*skala);
    rysuj.lineTo((x + 6.8)*skala,(y+46.3)*skala);
    rysuj.lineTo((x + 6.8)*skala,(y+35.2)*skala);
    rysuj.lineTo((x + 218.8)*skala,(y+35.2)*skala);
    rysuj.lineTo((x + 218.8)*skala,(y+20.2)*skala);
    rysuj.lineTo((x + 6.34)*skala,(y+20.2)*skala);
    rysuj.lineTo((x + 6.34)*skala,(y+13.1)*skala);
    rysuj.arc((x - 20.16)*skala, (y+17.84)*skala, 26.92*skala, 6, 5.58,1);
    rysuj.closePath();
    rysuj.fillStyle=kolor;
    rysuj.fill();
    rysuj.moveTo((x - 6.6)*skala,(y+22.1)*skala);
    rysuj.lineTo((x + 218.8)*skala,(y+22.1)*skala);
    rysuj.moveTo((x - 6.6)*skala,(y+33.3)*skala);
    rysuj.lineTo((x + 218.8)*skala,(y+33.3)*skala);
    rysuj.moveTo((x + 2.06)*skala,(y+71.86)*skala);
    rysuj.lineTo((x + 2.06)*skala,(y+62.47)*skala);
    rysuj.lineTo((x + 6.8)*skala,(y+62.47)*skala);
    rysuj.moveTo((x + 2.93)*skala,(y+4)*skala);
    rysuj.lineTo((x + 2.93)*skala,(y+12.68)*skala);
    rysuj.lineTo(x*skala,(y+12.68)*skala);

    for (let i=0; i<=19; i++) {
        rysuj.moveTo((x + 9.87+(i*10))*skala*typ,(y+29.05)*skala);
        rysuj.lineTo((x + 9.87+(i*10))*skala*typ,(y+32.39)*skala);
        rysuj.font = "normal 15px Arial";
        rysuj.strokeText(i,(x + 8.87+(i*10))*skala*typ, (y+28)*skala);
        for(let j=1; j<=10; j++){
         if (j % 5 == 0 && j % 10 != 0) {
            rysuj.moveTo((x + 9.87+(i*10)+j)*skala*typ,(y+29.05)*skala);
            rysuj.lineTo((x + 9.87+(i*10)+j)*skala*typ,(y+32.39)*skala);
         } else {
            rysuj.moveTo((x + 9.87+(i*10)+j)*skala*typ,(y+30.72)*skala);
            rysuj.lineTo((x + 9.87+(i*10)+j)*skala*typ,(y+32.39)*skala);
         }

        }
    }
    rysuj.strokeStyle="black"
    rysuj.lineWidth=0.5;
    rysuj.stroke();
}

const suwak = (rysuj,x,y,kolor,skala,typ,wymiar) => {
    suwak2(rysuj,x,y,kolor,skala,typ,wymiar);
    rysuj.beginPath();
    rysuj.moveTo((x + 7.43+ wymiar)*skala,(y+15.13)*skala);
    rysuj.lineTo((x + 7.43+ wymiar)*skala,(y+22.97)*skala);
    rysuj.lineTo((x + 59.23+ wymiar)*skala,(y+22.97)*skala);
    rysuj.lineTo((x + 59.23+ wymiar)*skala,(y+15.13)*skala);
    rysuj.lineTo((x + 7.43+ wymiar)*skala,(y+15.13)*skala);
    rysuj.closePath();
    rysuj.moveTo((x + 7.43+ wymiar)*skala,(y+18.67)*skala);
    rysuj.lineTo((x + 59.23+ wymiar)*skala,(y+18.67)*skala);
    rysuj.moveTo((x + 7.43+ wymiar)*skala,(y+32.46)*skala);
    rysuj.lineTo((x + 7.43+ wymiar)*skala,(y+46.28)*skala);
    rysuj.lineTo((x + 7.12+ wymiar)*skala,(y+46.82)*skala);
    rysuj.lineTo((x + 7.12+ wymiar)*skala,(y+74.69)*skala);
    rysuj.lineTo((x + 13+ wymiar)*skala,(y+71.38)*skala);
    rysuj.lineTo((x + 19.61+ wymiar)*skala,(y+45.38)*skala);
    rysuj.arc((x + 25.55+ wymiar)*skala,(y+46.29)*skala, 6.01*skala, 4, 4.8, 0);
    rysuj.lineTo((x + 47.26+ wymiar)*skala,(y+40.3)*skala);
    rysuj.arc((x + 51.04+ wymiar)*skala,(y+40.3)*skala, 3.78*skala, 3, 6.3, 1);
    rysuj.lineTo((x + 59.23+ wymiar)*skala,(y+40.3)*skala);
    rysuj.lineTo((x + 59.23+ wymiar)*skala,(y+32.46)*skala);
    rysuj.lineTo((x + 7.43+ wymiar)*skala,(y+32.46)*skala);
    rysuj.closePath();
    rysuj.fillStyle=kolor;
    rysuj.fill();
    rysuj.moveTo((x + 7.43+ wymiar)*skala,(y+38)*skala);
    rysuj.lineTo((x + 59.23+ wymiar)*skala,(y+38)*skala);
    rysuj.moveTo((x + 7.43+ wymiar)*skala,(y+62.47)*skala);
    rysuj.lineTo((x + 12.17+ wymiar)*skala,(y+62.47)*skala);
    rysuj.lineTo((x + 12.17+ wymiar)*skala,(y+71.38)*skala);
    for (let i=0; i<=10; i++) {
        rysuj.moveTo((x + 9.87+ wymiar+(i*5*0.8))*skala*typ,(y+32.48)*skala);
        rysuj.lineTo((x + 9.87+ wymiar+(i*5*0.8))*skala*typ,(y+35.96)*skala);

        var lx = (x + 9.97+ wymiar+(i*5*0.8))*skala*typ;
        var ly = (y+37.56)*skala;

        rysuj.lineWidth = 1.1;
        rysuj.strokeStyle = "black";
        rysuj.strokeText(i%10,lx + 3, ly, 4);

        for(let j=1; j<=5; j++){
            rysuj.moveTo((x + 9.87+ wymiar+(i*5*0.8)+(j*0.8))*skala*typ,(y+32.48)*skala);
            rysuj.lineTo((x + 9.87+ wymiar+(i*5*0.8)+(j*0.8))*skala*typ,(y+34.21)*skala);
        }
    }


    rysuj.strokeStyle="black"
    rysuj.lineWidth=0.5;
    rysuj.stroke();

    rysuj.font = "normal 30px Arial";
    rysuj.fillText(wymiar,40, 350);
};

window.onload = function(){
    var canvas = document.getElementById("suwmiarka_uniw");
    var rysuj = canvas.getContext("2d");
    var skala = 6;
    prowadnica(rysuj,10,4,"silver", skala,1);
    suwak(rysuj,10,4,"silver", skala,1,los);
};

