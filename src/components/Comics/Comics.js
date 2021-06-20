import { API_URL, URL_COMICS, IMG_STANDART__XLARGE, URL_CHARACTERS, IMG_NOT__AVIABLE } from '../../constants/api';
import getDataApi from '../../utils/getDataApi';
import { ROOT_INDEX } from './../../constants/root';

import Characters from '../Characters';
import Error from '../Error';

import './Comics.css'; // styles

class Comics {
   renderComics(data) {
      let htmlContent = ``;

      data.forEach(({ id, title, thumbnail: { extension, path } }) => {

         if (path.lastIndexOf(IMG_NOT__AVIABLE) === -1) { // возвращаем только те данные, у которых есть картинки
            const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS; // ссылка на новый запрос

            const imgSrc = path + '/' + IMG_STANDART__XLARGE + '.' + extension;
            htmlContent += `
               <li class="comics__item" data-uri="${uri}">
                  <span class="comics__name">${title}</span>
                  <img class="comics__img" src =${imgSrc}>
               </li>
            `;
         }
      });
      const htmlWrapper = ` 
      <ul class="comics__container">
         ${htmlContent}
      </ul>
      `;
      ROOT_INDEX.innerHTML = htmlWrapper;
   }

   async render() {
      const data = await getDataApi.getData(API_URL + URL_COMICS);
      data ? this.renderComics(data) : Error.render();
   }
   eventListener() {
      document.querySelectorAll('.comics__item').forEach(el => {
         const uriEl = el.dataset.uri;
         el.addEventListener('click', () => {
            Characters.render(uriEl);
         })
      })
   }
}

export default new Comics();