import React from 'react';
import OnImagesLoaded from 'react-on-images-loaded';
import {useState} from 'react';
import { useRef } from 'react';




const scrollToRef = () => window.scrollTo(0, 0)  

const GameCard = ({game}) => {
    
    const [showInfo, setShowInfo] = useState(false);
    const [gameDescription, setGamedescription] = useState(['']);
    const[gameDeveloper, setGameDeveloper] = useState([''])
    const [showGameDescription, setShowGameDescription] = useState(false);
    const [gameDetails, setGameDetails] = useState(['']);
    const API = "https://api.rawg.io/api/games";

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)


    const getGameDescription = async(id) =>{

        const response = await fetch(`${API}/${id}?&key=6a44dff3dffe463f8a65d367f3299ce0`);
        const data = await response.json();
       
        setGamedescription(data.description);
        setGameDeveloper(data.developers)
        setGameDetails(data)

        


    }
    

    return (

        <>

        {


                
                <div className="container" >

                    <div  className={showInfo ? "game-info" : "game"}onClick={() => {
                        
                        if(!showInfo)
                        {
                            getGameDescription(game.id)
                            setShowInfo(true)
                        }
                       
                        
                        }} >
                        <div>
                            <p style={showInfo ? {visibility : 'hidden'} : {visibility : 'visible'}}>
                                 {game.released}
                             </p>
                             <p style={showInfo ?  {visibility : 'visible',} : {visibility : 'hidden'}} className="game-info-button" onClick={() =>{
                                 if(showInfo)
                                 {
                                     setShowInfo(false)
                                     setShowGameDescription(false)
                                 }
                             }}>
                                 x
                             </p>
                    </div>

            <div className='game-image'>
               
          
            <img src={game.background_image !== 'N/A' ? game.background_image : 'https://via.placeholder.com/400' } alt={"Image of the game"}></img>
            </div>
            

            <div>
                
                <span>{

                game.genres.length > 1 ? game.genres[0].name + ", " + game.genres[1].name : game.genres == null ? "empty" : ""
                
                }</span>
                <h3>{game.name}</h3>
            
               

 

                <table className='platform-list'>
                <tbody>
                    <tr>
                            
                            
                    {(() => {
                        var p = [];
                       
                    if(game.platforms != null)
                    {
                        for (let i = 0; i <= game.platforms.length; i++) {
                            
                            try {
                                
    
    
                                p.push(<img key={i} style={{width:24,height:24, margin:4 }} title={game.platforms[i].platform.name} src={game.platforms[i].platform.name === "PC" ? 
                                'icons/icons8-windows-10-30.png' : game.platforms[i].platform.name === "macOS" ? 
                                'icons/icons8-apple-logo-64.png' : game.platforms[i].platform.name === "PlayStation 3" ?
                                'icons/icons8-playstation-3-logo-48.png': game.platforms[i].platform.name === "PlayStation 2" ?
                                'icons/icons8-ps2-50.png': game.platforms[i].platform.name === "Nintendo Switch" ?
                                'icons/icons8-nintendo-switch-50.png': game.platforms[i].platform.name === "GameCube" ?
                                'icons/icons8-the-nintendo-gamecube-24.png': game.platforms[i].platform.name === "Android" ?
                                'icons/icons8-android-os-24.png': game.platforms[i].platform.name === "iOS" ?
                                'icons/icons8-ios-logo-48.png': game.platforms[i].platform.name === "PlayStation 4" ?
                                'icons/icons8-ps4-50.png': game.platforms[i].platform.name === "PlayStation 5" ?
                                'icons/icons8-ps5-48.png' : game.platforms[i].platform.name === "Xbox" ?
                                'icons/icons8-xbox-30.png' : game.platforms[i].platform.name === "Xbox 360" ?
                                'icons/icons8-xbox-30.png' : game.platforms[i].platform.name === "Xbox One" ?
                                'icons/icons8-xbox-30.png' : game.platforms[i].platform.name === "Xbox Series S/X" ?
                                'icons/icons8-xbox-30.png' : game.platforms[i].platform.name === "Linux" ?
                                'icons/icons8-linux-30.png' : game.platforms[i].platform.name === "Web" ?
                                'icons/icons8-web-32.png' :
    
                                
                                
                                
                                'icons/icons8-game-controller-30.png'}></img>);
                                
                                
                                
                                
    
                            } catch (error) {
                                console.log("error");
                            }
                        
                        
                        
    
                        }
                    }
                   
                   
                    console.log(p[0])
                    return p;
                     })()}

                     
                    </tr>
                </tbody>
            </table>


            <div style={showInfo ? {visibility : 'visible'} : {visibility : 'hidden'}}>
                
                <div className='game-info-list' style={showGameDescription ?  {overflow: 'scroll' } : {overflow: "hidden"}}>
                  
                
                <p dangerouslySetInnerHTML={showGameDescription ? { __html: "Hide description" } : { __html: "Show description" } } className='show-description' onClick={() => {
                                       

                                        if (!showGameDescription) {
                                            setShowGameDescription(true)
                                        }
                                        else
                                        {
                                            setShowGameDescription(false)
                                        }

                                        
                                    }}></p>
                                    

                                        <div style={showGameDescription && showInfo ? {display : 'none'} : !showGameDescription  && showInfo ? {visibility : 'visible'} : {visibility : 'collapse'}}>
                                        <p >Release date: {game.released !== null ? game.released : "N/A"}</p>
                                       
                                        <p >Developers:  {gameDeveloper.length >= 2 ? gameDeveloper[0].name + ", " + gameDeveloper[1].name : gameDeveloper.length == 1 ? gameDeveloper[0].name : "N/A" } </p>
                                        <p >  Metacritic score: {gameDetails.metacritic !== null ? gameDetails.metacritic : "N/A"}</p>
                                        
                                       
                                        </div>

                                        <div className='game-info-description' dangerouslySetInnerHTML={{ __html: gameDescription }} style={showGameDescription ? { visibility: 'visible' } : { visibility: 'collapse' }}>
                                        
                                        </div>
    
                   
                       
                        
                </div>

            </div>


            

            
                


               
        </div>   

        </div>
    </div>

            
        }
        
       


        
    </>

    );

}

export default GameCard



