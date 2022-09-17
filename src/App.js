import React from 'react';
import './index.scss';
import Collection from './Collection';
import preloader from './../src/assets/images/preloader.gif';

const categories = [
  { "name": "Всі" },
  { "name": "Легка атлетика" },
  { "name": "Футзал" },
  { "name": "Волейбол" },
  { "name": "Міста" }
]

const App = () => {
  const [categoryId, setCategoryId] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [collections, setCollections] = React.useState([]);

  const onChangeInput = (e) => {
    setSearchValue(e.target.value)
  }

  React.useEffect(() => {
    setIsLoading(true);
    /*additional parameter for searching*/
    const category = categoryId ? `category=${categoryId}` : '';
    const pageParam = `page=${page}`;
    /*page is obligatory, and limit 3 items per page*/
    fetch(`https://63245eb35c1b435727a6d5ef.mockapi.io/photos?page=${page}&limit=3&${category}`)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Помилка при отриманні даних');
      }).finally(() => setIsLoading(false));
  }, [categoryId, page])

  return (
    <div className="App">
      <h1>Моя колекція фото</h1>
      <div className="top">
        <ul className="tags">
          {categories.map((obj, index) =>
            <li
              onClick={() => setCategoryId(index)}
              className={categoryId === index ? 'active' : ''}
              key={index}
            >
              {obj.name}
            </li>)
          }
        </ul>
        <input
          value={searchValue}
          onChange={onChangeInput}
          className="search-input"
          placeholder="Пошук по назві"
        />
      </div>
      <div className="content">
        {isLoading ? <div>
          <h2>Іде завантаження</h2>
            <img src={preloader} alt="preloader" />
        </div> :
          collections.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((collection, index) => (
              <Collection
                key={index}
                name={collection.name}
                images={collection.photos}
              />
            ))
        }
      </div>
      <ul className="pagination">
        {/*create 5 pages*/}
        {
          [...Array(3)].map((_, i) => (
            <li onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''}>{i + 1}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;