import "../static/index.css";
import Layout from "../components/Layout";
function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="glavar">
          <h1 className="glavnoe">Главное</h1>
          <div id="Home-slova">
            <div>
              <a className="vse">ВСЁ</a>
            </div>
            <div>
              <a href="">НОВЫЕ</a>
            </div>
            <div>
              <a href="">РЕЛИЗЫ</a>
            </div>
            <div>
              <a href=""> ПОДБОРКИ</a>
            </div>
            <div>
              <a href="">НЕЙРОМУЗЫКА</a>
            </div>
          </div>
        </div>
        <div className="line" />
        <h1 className="interesno">Интересно сейчас </h1>
        <a className="imag" href="">
          <div className="oblojka">
            <img className="img-music" src="/images/cingl1.png" alt="" />
            <h1 className="playlist">
              <a>
                сингл
                <br />
              </a>
              Мрачный фонк от GAYAZOV$ BROTHER$
              <p>Неожиданное переосмысление хита 00-х</p>
            </h1>
          </div>
          <div className="oblojka">
            <img className="img-music" src="/images/cingl.png" alt="" />
            <h1 className="playlist2">
              <a>
                сингл <br />
              </a>
              Коллаборация Ramil' и Mary Gu
              <p>Трагичная история токсичной любви</p>
            </h1>
          </div>
        </a>

        <div className="Knigi">
          <h1>Подкасты и книги</h1>
          <p></p>
          <p>Слушайте не только музыку</p>
        </div>
        <div className="vse-knigi">
          <a className="kartina-knigi" href="">
            <img src="/images/spartak.jfif" alt="" />
            <p className="spartak">Время «Спартака»</p>
            <p className="vdok">
              "Всё, что не вошло в док <br /> Кинопоиска: байки и <br /> скрытые
              смыслы"
            </p>
          </a>

          <a className="kartina-knigi" href="">
            <img src="/images/viktor.jfif" alt="" />
            <p>
              Виктор Пелевин. <br /> «Путешествие в Элевсин»
            </p>
          </a>
          <a className="kartina-knigi" href="">
            <img src="/images/ted.png" alt="" />
            <p>TED Лучшее</p>
          </a>

          <a className="kartina-knigi" href="">
            <img src="/images/ukritie.jfif" alt="" />
            <p>
              Хью Хауи. «Укрытие. Книга <br /> 1. Иллюзия»
            </p>
          </a>
        </div>

        <div className="Relizi">
          <h1>Новые Релизы</h1>
          <p>Новые треки, альбомы и сборники</p>
        </div>
        <div className="Relizi2">
          <a className="kartina-knigi" href="">
            <img src="/images/varska.jfif" alt="" />
            <p>VARSKVA</p>
            <p className="bigbaby">Big Baby Tape</p>
          </a>

          <a className="kartina-knigi" href="">
            <img src="/images/60sek.jfif" alt="" />
            <p>60 секунд до зимы </p>
            <p className="gio">Гио Пика Кравц</p>
          </a>
          <a className="kartina-knigi" href="">
            <img src="/images/puziri.jfif" alt="" />
            <p>МЫЛЬНЫЕ ПУЗЫРИ</p>
            <p className="alena">алёна швец.</p>
          </a>

          <a className="kartina-knigi" href="">
            <img src="/images/foto na pamat.jfif" alt="" />
            <p>Фото на память </p>
            <p className="pikchi">ПИКЧИ!</p>
          </a>
        </div>

        <div className="popular">
          <h1>Популярные плейлисты</h1>
          <p>Собрано для вас нашей редакцией</p>
        </div>
        <div className="popular2">
          <a className="kartina-knigi" href="">
            <img src="/images/gromknovink.png" alt="" />
            <p>Громкие новинки: рэп</p>
            <p className="rep">
              На обложке: BUSHIDO ZHO <br />
              Мастера рифм и цепляющих <br /> битов
            </p>
          </a>

          <a className="kartina-knigi" href="">
            <img src="/images/gromknovink2.png" alt="" />
            <p>Громкие новинки: поп </p>
            <p>
              На обложке: NILETTO <br />
              Треки, которые будут звучать <br /> повсюду
            </p>
          </a>
          <a className="kartina-knigi" href="">
            <img src="/images/za kadrom.png" alt="" />
            <p>За кадром</p>
            <p>
              На обложке: FRIENDLY THUG 52 NGG <br />
              Музыка из клипов. Плейлист, который смотрят!
            </p>
          </a>

          <a className="kartina-knigi" href="">
            <img src="/images/giperpop.png" alt="" />
            <p>Гиперпоп</p>
            <p>
              На обложке: eikko <br />
              Искажённый звук, рваный ритм <br /> и много автотюна.
            </p>
          </a>
      </div>
        </div>         
        <div className="line" />
          
    </Layout>
  );
}



/*
      <div className="oblojka">
          <a className="imag" href="">
            <img className="img-music" src="./images/cingl1.png" alt="" /> 
          </a>
          <h1 className="singl"><a href="">сингл</a></h1>
          <a className="imag" href="">
            <img className="img-music" src="./images/cingl.png" alt="" /> 
          </a>
          </div>
          <h1 className="singl"><a href="">сингл</a></h1> */

export default Home;
