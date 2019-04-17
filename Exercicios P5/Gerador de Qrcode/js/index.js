var fundo = '#FFFFFF'
var corpo = '#000000'
var aparecer = true;
var tamanho = 100;
var tamanhoMax = 500;
var gui;
var bordaMin = 50;
var bordaMax = 100;
var borda = 7;
var qr;
var texto = 'Holla mundo'
var nivel = ['L', 'M', 'H', 'Q']
var visible = true;

function setup() {
    gui = createGui('QRcode Generator Tabajara')
    gui.addGlobals('texto', 'tamanho', 'corpo', 'fundo', 'nivel', 'borda')
    noLoop()
}

function draw() {
    qr = new QRious({
        element: document.getElementById('qr'),
        value: texto,
        size: tamanho,
        background: fundo,
        foreground: corpo,
        level: nivel,
        padding: borda
    });



}

