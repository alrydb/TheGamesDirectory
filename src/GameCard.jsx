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
                <span>{game.score}</span>
                <h3>{game.name}</h3>
            </div>   

        </div>
    </div>

    );

}

export default GameCard