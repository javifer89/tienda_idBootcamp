# GET /api/products

- Recupere de la base de datos todos los productos y devuelva un array en formato JSON con dichos productos

PRUEBAS:
- Que la url funcione -> Status 200
- Que devuelva un JSON -> Content-Type: application/json
- Que devuelva un ARRAY ->  Tipo de array
- Que nos devuelve el número de productos esperados


1. creamos fichero routes/api.js
2. creamos fichero routes/api/products.js
3. todas las rutas que lleguen a app.js con la url /api hay que enviarlas a api.js
4. todas las rutas que lleguen a api.js con la url /api/products hay que enviarlas a products.js
5. dentro de products.js respondemos a la petición con res.send('chachi pistachi');


## Creación de productos

-POST /api/products
- Body: name, description, price, available, department, stock

PRUEBAS:
1. Que la URL funcione -> status 200 y content-type application/json
2. Si tiene definido el _id
3. Comprobar si los datos insertados son correctos

# Recuperar un producto por ID
-GET /api/products/IDPRODUCTO

# Editar un producto
- PUT /api/products/IDPRODUCTO

    Antes de los test:
    - Creo un producto
    Después de los test:
    - Borro el producto

    PRUEBAS:
    - Status 200 y Content-type application/json
    - Mirar si se modifican los campos que envíe a modificar

# Borrar un producto
- DELETE /api/products/IDPRODUCTO
    Antes del test:
    - Creo un producto
    Despues de los test:
    - Borro un producto

    PRUEBAS:
    - Probar si funciona la URL
    - Comprobar que se ha borrado


## Creación usuario

POST /api/users/register
Body: username, email, password

1. Mirar en api.js si hay que incluirla
2. Crear el controlador de usuarios
3. Crear el fichero de rutas para usuarios
4. Dentro de la ruta creamos el usuario sobre el modelo con el método create.


PUT /api/users/IDUSER/buy/IDPRODUCT
