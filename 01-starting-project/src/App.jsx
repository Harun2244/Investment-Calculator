import Header from './assets/components/Header.jsx';
import UserInput from './assets/components/UserInput.jsx';
import { useState } from 'react';
import Result from './assets/components/Result.jsx';

function App() {
    const [stats, setStats] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    });

    function handleStatsChange(myField, myValue) {
        let myNum = Number(myValue);
        setStats((prev) => ({
            ...prev,
            [myField]: myNum,
        }));
    }

    return (
        <>
            <Header />
            <UserInput statsChange={handleStatsChange} statsObj={stats} />
            <Result statsObj={stats} />
        </>
    );
}

export default App;
