import {useEffect, useState} from 'react';

import './app.css'
import SearchIcon from './search.svg'
import GameCard from './Components/GameCard';
import ClipLoader from "react-spinners/ClipLoader";




const API_KEY = '6a44dff3dffe463f8a65d367f3299ce0';

const API_URL_GAMES = 'https://api.rawg.io/api/games?&key=' + API_KEY;

const API_URL_DEVS = 'https://api.rawg.io/api/developers?&key=' + API_KEY;


const scrollToRef = () => window.scrollTo(0, 0)  

const App = () =>{

    const [loading, setLoading] = useState(false);

    const [games, setgames] = useState([]);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState([]);
    const [filtersVisible, setFiltersVisible] = useState(false);

    
    const executeScroll = () => scrollToRef()

    const searchgames = async (name) =>{
        setLoading(true)
        const response = await fetch(`${API_URL_GAMES}&search=${name}&page_size=40`);
        const data = await response.json();
       
    
        setgames(data.results);

        setLoading(false)
       
    }

    const searchDeveloper = async(name) =>{

        setLoading(true)
        const response = await fetch(`${API_URL_DEVS}&search=${name}&page_size=1`);
        const data = await response.json();
       
        let developer = (data.results[0].id);

        const response2 = await fetch(`${API_URL_GAMES}&page_size=40&developers=${developer}`);
        const data2 = await response2.json();

        setgames(data2.results);


        setLoading(false)


    }

    useEffect(() => {
        searchgames('');
        setFilters("game");
       

    }, []);

    return (
        <>
        <div className='app'>
            <h1 onClick={()=>
            {

                searchgames('')

            }}>The Games Directory</h1>
          
            {
                loading ? (
                    <>
                    <ClipLoader color={"#3C4947"} loading={loading}  size={150} />
                    <p style={{color:"white"}}>Searching</p>
                    </>
                    
                    
                    
                )

                : (
                    <>
                        
                            <div className='home-button' onClick={() =>{

                                    executeScroll()


                            }}>
                                <img src='icons/icons8-home-24.png' alt='image of a home'></img>
                            </div>


                            <p className={filtersVisible ? "arrow up" : "arrow down"} onClick={() => {
                                if (filtersVisible) {
                                    setFiltersVisible(false)
                                }
                                else {

                                    setFiltersVisible(true)
                                }
                            }


                            }></p>


                            {
                                



                                     filtersVisible  == true ?

                                    (
                                        <div className='filters'>
                                        <input className='filter-button' 
                                           
                                            value="game"
                                            type="radio"
                                            name="game"
                                            onChange={(e) =>
                                            setFilters("game")
                                            }
                                            checked={filters ==="game"}
                                            
                                        />   Games
                                        <input className='filter-button'
                                            value="developer"
                                            type="radio"
                                            name="developer"
                                            onChange={(e) =>
                                                setFilters("developer")
                                                }
                                            checked={filters ==="developer"}
                                            
                                        />   Developer
                                    </div>
                                    )
                                     
                                     
                                     :
                                     null


                            }
                           



                            {
                                filters === "game" ? 
                                <>
                                 <div className='search'>
                                <input
                                
                                
                                placeholder='Search for games by title e.g "Skyrim"'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                      searchgames(searchTerm)
                                      console.log("enter pressed")
                                    }
                                   
                                  }}
                                />
                                <img
                                src={SearchIcon}
                                alt="search"
                                onClick={() => searchgames(searchTerm)}
                              
                                />

                                </div>
                                     <div className="container" >
                         
                                     {games.map((game) =>
                                     (<GameCard game={game}/> ))}
                                       
                                </div>
                                </>
                            

                            :
                            <>
                            <div className='search'>
                            <input
                                
                                placeholder='Search for games by developers e.g "Ubisoft"'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                      searchDeveloper(searchTerm)
                                      console.log("enter pressed")
                                    }
                                   
                                  }}
                                />
                                <img
                                src={SearchIcon}
                                alt="search"
                                onClick={() => searchDeveloper(searchTerm)}
                              
                                />
                                </div>
                                     <div className="container" >
                         
                                     {games.map((game) =>
                                     (<GameCard game={game}/> ))}
                                     
                                     
                                       
                                </div>
                            
                            </>

        
                            }
                            
                            <div className='footer'>

<p>All icons used are downloaded from  <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8.com</a> </p>


</div>
               
                    
                    </>

                    
                )
            }
            


            {

                games?.length <= 0
                ? (

                    <div className='empty'>
                    <h2>No games found</h2>

                    </div>

                    
                ) : (
                    <></>
                        
                ) 



            }


            


        </div>
      
        </>
    );
}

export default App;