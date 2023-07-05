import React from "react";
import ReactDOM from "react-dom/client";

const Applayout = () => {
    return (
        <div className="app">
            <h1>
                Initial phase!!
            </h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);