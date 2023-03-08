import React from 'react';
import Invoice from "./component/Invoice.jsx";
import "./App.scss";

const App = () => {
    return (
        <div className="container my-3">
            <h1 className="text-center">App</h1>
            <Invoice/>
        </div>
    );
};

export default App;