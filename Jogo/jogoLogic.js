let ponto = 0;
let IntervarlId;
let timer = 30;

function randomImg() {
    let img, img2, topx, lefty;
    let num;
    let screenHeight, screenWidth;

    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;

    img2 = document.getElementsByClassName('ball')

    for (let i = 0; i < img2.length; i++) {
        num = Math.floor(Math.random() * 200);
        if (num > 90) {
            img2[i].style.height = num + 'px';
            img2[i].style.width = num + 'px';
        }
        topx = Math.floor(Math.random() * (screenHeight - num));
        lefty = Math.floor(Math.random() * (screenWidth - num));

        img2[i].style.top = topx + 'px';
        img2[i].style.left = lefty + 'px';
    }
}

function pontos() {
    let points;
    ponto++;
    points = document.getElementsByClassName('points');
    points[0].innerText = `Pontos: ${ponto}`;
}

function tiraPontos() {
    let menosPoints, points;
    menosPoints = document.getElementsByClassName('points');
    points = menosPoints[0].innerText.slice(8, 9);
    points = parseInt(points);
    if (points !== 0) {
        ponto--;
        menosPoints[0].innerText = `Pontos: ${ponto}`;
    }
}

function sumir(img) {

    img.style.width = '0px';
    img.style.height = '0px';

    console.log('clicado');

}

function times() {
    let time;
    let ending =30;
    time = document.getElementsByClassName('timer');
    // ending = time[0].innerText.slice(15, 18);
    // ending = parseInt(ending);
    while(ending !== 0) {
        IntervarlId = setInterval(() => {
            timer -= 1;
            ending -=1;
            console.log(timer);
            time[0].innerText = `Tempo Restante: ${timer}s`
        }, 1000)
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    // lembrar de mudar velocidade para mais rápido
    setInterval(function () { randomImg() }, 1500);
    // times();
    document.querySelectorAll('.ball').forEach(bal => {
        bal.addEventListener('click', function () {
            sumir(this);
            pontos();
        });
    })

    window.addEventListener('click', function (e) {
        if (document.getElementById('img').contains(e.target)) {
            console.log('dentro')
        } else {
            tiraPontos();
        }
    });

    // document.getElementsByTagName("html")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";

});