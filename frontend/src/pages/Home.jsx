import "../static/index.css";
import Layout from "../components/Layout";
import HomeTabs from "../components/HomeTabs";
import InterestingNow from "../components/InterestingNow";
import MusicCard from "../components/MusicCard";

const podcastsBooks = [
  { id: 1, url: '/images/viktor.jfif', name: 'Время «Спартака»', description: 'Хью Хауи. «Укрытие. Книга 1. Иллюзия»', like: 10 },
  { id: 2, url: '/images/viktor.jfif', name: 'Время «Спартака»', description: 'Хью Хауи. «Укрытие. Книга 1. Иллюзия»', like: 10 },
  { id: 3, url: '/images/viktor.jfif', name: 'Время «Спартака»', description: 'Хью Хауи. «Укрытие. Книга 1. Иллюзия»', like: 10 },
  { id: 4, url: '/images/viktor.jfif', name: 'Время «Спартака»', description: 'Хью Хауи. «Укрытие. Книга 1. Иллюзия»', like: 10 },
]

function Home() {
  return (
    <Layout>
      <div className="home">
        <HomeTabs />
        <h1 className="interesno">Интересно сейчас </h1>
        <div className="imag">
          <InterestingNow
            image={'/images/cingl1.png'}
            heading={'сингл'}
            title={'Мрачный фонк от GAYAZOV$ BROTHER$'}
          />
          <InterestingNow
            image={'/images/cingl.png'}
            heading={'сингл'}
            title={"Коллаборация Ramil' и Mary Gu"}
          />
        </div>

        <div className="Knigi">
          <h1>Подкасты и книги</h1>
          <p></p>
          <p>Слушайте не только музыку</p>
        </div>
        <div className="vse-knigi">
          {podcastsBooks.map(pbItem => (
            <MusicCard
              key={pbItem.id}
              url={pbItem.url}
              name={pbItem.name}
              description={pbItem.description}
              like={pbItem.like}
            />
          ))}
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

export default Home;
