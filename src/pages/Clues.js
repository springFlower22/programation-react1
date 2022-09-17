import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Clue from '../components/Clue';
import Footer from '../components/Footer';

const Clues = () => {
    const [clu, setClu] = useState([]);

    useEffect(() => {
        axios.get("http://jservice.io/api/random?count=7").then((res) => setClu(res.data));
    }, []);

    return (
        <div className='clues'>
            <Logo />
            <Navigation />
            <h3>Below the list of 7 radom clues</h3>
            <br></br>
            {<ul className='clues-list'>
                {clu.map((clue) => (
                    <Clue clue={clue} key={clue.id}/>
                ))}
                </ul>}
            <Footer />
        </div>
    )
}

export default Clues;