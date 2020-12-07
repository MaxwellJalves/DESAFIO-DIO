
const body = document.body;
body.style.position = 'relative';

user()
function user(){
  let dev = document.createElement("div");
  dev.className = "dev"
  dev.style.marginLeft ="40%"
  dev.style.width = "300px"
  dev.style.height = "300px"
  dev.style.borderRadius = "50%"
  dev.style.boxShadow = '10px 10px 5px 10px rgba(245,244,244,0.14)'
  dev.style.background = "URL(https://media-exp1.licdn.com/dms/image/C4D03AQEExWs7BRkO2A/profile-displayphoto-shrink_100_100/0/1605585408044?e=1613001600&v=beta&t=Szptk9f4JhfWC7tIN_L5DaU9NhXnjs7c-OxyQoTCcjM)"
  dev.style.backgroundRepeat = 'no-repeat';
  dev.style.backgroundSize = 'cover'
  dev.style.backgroundPosition ='center'

  body.appendChild(dev)
}

function insirirElemento(id,empresa,simbolo,rank , data){

let cabecalho = document.createElement("h2")
cabecalho.innerText = `${empresa.toLocaleUpperCase()}  - Primeiros Dados Historicos  : ${data}`;
cabecalho.style.margin = '20px'
cabecalho.style.color = 'white';

let div = document.createElement("div")
div.style.display = "column";
div.style.justifyItems = "left";
div.className = "component"
div.style.background = 'rgba(245,244,244,0.14)';
div.style.width = "70%"
div.style.height = "200px"
div.style.borderRadius= '50px 10px 20px 3px';
div.style.marginLeft = "2%"

let logo = document.createElement("logo")
logo.style.background = `url('img/${id}.png')`
logo.style.backgroundRepeat = 'no-repeat';
logo.style.backgroundSize = 'cover'
logo.style.backgroundPosition ='center'
logo.style.width = "200px"
logo.style.height = "200px"
logo.style.borderRadius="50px 10px 20px 3px"

let paragrafo1 = document.createElement("p")
paragrafo1.innerText = `SIMBOLO  :  ${simbolo.toLocaleUpperCase()}`; 
paragrafo1.style.marginLeft = "5%"

let paragrafo2 = document.createElement("p")
paragrafo2.innerText = `RANK DE INVESTIMENTOS : ${rank}º`; 
paragrafo2.style.marginLeft = "20%"


body.appendChild(cabecalho);
body.appendChild(div)

div.appendChild(logo)
div.appendChild(paragrafo1)
div.appendChild(paragrafo2)
}

function Linkedin(){
  let ancora = document.createElement('a')
  ancora.href = "https://www.linkedin.com/in/maxwell-j-alves-06867896/";
  ancora.innerText = "Linkedin"
  ancora.position = '0'
  body.appendChild(ancora)
}

const data = new Array()

    let url ='https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=';
    let apikey={
        key:'5291059b-2938-4cfe-82e2-fe1b494fc926'
    }

    fetch( url+ apikey.key)
    .then((response) =>{
      try{
        if(!response.ok) 
        throw new Error ("Não conseguimos identificar o motivo do erro, Aguarde alguns minutos e tente novamente "+ response.status);
        return response.json();
      }catch(e){
        console.log(e.message)
      }
    })
    .then((api) =>{
        let name = "";
        let id;
        let symbol;
        let rack;
        let date;

        for(let i =0 ; i <5 ; i++){
         
         data.push(api.data[i].first_historical_data)
         id = api.data[i].id;
         symbol = api.data[i].symbol;
         date = data[i].toLocaleUpperCase().match(/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}/)[0].split('-').reverse().join('/')
         rack = api.data[i].rank
         name= api.data[i].name  
         
         if( id != 0){
          insirirElemento(id,name, symbol,rack,date)
         }
        }
        
        console.log(api)})
    
    Linkedin();
  