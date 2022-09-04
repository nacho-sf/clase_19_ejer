const mongoose = require('mongoose');
require('./providers')

const objectSchema = {
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    title: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    provider:{type: mongoose.Schema.Types.ObjectId, ref: 'Provider'}

};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

module.exports = Product;



/*
// Modelo para introducir producto en el body de postman (Copiar y pegar)
{
    "id": ,
    "title": "",
    "price": ,
    "description": "",
    "provider":""
}
*/



// Insertar un producto con Mongoose (a MongoDB):
/*
const p = new Product({
    id: 1,
    title: "Tortilla",
    price: 1.80,
    description: "Tortilla jugosa del teatro",
    provider:"https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.jpg"
});

p.save().then((data) => console.log(data))
*/




/*
id: 1,
title: "Metal Gear Solid",
price: 45.00,
description: "Agente operativo infiltrado en una conspiración contra el gobierno",
provider:

id: 2,
title: "Mario Bros",
price: 45.00,
description: "Fontanero al rescate de una princesa",
provider:

id: 3,
title: "Sonic",
price: 45.00,
description: "Las aventuras de un erizo azul",
provider:

id: 4,
title: "Pug",
price: 45.00,
description: "Supervivencia",
provider:

id: 5,
title: "Resident Evil",
price: 45.00,
description: "Distopía basada en la proliferación de un virus que convierte a los humanos en zombies",
provider:

id: 6,
title: "Mario Yosi",
price: 45.00,
description: "El dino de Mario Bross",
provider:

id: 7,
title: "Alex Kidd",
price: 45.00,
description: "Las aventuras de un niño orejón",
provider:

id: 8,
title: "Medal of Honor",
price: 45.00,
description: "Juego basado en la segunda guerra mundial",
provider:

id: 9,
title: "Iss Pro",
price: 45.00,
description: "Un clásico de deportes",
provider:

id: 10,
title: "Golden Boy",
price: 45.00,
description: "Las aventuras de un príncipe que se convierte en diversos animales",
provider:
*/



/*
En la consola de MongoDB Compass ir a mi base de datos:
Ver en dbMongo.js: mongoose.connect("mongodb://localhost:27017/mydb" --> mydb

Escribir:
db.products.insertOne({
    id: 10,
    title: "Golden Boy",
    price: 45.00,
    description: "Las aventuras de un príncipe que se convierte en diversos animales",
    provider: ObjectId("id del provider")
})
*/