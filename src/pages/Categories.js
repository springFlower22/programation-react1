import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Categorie from '../components/Categorie';
import Footer from '../components/Footer';

const Categories = () => {
    const [categ, setCateg] = useState([]);

    useEffect(() => {
        axios.get("https://jservice.io/api/categories?count=17").then((res) => setCateg(res.data));
    }, []);


    return (
        <div className='categories'>
            <Logo />
            <Navigation />
            <h3>Below the list of categories</h3>
            <br></br>
            {<ul className='categories-list'>
                {categ.map((categorie) => (
                    <Categorie categorie={categorie} key={categorie.id} />
                ))}
                </ul>}
            <Footer />
        </div>
    )
}

export default Categories;