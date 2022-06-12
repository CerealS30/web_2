import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import Header from '../partials/Header';

function Recomendation() {

  const nameOfMovies = gql`
  {
    movies {
      id
      title
    }
  }
  `
  ;

  const movies = [];
  let myJSON;
  var jsonData;
  const [ans, setAns] = useState();

  const [check, setCheck] = useState(false);

  const reqApi = async () => {
    const api = await fetch("http://34.168.117.185:8000",
    {
      method: "POST",
      mode: 'no-cors',
      headers: {
        "Content-type": "application/json"
      },
      body: myJSON
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var movies = JSON.stringify(data);
      jsonData = JSON.parse(movies);
      setAns(jsonData);
      setCheck(prevCheck => !prevCheck);
    })

  }

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    
    body: JSON.stringify([{title: "Heat", rating: 5}, {title: "Toy Story", rating: 4.5}])
  };

  function handleClick(event) { 
    ans.map((element) => (
      console.log(element.title)
    ))
    console.log(check);
  } 
  

  function appendMovie(event) { 
    
    var e = document.getElementById('movie');
    var i = document.getElementById('rating');
    var m = e.value;
    var r = i.value;
    const myArray = m.split("(").map(element => element.trim());
    const mov = {title: myArray[0], rating: r};
    movies.push(mov);
    myJSON = JSON.stringify(movies);
    console.log(myJSON);
  } 

  const {data} = useQuery(nameOfMovies);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Escribe las peliculas que mas te gusten</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Nombre </label>
                      <select className="flex flex-wrap mt-5" id='movie'>
                        {data && (
                          <>
                         {data.movies.map((link) => (
                          <option key={link.id} value={link.title}>{link.title}</option>
                          ))}
                           </>
                         )}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email </label>
                      <select id='rating'>
                          <option value={1}>1</option>
                          <option value={1.5}>1.5</option>
                          <option value={2}>2</option>
                          <option value={2.5}>2.5</option>
                          <option value={3}>3</option>
                          <option value={3.5}>3.5</option>
                          <option value={4}>4</option>
                          <option value={4.5}>4.5</option>
                          <option value={5}>5</option>
                      </select>
                    </div>
                  </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                        <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" onClick={appendMovie}>Add Movie</button>
                        </div>
                        <br></br>
                        <div className="w-full px-3">
                        <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" onClick={reqApi}>Print Movie</button>
                        </div>
                        <div className="w-full px-3">
                        <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" onClick={handleClick}>Console log Answer</button>
                        
                        </div>
                        
                       
                    </div>                
               
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Tu lista de peliculas aparecera aqui</h1>
                <br></br>
               <h1> 
                {ans && (
                            <>
                             {ans.map((element) => (
                                
                                <h2 key={element.movieId}>{element.title}</h2>
                             ))}
                            </>
                  )}
                  </h1>
          </div>

          
        </section>

        

      </main>

    </div>
  );
}

export default Recomendation;