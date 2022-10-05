import registerClient from './modules/registerClient'
import loginAdm from './modules/loginAdm'

import './assets/css/style.css'

try{
    registerClient()
} catch(e){}

try{
    loginAdm()
} catch(e){}