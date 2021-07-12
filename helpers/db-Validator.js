

// aqui  van a estar ambos validadores

const Role = require('../models/role');

const Usuario  = require('../models/usuario');

const esRoleValido = async (rol = '')=>{ // validando el role en la base de datos , de igual manera 
    // con el custom validamos una verificacion personalizada el custom va a recibir el valor que estoy evaluando del body que es el role
    // colocandole un valor por defecto en caso de que no venga nada , porque si no viniera nada 
    // va a chocar con la validacion a la base de datos

     
    
    const existeRol  = await Role.findOne({ rol });// voy a buscar uno , en el cual el nombre del rol sea igual a rol que estoy intentando validar

    
    
    if(!existeRol){ // sino existe el rol

        throw new Error(` el rol  ${ rol } no esta registrado en la base de datos`);

    }


    }


    // validando si el correo existe


    const emailExiste = async(Correo = '') =>{


    const existeEmail =  await Usuario.findOne({ Correo}); // filtrando si el correo existe 

    if( existeEmail){

            
        throw new Error(`El correo ${Correo},ya existe `);




    }    }



    const ExisteUsuarioporID = async(id) =>{

        // SI EL USUARIO EXISTE, LO VOY A DEJAR PASAR POR ESTA CONDICION 
        const existeUsuario =  await Usuario.findById(id); // filtrando si el correo existe 
    

        if( !existeUsuario){ // PERO SINO EXISTE LANZO EL ERROR 

    
                
            throw new Error(`El id no existe  ${id}`);
    
    
    
    
        }    }







    module.exports = {

        esRoleValido,
        emailExiste,
        ExisteUsuarioporID



    }