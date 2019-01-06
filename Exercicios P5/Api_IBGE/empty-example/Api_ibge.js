var res;
var api = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/';
var inputu;
function setup() {
  createCanvas(490, 400);
  var button = select("#pesquisar");
  button.mousePressed(busca);
}

function busca(){
  inputu = select("#nome");
  var url = api + inputu.value();
  loadJSON(url, gotData);
}

function gotData(data){
background("#01DF74");
res = data;
  var i = 0;
  var a = 10;
  fill('');
  textSize(20);
  text('Periodo ------------------- Frequencia',10,25);
  for ( i; i < (res[0]['res']).length; i ++){
    var periodo = res[0]['res'][i]['periodo'];
    text(periodo.replace( '[',"").replace('[',''),10,60  + a);
    var frequencia = res[0]['res'][i]['frequencia'];
    text(frequencia,200,60  + a);
    a = a + 40;
  }

}
function draw() {
}
