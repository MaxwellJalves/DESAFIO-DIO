class Ticket {
    constructor(anotacao, data, status) {
            this.anotacao = anotacao;
            this.data = data;
            this.status = status;
    }
}
class DbLStorage {
    constructor() {
     let index = localStorage.getItem('index');
     if(index == null){localStorage.setItem('index',0);}      
    }
    getIdRegistro(){
      let newid = localStorage.getItem('index');
      return (parseInt(newid)+1);      
    }
    gravar(parametro) {
            let index = this.getIdRegistro();

            localStorage.setItem(index, JSON.stringify(parametro));
            localStorage.setItem('index',index);
    }
}

function CadastrarTicket() {
    console.log("entrou")
    let anotacao = document.getElementById("anotacao").value;
    let data = document.getElementById("data").value;
    let status = document.getElementById("status").value;
    if (status == 1) {
            status = 'Concluido';
    } else {
            status = "Pendente";
    }
    console.log(status +data)
    let sup = new Ticket(
        anotacao,
            data,
            status
    );
    let db = new  DbLStorage();
    db.gravar(sup);       
}



