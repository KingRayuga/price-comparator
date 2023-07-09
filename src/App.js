import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const Applayout = () => {
    return (
        <div className="app">
            <div className="min-h-screen bg-cover bg-center bg-[url('https://cdn.dribbble.com/users/9453/screenshots/4273970/polybelt.gif')]">
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