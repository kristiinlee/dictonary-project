import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("hello");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "MKGbi3dKsKe36jZhkhYfYABZ27xMalcbPHBpvtlIQxJIGXSwesRi9j34";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        axios.get(pexelsApiUrl, {headers: { Authorization: `${pexelsApiKey}` },}).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
          return (
        <div className="Dictionary">
            <section>
                <h1>What are you interested in exploring?</h1>
                <form onSubmit={handleSubmit}> 
                    <input type="search" autoFocus={true} onChange={handleKeywordChange} />
                </form>
                <div className="hint">
                    suggested words: sunset, wine, book, plant...
                </div>
                <Results results={results} />
                <Photos photos={photos} />
            </section>
        </div> 
    );
    } else {
        load();
        return "Loading";
    }

  

}