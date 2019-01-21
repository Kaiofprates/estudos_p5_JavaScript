function Tela() {
    this.render = function() {
        this.tela = createCanvas(500, 300);
        this.tela.position(50, 50)
        this.tela.style('align-self', 'center')
        this.tela.style('border-radius', '10px 20px')
        this.tela.style('border-style', 'solid')
        this.tela.style('border-color', '#fff')
    }
}