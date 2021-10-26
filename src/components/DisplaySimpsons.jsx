import React from 'react';

function DisplaySimpsons({ simpsons }) {
    return (
        <div className='DisplayEmployee'>
            <img src={simpsons.image} alt={simpsons}/>
            <ul>
                <li>
                    Quote: {simpsons.quote};
                </li>
                <li>
                    character: {simpsons.character};
                </li>
                <li>
                    characterDirection: {simpsons.characterDirection};
                </li>
            </ul>
        </div>
    );
}

export default DisplaySimpsons;