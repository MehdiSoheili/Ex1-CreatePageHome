import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [result, sethome] = useState<Array<string>>();

    useEffect(() => {
        homeData();
    }, []);

    const contents = result?.map(x => x);
    return (
        <div>
            <h1 id="tableLabel">{contents}</h1>
        </div>
    );

    async function homeData() {
        console.log("homeData");
        const response = await fetch('/home'); 
        const data = await response.json();
            sethome(data);
    }
}

export default App;