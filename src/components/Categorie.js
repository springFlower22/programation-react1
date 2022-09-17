import React from 'react';

const Categorie = (props) => {
    const { categorie } = props;

    return (
        <div className='categorie'>
            <li>{categorie.title}</li>
        </div>
    )
}

export default Categorie;