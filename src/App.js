import React from 'react';
import "./App.css";
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
class App extends React.Component {
    
    render() {
        return (
            <div className="App">
                <Header />
                <ImageGrid />
            </div>
        )
    }
};

export default App;