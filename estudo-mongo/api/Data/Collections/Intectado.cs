using System;
using MongoDB.Driver.GeoJsonObjectModel;


namespace api.Data.Collections
{
    public class Intectado
    {
        /*
        Referencias
        Aula 4
        https://web.digitalinnovation.one/lab/construindo-um-projeto-de-uma-apinet-integrada-ao-mongodb/learning/a1a330c6-8ce3-46c6-9e2e-327cf763a226
        docs.mongodb.com/drivers/csharp
        install  -- github.com/mongodb/mongo-csharp-driver  

        */
       public Infectado(DateTime dataNascimento, string sexo, double latitude , double longitude){
           this.DataNascimento = dataNascimento;
           this.Sexo = sexo;
           this.Localizacao =  new GeoJson2DGeographicCoordinate(longitude,latitude);
       } 
       public DateTime DataNascimento {get;set;}
       public string Sexo{get;set;}
       public GeoJson2DGeographicCoordinate Localizacao {get;set;}

    }
}