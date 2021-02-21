import React, {Component} from 'react';
import './body.css';

import logo from './images/des5.png';
import buscar_l from './images/loup.png';
import buscar_m from './images/microphone.png';
class Body1 extends Component {
    render () {
        return <div className='body1'>
                <div className='google_logo'>
                    <div className='google_logo2'>
                        <img className="googled" src={logo} height="auto" alt="Google"  />
                    </div>
                </div>
         <div className="buscador_botones">
            <div className="Formulario_1">
               <div className="Formulario_1_ext">
                  <div className="icono_buscador1">
                     <img className="icono_buscador1_ext" src={buscar_l} width="26" height="26" alt=""  />

                  </div>
                  <div className="buscador_text">
                     <input type="text" name="google" />
                  </div>
                  <div className="buscador_audio">
                     <div className="buscador_audio1">
                        <img src={buscar_m} width="26" height="26" alt=""  />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="botones_buscar">
            <center>
               <input type="buttom" name="" className="boton_b1" defaultValue='Buscar con Google' />
               <input type="buttom" name="" className="boton_b1" defaultValue='Me siento con suerte' />
            </center>   
         </div>

         <div className="ofrecido_x">
            <div className="ofrecido_x2">
               <div className="ofrecido_x3">
                  Ofrecido por Google en:  
                  <a href="https://www.google.com/setprefs?sig=0_N5go9dqRW2YQozMPzvC4bOuKXU8%3D&amp;hl=es-419&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwipx_nZiffuAhXPt1kKHW0GCaIQ2ZgBCA4">Español (Latinoamérica)</a>
               </div>
            </div>
         </div>



            </div>
    }
}

export default Body1;