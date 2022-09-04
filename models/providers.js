const mongoose = require('mongoose');

const objectSchema = {
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    company_name: { 
        type: String, 
        required: true 
    },
    CIF: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web:{
        type: String,
        required: true
    }
};
// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;


// Insertar un provider con Mongoose (a MongoDB):
/*
const p = new Provider({
    id: 1,
    company_name: "Nintendo",
    CIF: "B63826",
    address: "Calle Prim, 4",
    url_web:"https://www.nintendo.es/"
});

p.save().then((data) => console.log(data))
*/






/*
id: 1,
company_name: "Nintendo",
CIF: "B63826",
address: "Calle Prim, 4",
url_web:"https://www.nintendo.es/"

id: 2,
company_name: "Sega",
CIF: "B86230",
address: "Calle Río, 12",
url_web:"https://www.sega.es/"

id: 3,
company_name: "Sony",
CIF: "B63582",
address: "Calle Valle, 8",
url_web:"https://www.sony.es/"

id: 4,
company_name: "Microsoft",
CIF: "B86682",
address: "Calle Ladio, 52",
url_web:"https://www.microsoft.com/"
*/



/*
En la consola de MongoDB Compass ir a mi base de datos:
Ver en dbMongo.js: mongoose.connect("mongodb://localhost:27017/mydb" --> mydb

Escribir:
db.providers.insertOne({
    id: 4,
    company_name: "Microsoft",
    CIF: "B86682",
    address: "Calle Ladio, 52",
    url_web:"https://www.microsoft.com/"
})
*/