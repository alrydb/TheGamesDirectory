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

            <div className='game-image'>
                <img src={game.background_image !== 'N/A' ? game.background_image : 'https://via.placeholder.com/400' } alt={game.score}></img>
            </div>

            <div>
                <span>{
                game.genres.length > 1 ? game.genres[0].name + ", " + game.genres[1].name : game.genres[0].name}</span>
                <h3>{game.name}</h3>
                {/* <img style={{width:64,height:64 }} src={game.platforms[0].platform.name === "PC"  ? 'https://www.freeiconspng.com/thumbs/windows-icon-png/cute-ball-windows-icon-png-16.png' : 'https://via.placeholder.com/400' } alt={game.score}></img> */}
               

 


                <table className='platform-list'>
                <tbody>
                    <tr>
                            
                    {(() => {
                        var p = [];
                        // console.log(game.platforms[1].platform.name)
                    for (let i = 0; i <= game.platforms.length; i++) {
                        // console.log(game.platforms[i].platform.name)
                        try {
                            // p.push(<td key={i}>{game.platforms[i].platform.name}</td>);


                            p.push(<img key={i} style={{width:32,height:32, margin:4 }} title={game.platforms[i].platform.name} src={game.platforms[i].platform.name === "PC" ? 
                            '/icons/icons8-windows-10-30.png' : game.platforms[i].platform.name === "macOS" ? 
                            '/icons/icons8-apple-logo-64.png' : game.platforms[i].platform.name === "PlayStation 3" ?
                            '/icons/icons8-playstation-3-logo-48.png': game.platforms[i].platform.name === "PlayStation 2" ?
                            '/icons/icons8-ps2-50.png': game.platforms[i].platform.name === "Nintendo Switch" ?
                            '/icons/icons8-nintendo-switch-50.png': game.platforms[i].platform.name === "GameCube" ?
                            '/icons/icons8-the-nintendo-gamecube-24.png': game.platforms[i].platform.name === "Android" ?
                            '/icons/icons8-android-os-24.png': game.platforms[i].platform.name === "iOS" ?
                            '/icons/icons8-ios-logo-48.png': game.platforms[i].platform.name === "PlayStation 4" ?
                            '/icons/icons8-ps4-50.png': game.platforms[i].platform.name === "PlayStation 5" ?
                            '/icons/icons8-ps5-48.png' : game.platforms[i].platform.name === "Xbox" ?
                            '/icons/icons8-xbox-30.png' : game.platforms[i].platform.name === "Xbox 360" ?
                            '/icons/icons8-xbox-30.png' : game.platforms[i].platform.name === "Xbox One" ?
                            '/icons/icons8-xbox-30.png' : game.platforms[i].platform.name === "Xbox Series S/X" ?
                            '/icons/icons8-xbox-30.png' : game.platforms[i].platform.name === "Linux" ?
                            '/icons/icons8-linux-30.png' :

                            
                            
                            
                            '/icons/icons8-game-controller-30.png'}></img>);
                            
                            
                            
                            

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



