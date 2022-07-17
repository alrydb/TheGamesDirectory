import {useEffect, useState} from 'react';

import './app.css'
import SearchIcon from './search.svg'
import GameCard from './GameCard';

const API_KEY = '6a44dff3dffe463f8a65d367f3299ce0';

const API_URL = 'https://api.rawg.io/api/games?&key=' + API_KEY;

// const movie1 = {
//     "Title": "Shrek",
//     "Year": "2001",
//     "imdbID": "tt0126029",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
//   }

const App = () =>{

    const [games, setgames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchgames = async (name) =>{
        const response = await fetch(`${API_URL}&search=${name}&page_size=4`);
        const data = await response.json();
       

        setgames(data.results);
    }

    useEffect(() => {
        searchgames('Pillars of eternity');


    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                placeholder='Search for games'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchgames(searchTerm)}
                />
            </div>


            {

                games?.length > 0
                ? (
                    <div className="container">
                         
                         {games.map((game) =>
                         (<GameCard game={game}/> ))}
                    </div>
                ) : (

                        <div className='empty'>
                                <h2>No games found</h2>

                        </div>
                )



            }


            


        </div>
    );
}

export default App;