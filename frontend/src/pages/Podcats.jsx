import React from "react";
import "./PodcatsStyle.css";
import Layout from "../components/Layout";

function Podcats() {
  return (
    <Layout>
      <div className="podcats">
        <div className="podcasti">Подкасты и книги</div>
        <div>
          <div id="Home-slova">
            <div>
              <a className="vse">ВСЁ</a>
            </div>
            <div>
              <a href="">АУДИОКНИГИ</a>
            </div>
            <div>
              <a href="">ПОДКАСТЫ</a>
            </div>
          </div>
          <div className="line" />
          <div className="audio">Аудиокниги: с чего начать?</div>
          <p className="bestseler">Бестселлеры из опции Букмейт</p>
          <div className="imgs">
            <div className="images">
              <img src="/images/alexandra.jfif" alt="" />
              <p>
                Александра Яковлева. <br /> «Иные»
              </p>
            </div>
            <div className="images">
              <img src="/images/olga.jfif" alt="" />
              <p>
                Ольга Примаченко. «Всё <br /> закончится, а ты нет. Книг....
              </p>
            </div>
            <div className="images">
              <img src="/images/djon.p.jfif" alt="" />
              <p>
                Джон П. Стрелеки. «Кафе <br /> на краю земли. Как....
              </p>
            </div>
            <div className="images">
              <img src="/images/anna.jfif" alt="" />
              <p>
                Анна Старобинец. <br /> «Лисьи броды»
              </p>
            </div>
          </div>
          <div className="eshebolshe">
            <div className="bukmeyt">Букмейт</div>
            <div className="vbibliotek">
              {" "}
              Ещё больше аудиокниг в библиотеке — <br /> с опцией Букмейт
            </div>
            <div>
              <button className="podrobnee">Podrobnee</button>
            </div>
          </div>
          <div className="redaksii">Подкасты: выбор редакции 2023</div>
          <div className="viborredaksii">
            <div className="images">
              <img src="/images/osnovano.png" alt="" />
              <p>
                Основано <br /> на реальных событиях
              </p>
            </div>
            <div className="images">
              <img src="/images/syeshapelsin.png" alt="" />
              <p>Съешь апельсин</p>
            </div>
            <div className="images">
              <img src="/images/serfella.jfif" alt="" />
              <p>Серфелла</p>
            </div>
            <div className="images">
              <img src="/images/bumajniygorod.jfif" alt="" />
              <p>Бумажный город</p>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////// */}
          <div className="redaksii">Книги: выбор редакции 2023</div>
          <div className="viborredaksii">
            <div className="images">
              <img src="/images/anna.jfif" alt="" />
              <p>
                Анна Старобинец. <br /> «Лисьи броды»
              </p>
            </div>
            <div className="images">
              <img src="/images/predanniy.jfif" alt="" />
              <p>
                Вьет Тхань Нгуен. <br /> «Преданный»
              </p>
            </div>
            <div className="images">
              <img src="/images/richard.jfif" alt="" />
              <p>
                Колсон Уайтхед. <br /> «Мальчишки из....
              </p>
            </div>
            <div className="images">
              <img src="/images/Malchishki.jfif" alt="" />
              <p>
                Ричард Руссо. <br /> «Непосредственный....
              </p>
            </div>
          </div>
          {/* Zimniye podcasti ////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="audio">Подкасты для зимних вечеров</div>
          <p className="bestseler">Слушайте, глядя на снегопад</p>
          <div className="imgs">
            <div className="images">
              <img src="/images/zanyatsa.png" alt="" />
              <p>Заняться делом</p>
            </div>
            <div className="images">
              <img src="/images/apetit.png" alt="" />
              <p>Звучит аппетитно</p>
            </div>
            <div className="images">
              <img src="/images/lampoviy.png" alt="" />
              <p>Ламповый вечер</p>
            </div>
            <div className="images">
              <img src="/images/delobilo.png" alt="" />
              <p>Дело было так</p>
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div className="audio">С заботой о себе</div>
          <p className="bestseler">
            Wellness-подкасты, чтобы беречь здоровье в холодный сезон
          </p>
          <div className="imgs">
            <div className="images">
              <img src="/images/netip.jfif" alt="" />
              <p>Нетипичный косметолог</p>
            </div>
            <div className="images">
              <img src="/images/bezshapki.jfif" alt="" />
              <p>Без шапки</p>
            </div>
            <div className="images">
              <img src="/images/netstida.jfif" alt="" />
              <p>Нестыдный вопрос</p>
            </div>
            <div className="images">
              <img src="/images/byuti.jfif" alt="" />
              <p>Бьюти завтрак</p>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div className="audio">История не по учебнику</div>
          <div className="imgs">
            <div className="images">
              <img src="/images/vremyadengi.png" alt="" />
              <p>Время и деньги</p>
            </div>
            <div className="images">
              <img src="/images/zakatimperii.jfif" alt="" />
              <p>Закат империи</p>
            </div>
            <div className="images">
              <img src="/images/pritsare.jfif" alt="" />
              <p>При царе Горохе</p>
            </div>
            <div className="images">
              <img src="/images/mifikl.png" alt="" />
              <p>Мификл Подкаст</p>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div className="audio">Чарт подкастов</div>
          <p className="bestseler">
            Самое популярное на Яндекс Музыке прямо сейчас
          </p>
          <div className="imgs">
            <div className="images">
              <img src="/images/vpredidushix.jfif" alt="" />
              <p>В предыдущих сериях</p>
            </div>
            <div className="images">
              <img src="/images/osnovano.png" alt="" />
              <p>
                Основано на реальных <br /> событиях
              </p>
            </div>
            <div className="images">
              <img src="/images/chestnienovost.jfif" alt="" />
              <p>
                Самые честные <br /> новости
              </p>
            </div>
            <div className="images">
              <img src="/images/IELTS.png" alt="" />
              <p>
                IELTS Speaking for <br /> Success
              </p>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div className="audio">Чарт аудиокниг</div>
          <p className="bestseler">Топ-100 на сегодня</p>
          <div className="imgs">
            <div className="images">
              <img src="/images/PROJIVAYA.jfif" alt="" />
              <p>
                Ольга Савельева. <br /> «ПроЖИВАЯ. Как....
              </p>
            </div>
            <div className="images">
              <img src="/images/VESELOPSIX.jfif" alt="" />
              <p>
                Лариса Суркова. «Весёлая <br /> психология для детей....
              </p>
            </div>
            <div className="images">
              <img src="/images/dumaymedlenno.jfif" alt="" />
              <p>
                Даниэль Канеман. «Думай <br /> медленно... решай быстро»
              </p>
            </div>
            <div className="images">
              <img src="/images/TEORIA.jfif" alt="" />
              <p>
                Татьяна Мужицкая. <br /> «Теория невероятности....
              </p>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div className="audio">Подкасты: выбор редакции </div>
          <div className="imgs">
            <div className="images">
              <img src="/images/SHILA.jfif" alt="" />
              <p>Шила в одном месте</p>
            </div>
            <div className="images">
              <img src="/images/vremyadengi.png" alt="" />
              <p>Время и деньги</p>
            </div>
            <div className="images">
              <img src="/images/IHATE.jfif" alt="" />
              <p>I HATE DATES</p>
            </div>
            <div className="images">
              <img src="/images/FOLKOR.jfif" alt="" />
              <p>Здесь был фольклор</p>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div className="audio">Взгляд, вспышка, любовь</div>
          <p className="bestseler">Послушать, пока за окном идёт дождь</p>
          <div className="imgs">
            <div className="images">
              <img src="/images/ISTORIAKAKTUSA.jfif" alt="" />
              <p>
                Женя Донова. «История <br /> одного кактуса. Роман <br /> для
                тех, кто боится любить»
              </p>
            </div>
            <div className="images">
              <img src="/images/TESSABEYLI.jfif" alt="" />
              <p>
                Тесса Бейли. «У любви <br /> на крючке»
              </p>
            </div>
            <div className="images">
              <img src="/images/DJENNI KOLGS.jfif" alt="" />
              <p>
                Дженни Колган. «Книжный <br /> магазинчик у озера»
              </p>
            </div>
            <div className="images">
              <img src="/images/SLEDUYZARITM.jfif" alt="" />
              <p>
                Сара Дэсс. «Следуй за <br /> ритмом»
              </p>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div className="audio">TED Лучшее</div>
          <p className="bestseler">Те самые лекции</p>
          <div className="imgs">
            <div className="images">
              <img src="/images/ted.png" alt="" />
              <p>TED Лучшее</p>
            </div>
            <div className="images">
              <img src="/images/TEDPSIX.png" alt="" />
              <p>TED Лучшее: Психология</p>
            </div>
            <div className="images">
              <img src="/images/TEDKULTURA.png" alt="" />
              <p>
                TED Лучшее: <br /> Общество и культура
              </p>
            </div>
            <div className="images">
              <img src="/images/TEDNAUKA.png" alt="" />
              <p>TED Лучшее: Наука</p>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div className="audio">Пацаны, вам нет цены</div>
          <p className="bestseler">Подкасты, в которых говорят мужчины</p>
          <div className="imgs">
            <div className="images">
              <img src="/images/TROEVLODKE.jfif" alt="" />
              <p>
                Трое в лодке, не <br /> стесняясь собаки
              </p>
            </div>
            <div className="images">
              <img src="/images/PATSANI.png" alt="" />
              <p>пацаны</p>
            </div>
            <div className="images">
              <img src="/images/MUJSHINAVIKUDA.jfif" alt="" />
              <p>Мужчина, вы куда?</p>
            </div>
            <div className="images">
              <img src="/images/INTERESNIYPODCAST.jfif" alt="" />
              <p>Интересный Подкаст</p>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div className="novinki">Избранные новинки</div>
          <p className="bestseler">Главные выпуски недели</p>
          <div className="novinki-risunki">
            <div className="novinki-img">
              <img src="/images/ted3.png" alt="" />
              <a href="">
                2023| 10 уроков фанатской жизни
                <br />
                <p>TED Лучшее</p>
              </a>
            </div>
            <div className="novinki-img">
              <img src="/images/Liza.png" alt="" />
              <a href="">
                Лиза Парфёнова (персонажи для Netflix: «Любовь, смерть и
                роботы»,
                <br /> «Энтергалактик») — о том, что формирует художника
                <p>Изобразили - 9 декабря</p>
              </a>
            </div>
            <div className="novinki-img">
              <img src="/images/rezitol.jfif" alt="" />
              <a href="">
                Резильентность: про любовь к жизни, маленькие шаги и <br />{" "}
                юмор, как способ справляться со сложностями.
              </a>
            </div>
            <div className="novinki-img">
              <img src="/images/vishka.png" alt="" />
              <a href="">
                Вышка онлайн / Директор по онлайн-образованию ВШЭ / <br /> Юлия
                Ремезова
              </a>
            </div>
            <div className="novinki-img">
              <img src="/images/dan.png" alt="" />
              <a href="">Давайте отдадим дань. Как купить соседу нашествие</a>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        </div>
      </div>
      <div className="line" />
    </Layout>
  );
}

export default Podcats;
