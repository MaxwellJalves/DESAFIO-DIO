class Ticket {
        constructor(anotacao, data, status) {
                this.anotacao = anotacao;
                this.data = data;
                this.status = status;
        }
        validacao() {
                console.log("Realizando validação")

                for (let i in this) {
                        if (this[i] == null || this[i] == '' || this[i] == undefined) {
                                return false;
                        } else {

                                return true;
                        }
                }
        }
}
class DbLStorage {
        constructor() {
                let index = localStorage.getItem('index');
                if (index == null) { localStorage.setItem('index', 0); }
        }
        getIdRegistro() {
                let newid = localStorage.getItem('index');
                return (parseInt(newid) + 1);
        }
        gravar(parametro) {
                let index = this.getIdRegistro();

                localStorage.setItem(index, JSON.stringify(parametro));
                localStorage.setItem('index', index);
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

        let sup = new Ticket(
                anotacao.value,
                data.value,
                status.value
        );
        let db = new DbLStorage();


        //Variavel  criada para controlar o fluxo do modal
        let tp_modal = document.getElementById('modal-title');
        let mensagem = document.getElementById('h5');
        let msg_body = document.getElementById('modal_mensagem');
        let button = document.getElementById('modal_button');  //btn btn-success


        if (sup.validacao() != true) {
                mensagem.innerHTML = ":( [Erro] ";
                tp_modal.className = "modal-header text-danger";
                msg_body.innerHTML = "Ops! Existem campos sem preenchimento.";
                msg_body.className = "modal-body text-danger";
                button.className = "btn btn-outline-dark";
                button.innerText = "Corrigir";

                $('#modal-info').modal('show');

        } else {
                mensagem.innerHTML = "Registro Inserido com Sucesso";
                tp_modal.className = "modal-header text-success";
                msg_body.innerHTML = "Registro Inserido com sucesso.";
                msg_body.className = "modal-body text-success";
                button.className = "btn btn-success";
                button.innerText = "OK";

                db.gravar(sup);
                $('#modal-info').modal('show');

        }
}

function ListarRegistros() {
        // let db = new  DbLStorage();
        for (let i = 1; i <= 3; i++) {
                let row = JSON.parse(localStorage.getItem(i));
                document.getElementById('cd').innerHTML = row.anotacao;
                document.getElementById('dt').innerHTML = row.data;
                document.getElementById('st').innerHTML = row.status;
        }
}

ListarRegistros()

