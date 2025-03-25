import React, { useState } from "react";
import NavBar from "./functional/NavBar.jsx";
import Message from "./functional/Message.jsx";
import "./resources/styles/App.css";
import SearchBar from "./functional/SearchBar.jsx";

function App() {
    const [selectedSongs, setSelectedSongs] = useState({});
    const [options, setOptions] = useState({});
    const [search, setSearch] = useState("");

    return (
        <section>
            <NavBar />
            <Message />
            <SearchBar/>
        </section>
    );
}

export default App;