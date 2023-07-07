import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Applayout = () => {
    return (
        <div className="app">
            <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-[url('https://assets0.ello.co/uploads/asset/attachment/2258444/ello-optimized-c13af33c.gif')]">
                <Header />
            </div>
            <Footer/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);