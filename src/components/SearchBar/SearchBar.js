import React from 'react';
import axios from 'axios';

function SearchBar(props) {
    const searchForTitle = async(title="Lost", media="movie", method="search") => {
        const response = await axios.get(`https://api.themoviedb.org/3/${method}/${media}?api_key=66b22cb2598318b06f69e25cb751c2ad&query=${title}`)
        console.log(response.data.results);
    }

    const searchForUPC = async(upcNumber='786936858136') => {
        const response = await axios({
            method: 'get',
            url: 'https://api.upcdatabase.org/product/786936858136?apikey=2F1653F46E6223E30135DB3D80B8C22D',
            headers: { 
                "Access-Control-Allow-Origin": "*",
                'x-apikey': '2F1653F46E6223E30135DB3D80B8C22D',
                'Cookie': 'upcdatabaseorg=lkgb06nvf39jequ927ki6nkf9j',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
        console.log(response.data);
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (e.target[props.name].value) {
                    const functionToRun = props.name === "titleSearch" ? searchForTitle : searchForUPC
                    functionToRun(e.target[props.name].value, props.value)
                }
            }}>
                <label htmlFor={props.name}>{props.title}</label>
                <input name={props.name} id={props.name} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;