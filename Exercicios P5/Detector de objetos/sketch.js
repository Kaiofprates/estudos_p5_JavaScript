let video;
let featureExtractor;
let knn;
let started = false;
let treinar, entry, start;
let resultado;
let previa = 0;
let amostra;
//modelo
function modelReady() {
    console.log('ready');
}
var tela;

function setup() {
    tela = new Tela()
    tela.render()
        //input
    entry = createInput('Objeto')
    entry.size(150, 30)
    entry.position(600, 60)
    entry.style('border-radius', '10px 20px')
    entry.style('border-style', 'solid')
    entry.style('border-color', '#fff')
    entry.style('font-family', 'Helvetica')
    entry.style('color', '#610B21')
    entry.style('text-align', 'center')
    entry.mousePressed(function() {
            previa = 0;
        })
        //buttons
    treinar = createButton('Treinar')
    treinar.size(150, 30)
    treinar.position(600, 120)
    treinar.style('border-radius', '10px 20px')
    treinar.style('border-style', 'solid')
    treinar.style('border-color', '#fff')
    treinar.style('font-family', 'Helvetica')
    treinar.style('color', '#610B21')
    treinar.style('text-align', 'center')
    treinar.mousePressed(Training);



    start = createButton('Start')
    start.position(600, 170)
    start.size(150, 30)
    start.style('border-radius', '10px 20px')
    start.style('border-style', 'solid')
    start.style('border-color', '#fff')
    start.style('font-family', 'Helvetica')
    start.style('color', '#610B21')
    start.style('text-align', 'center')
    start.mousePressed(infoLog);

    //features
    video = createCapture(VIDEO);
    featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
    knn = ml5.KNNClassifier();
    video.size(500, 300);
    video.hide();
    //
    resultado = createP('Resultado');
    resultado.style('font-size', '32pt');
    resultado.position(80, 330)
    resultado.style('color', 'white')
        //
    amostra = createP('');
    amostra.style('font-size', '32pt');
    amostra.position(600, 250)
    amostra.style('color', 'white')


}


function Training() {
    let logits = featureExtractor.infer(video);
    knn.addExample(logits, entry.value());
    print(entry.value() + " add ")
    amostra.html(entry.value() + ' ' + previa)
    previa++
}

function infoLog() {
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Começando!',
        showConfirmButton: false,
        timer: 1500
    })
    let logits = featureExtractor.infer(video);
    if (knn.getNumLabels() !== 0 && !started) {
        started = true;
        knn.classify(logits, gotResult);
    }
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results.label)
        resultado.html(results.label)
        let logits = featureExtractor.infer(video);
        knn.classify(logits, gotResult);

    }

}

function keyPressed() {
    if (key == ' ') {
        Training();
    }
}



function draw() {

    image(video, 0, 0);

}