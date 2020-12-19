using Api.Data.Collections;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace api.Controller{
    [ApiController]
    [Route("[controller]")]
    public class InfectadoController: ControllerBase
    {
        Data.MongoDb _BancoDeDados;
        IMongoCollection<Infectado> _InfectadoCollection;
        
        public  InfectadoController(Data.MongoDb mongo){
            _BancoDeDados = mongo;
            InfectadoCollection = _BancoDeDados.DB.GetCollection<Infectado>(typeof(Infectado).Name.ToLower());
        }

        [HttpPost]
        public ActionResult SalvarRegistro([FromBody] InfectadoDto dto){

            var objeto = new Infectado(dto.DataNascimento, dto.Sexo, dto.Longitude , dto.Latitude);
            _InfectadoCollection.InsertOne(infectado);
            return StatusCode(201,"Infectado Adicionado com Sucesso");
        }

        [HttpGet]
        public ActionResult PegarRegistros([FromBody] InfectadoDto dto){

            var retornaObjeto =  _InfectadoCollection.Find(Builders<Infectado>.Filter.Empty).ToList();
            return  Ok(retornaObjeto);
        }
    }
}