import React from "react";
import Header from "./Header";
import SearchMenu from "./Searchmenu";
import Headerimage from "./Headerimage"
import Callnow from "./Callnow";
import Features from "./Features";
import Ourproducts from "./Ourdogs";
import Dreamdog from "./Dreamdog";
import Oursales from "./Oursales";
import Freehealthcheck from "./Freehealthcheck";
import Footer from "./Footer";


function App() {
    return (
        <div className="Parent-Container">
            <Header />
            <SearchMenu />
            <Headerimage />
            <Callnow />
            <Features />
            <Ourproducts />
            <Dreamdog />
            <Oursales />
            <Freehealthcheck />
            <Footer />

        </div>
    );
}

export default App;
