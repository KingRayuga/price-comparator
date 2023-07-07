import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const Applayout = () => {
    return (
        <div className="app">
            <div className="min-h-screen bg-cover bg-center bg-[url('https://assets0.ello.co/uploads/asset/attachment/2258444/ello-optimized-c13af33c.gif')]">
            <div className="flex items-center justify-center">
                <Header />
            </div>
            <div className="flex justify-center">
                <Body />
            </div>
            </div>
            <Footer/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);