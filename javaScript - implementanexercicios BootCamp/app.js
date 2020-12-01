class Veiculo{
    constructor(){
         this.velocidadeAtual;
         this.aceleracao;  
    }
    getAceleracao(){
      let n =   parseInt(this.velocidadeAtual);  
      return n;
    }

    setAceleracao(t){
        let p = parseInt(t);
        this.velocidadeAtual = p + 3;    
    }

    setFrear(t){
       return (parseInt(this.getFrear()) - parseInt(t));
    }
    getFrear(){
        let f = parseInt(this.velocidadeAtual);
        return f;
    }
    Aceleracao(){
            if(this.velocidade >= 0 ){
                this.velocidade = parseInt(this.velocidade) + parseInt(this.aceleracao);
                return ` Velocidade Atual = ${this.getAceleracao()}`;
            }  
    }
    pisarNoFreio(){
        let r = this.getFrear();
        console.log(r)
        if(r == NaN && r == undefined){
            return 0;
        }else{
            return r;
        }
       
    }
    
}

let input = document.getElementById("txtVelocidade");
let sistemaDeFreio = document.getElementById("txtFreio");
function acelerar(){
   let v = new Veiculo()
   v.setAceleracao(input.value);
   input.value = v.getAceleracao();
   console.log(v.getAceleracao());
}

function stopRun(){
  let freio = new Veiculo();
  let x,y;

  freio.setFrear(sistemaDeFreio.value);

  x = parseInt(freio.getAceleracao())
  y = parseInt(freio.getFrear())
  sistemaDeFreio.value = freio.pisarNoFreio()

}


