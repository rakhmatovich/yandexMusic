import "../static/index.css";
import Layout from "../components/Layout";
import HomeTabs from "../components/HomeTabs";
import InterestingNow from "../components/InterestingNow";
import { TbNumber18Small } from "react-icons/tb";
import MusicCard from "../components/MusicCard";

const podcastsBooks = [
  { id: 1, url: '/images/spartak.jfif', name: 'Время «Спартака»', description: "Всё, что не вошло в док  Кинопоиска: байки и  скрытые смыслы", like: 10 },
  { id: 2, url: '/images/viktor.jfif', name: 'Виктор Пелевин. «Путешествие в Элевсин»', description: '', like: 10 },
  { id: 3, url: '/images/ted.png', name: 'TED Лучшее', description: '', like: 10 },
  { id: 4, url: '/images/ukritie.jfif', name: 'Хью Хауи. «Укрытие. Книга  1. Иллюзия»', description: '', like: 10 },
]

const Newrelizs = [
  { id: 1, url: '/images/varska.jfif', name: 'VARSKVA', description: 'Big Baby Tape', like: 10 },
  { id: 2, url: '/images/60sek.jfif', name: '60 секунд до зимы ', description: 'Гио Пика Кравц', like: 10 },
  { id: 3, url: '/images/puziri.jfif', name: 'МЫЛЬНЫЕ ПУЗЫРИ', description: 'алёна швец.', like: 10 },
  { id: 4, url: '/images/foto na pamat.jfif', name: 'Фото на память ', description: 'ПИКЧИ!', like: 10 },

]

const Populars = [
  { id: 1, url: '/images/gromknovink.png', name: 'Громкие новинки: рэп', description: 'На обложке: BUSHIDO ZHO  Мастера рифм и цепляющих битов', like: 10 },
  { id: 2, url: '/images/gromknovink2.png', name: 'Громкие новинки: поп', description: 'На обложке: NILETTO  Треки, которые будут звучать повсюду', like: 10 },
  { id: 3, url: '/images/za kadrom.png', name: 'За кадром', description: 'На обложке: FRIENDLY THUG 52 NGG Музыка из клипов. Плейлист, который смотрят!', like: 10 },
  { id: 4, url: '/images/giperpop.png', name: 'Гиперпоп', description: 'На обложке: eikko  Искажённый звук, рваный ритм и много автотюна.', like: 10 },

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

        <div className="Knigi">
          <h1>Новые Релизы</h1>
          <p></p>
          <p>Новые треки, альбомы и сборники</p>
        </div>
        <div className="vse-knigi">
          {Newrelizs.map(pbItem => (
            <MusicCard
              key={pbItem.id}
              url={pbItem.url}
              name={pbItem.name}
              description={pbItem.description}
              like={pbItem.like}
            />
          ))}
        </div>
        <div className="Knigi">
          <h1>Популярные плейлисты</h1>
          <p></p>
          <p>Собрано для вас нашей редакцией</p>
        </div>
        <div className="vse-knigi">
          {Populars.map(pbItem => (
            <MusicCard
              key={pbItem.id}
              url={pbItem.url}
              name={pbItem.name}
              description={pbItem.description}
              like={pbItem.like}
            />
          ))}
        </div>
       
      </div>



      <div className="line" />

    </Layout>

  );
}

export default Home;
