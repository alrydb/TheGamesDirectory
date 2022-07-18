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
                <img style={{width:64,height:64 }} src={game.platforms[0].platform.name === "PC"  ? 'https://www.freeiconspng.com/thumbs/windows-icon-png/cute-ball-windows-icon-png-16.png' : 'https://via.placeholder.com/400' } alt={game.score}></img>
               

 


                <table>
                <tbody>
                    <tr>
                            
                    {(() => {
                        var p = [];
                        // console.log(game.platforms[1].platform.name)
                    for (let i = 0; i <= game.platforms.length; i++) {
                        // console.log(game.platforms[i].platform.name)
                        try {
                            p.push(<td key={i}>{game.platforms[i].platform.name}</td>);
                        } catch (error) {
                            console.log("error");
                        }
                    
                    
                    

                    }
                    console.log(p[0])
                    return p;
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



