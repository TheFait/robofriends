import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5'>
            <img src={`https://robohash.org/${id}.png?set=set4&size=200x200`} alt='kitty'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;


/* You can destructure from within the parameters field */
/* const Card = ({id,name,email}) => { */