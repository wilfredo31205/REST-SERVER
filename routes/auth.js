
const { Router } = require('express'); 
const { check }  = require('express-validator');
const { login } = require('../Controllers/auth');
const { ValidarCampos } = require('../middlewares/Validar-Campos');


const router = Router();

router.post('/login',[


    check('Correo', 'El Correo es obligatorio').isEmail(),
    
    check('Password', 'La contraseña es obligatoria').not().isEmpty(),



ValidarCampos,

] ,login );






module.exports = router;  