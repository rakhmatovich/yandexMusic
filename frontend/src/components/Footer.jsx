import "./FooterStyle.css";
import React from "react";

function Footer() {
  return (
    
    <footer>
      <div className="slova">
        <li>
          <a href="https://yandex.ru/support/music/performers-and-copyright-holders/copyright.html?lang=ru">Правообладателям</a>
        </li>
        <li>
          <a href="https://yandex.ru/legal/music_termsofuse?lang=ru">Пользовательское соглашение</a>
        </li>
        <li>
          <a href="https://music.yandex.ru/legal/recommendations/ru/#music">Правила рекомендаций</a>
        </li>
        <li>
          <a href="https://yandex.ru/support/music/index.html?lang=ru">Справка</a>
        </li>
        <li className="OOOyandex">
          <a href="https://ya.ru/">© 2023 ООО «Яндекс Музыка»</a>
        </li>
      </div>
        <li className="proekt">
          <a href="https://yandex.ru/all">Проект компании Яндекс</a>
        </li>
      <div className="padpiska">
        <li><a  href="">Подписаться</a></li>
        <div className="sait">
        <li className="d-links__link deco-popup-menu__item">
      <a href="//t.me/yandexmusic_live"
       className="d-link deco-link footer__subscribe-link d-links__link_text d-link_no-hover-color deco-link_no-hover-color"
        target="_blank" rel="noopener" data-b="37">
          <span class="d-icon deco-icon d-icon_telegram-circle  ">
          </span>Telegram</a></li>
           <li className="d-links__link deco-popup-menu__item">
           <a href="//twitter.com/yandexmusic"
              className="d-link deco-link footer__subscribe-link d-links__link_text d-link_no-hover-color deco-link_no-hover-color"
              target="_blank" rel="noopener" data-b="38">
                <span className="d-icon deco-icon d-icon_twitter-circle  ">
                  </span>Twitter</a></li>
                  <li className="d-links__link deco-popup-menu__item">
                   <a href="//vk.com/yandexmusic" className="d-link deco-link footer__subscribe-link d-links__link_text d-link_no-hover-color deco-link_no-hover-color"
                      target="_blank" rel="noopener" data-b="39">
                      <span class="d-icon deco-icon d-icon_vkontakte-circle  ">
                         </span>ВКонтакте</a></li>
                        <li className="d-links__link deco-popup-menu__item">
                        <a href="//www.youtube.com/c/MusicYandex" className="d-link deco-link footer__subscribe-link d-links__link_text d-link_no-hover-color deco-link_no-hover-color" 
                        target="_blank" rel="noopener" data-b="40">
                        <span className="d-icon deco-icon d-icon_youtube-circle  ">
                          </span>YouTube</a></li>
                      <li className="d-links__link deco-popup-menu__item">
                  <a href="//www.tiktok.com/@yandex.music" className="d-link deco-link footer__subscribe-link d-links__link_text d-link_no-hover-color deco-link_no-hover-color"
                  target="_blank" rel="noopener" data-b="41">
                <span className="d-icon deco-icon d-icon_tiktok-circle  ">
             </span>TikTok</a></li>
             </div>
             <div className="footer_age">Сервис Яндекс Музыка может содержать информацию, не предназначенную для несовершеннолетних</div>
        </div>
    </footer>

  );
}

export default Footer;