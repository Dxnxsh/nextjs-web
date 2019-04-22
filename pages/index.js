import React from 'react';
import Header from './Header';
import Main from "./main";
import SeoHead from "../components/seo"

function App() {

    return (
        <div id="top">
            <SeoHead />
            <Header />
            <Main />
        </div>
    );
}

export default App;