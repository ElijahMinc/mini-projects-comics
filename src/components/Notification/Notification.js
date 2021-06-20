import { ROOT_MODAL } from "../../constants/root";
import imgCloseBlack from './img/cancel-black.svg';


import './Notification.css';


class Notification {

   render() {
      let htmlContent = `
         <div class="notification__container">
            <span class="notification__text">Нет контента</span>
            <button class="notification__close"
            style="background-image: url(${imgCloseBlack})"
            onclick="modal.innerHTML=''"
            ></button>
         </div>
      `;


      ROOT_MODAL.innerHTML = htmlContent;
   }
}


export default new Notification();