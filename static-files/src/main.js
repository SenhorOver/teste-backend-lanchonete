import './assets/css/style.css'

import { Main } from './assets/modules/loginPage'
import { initialAdm } from './assets/modules/admLogin'

try{
    Main.init()
} catch(e){}

try{
    initialAdm()
} catch(e){}
