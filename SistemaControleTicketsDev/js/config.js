class Ticket {
    constructor(anotacao, data, status) {
            this.anotacao = anotacao;
            this.data = data;
            this.status = status;
    }
    validacao(){
            console.log("Realizando validação")

            for( let i in this ){
                    if (this[i] == null || this[i] == '' ||this[i] == undefined){
                        return false;
                    }else{
                          
                     return true;
                    }
            }
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

    let anotacao = document.getElementById("anotacao");
    let data = document.getElementById("data");
    let status = document.getElementById("status");
    if (status == 1) {
            status = 'Concluido';
    } else {
            status = "Pendente";
    }
    console.log(status +data)
    let sup = new Ticket(
            anotacao.value,
            data.value,
            status.value
    );
    let db = new  DbLStorage();

    console.log(sup.validacao())
    if( sup.validacao() != true){
        $('#msgerro').modal('show');

    }else{
        db.gravar(sup);  
        ListarRegistros(anotacao.value); 
        $('#msginserir').modal('show');
        anotacao.value = "";
        data.value ="";
        status.value= 0;
    }
    
    
}


function ListarRegistros(id){
   let db = new  DbLStorage();
   for(let i=0 ; i <db.getIdRegistro();i++ ){
        let row = JSON.parse(localStorage.getItem(i));
        console.log(row)
        //console.log(`${row.anotacao}  Dia ${row.data}  Status ${row.status}`)
        //   console.log('Registros localizados' + i + " - " + JSON.parse(localStorage.getItem(i)) );
   }
   //     let row = JSON.parse(localStorage.getItem(1))
  // alert(`${row.anotacao}  Dia ${row.data}  Status ${row.status}`);
}


