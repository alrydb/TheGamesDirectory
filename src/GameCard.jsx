import React from 'react';






const GameCard = ({game}) => {

    return (
        <div className="container">
        <div className='movie'>
            <div>
                <p>
                    {game.released}
                </p>
            </div>

            <div>
                <img src={game.background_image !== 'N/A' ? game.background_image : 'https://via.placeholder.com/400' } alt={game.score}></img>
            </div>

            <div>
                <span>{
                game.genres.length > 1 ? game.genres[0].name + ", " + game.genres[1].name : game.genres[0].name}</span>
                <h3>{game.name}</h3>
                <img style={{width:64,height:64 }} src={game.platforms[0].platform.name == "PC"  ? 'https://www.freeiconspng.com/thumbs/windows-icon-png/cute-ball-windows-icon-png-16.png' : 'https://via.placeholder.com/400' } alt={game.score}></img>
                <span>

                    

                     {() => {
                            for(let i=0;i<=game.platforms[0].platform.length;i++){
                               <p>{game.platforms[0].platform[i].name}</p>  
                            }
                        }}
                </span>


                <table>
                <tbody>
                    <tr>
                    {(() => {
                        let platforms = [];
                    for (let i = 1; i <= game.platforms.length; i++) {
                    platforms.push(<td key={i}>{game.platforms[1].platform.name}</td>);
                    }
                    return platforms;
                     })()}
                    </tr>
                </tbody>
            </table>
                


               
            </div>   

        </div>
    </div>

    );

}

export default GameCard