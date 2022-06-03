//import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';
export const ResultContextProvider=({children})=>{
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (url) => {
        setLoading(true);
    
        const res = await fetch(`${baseUrl}${url}`, {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': '43edf27481msh8e371d5a621e16ap15f7edjsn2f969b2692e9',
          },
        });
    
        const data = await res.json();
        setResults(data);
        setLoading(false);
      };
    
      return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
          {children}
        </ResultContext.Provider>
      );
    };
export const useResultContext = () => useContext(ResultContext);