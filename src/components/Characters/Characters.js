import getDataApi from '../../utils/getDataApi';
import { IMG_STANDART__XLARGE } from '../../constants/api';
import { ROOT_MODAL } from '../../constants/root';
import imgCloseWhite from './img/cancel-white.svg'
import Notification from '../Notification/Notification';



import './Characters.css';

class Characters {
   renderContent(data) {
      console.log(data)
      let htmlContent = ``;

      data.forEach(({ name, thumbnail: { extension, path } }) => {
         const imgSrc = path + '/' + IMG_STANDART__XLARGE + '.' + extension;

         htmlContent += `
         <li class="characters__item">
            <img class="characters__img" src="${imgSrc}">
            <span class="characters__name">${name}</span>
         </li>
         `
      });


      const htmlWrapper = `
      <div class="modal-wrapper">
         <ul class="characters__container">
            ${htmlContent};
         </ul>
         <button class="btn-close characters__close" 
         onclick="modal.innerHTML = ''" 
         style="background-image: url(${imgCloseWhite})">

         </button>
      </div >
         `;
      // name
      // thumbnail => extension, path
      ROOT_MODAL.innerHTML = htmlWrapper;
      console.log(imgCloseWhite)
   }
   renderNotification() {
      Notification.render();
   }
   async render(uriEl) {
      const data = await getDataApi.getData(uriEl);
      data.length ? this.renderContent(data) : this.renderNotification()
   }
}

export default new Characters();