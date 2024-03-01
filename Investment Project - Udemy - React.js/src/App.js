import Header from './components/Header/Header';
import StatsTable from './components/StatsTable/StatsTable';
import Form from './components/Form/Form';
import { useState } from 'react';


function App() {

  const [stats, setStats] = useState([])

  const calculateHandler = (userInput) => {

    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlyContribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savings: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: yearlyInterest + yearlyInterest * i,
        totalInvestements: yearlyContribution + yearlyContribution * i,
      });

    }

    setStats(yearlyData)

  };

  // savings : 100$ , yearltcontribution : 5$ , expectedreturn : 3% => 0.03, duration : 3 years
  // yearly interest : 100 * 0.03 = 3$
  // savings = 100$ + 3$ + 5$ = 108$
  // year = 1 , savings = 108$, interest = 3$ , totalinterest = 3$ , investedCap = 5$


  // year 2 
  // yearly interest : 108 * 0.03  = 3.24
  // savings = 108$ + 3.24$ + 5$ = 116.24 $
  // year = 2 , savings = 116.24$, interest = 3$ , totalinterest = 6.24$ , investedCap = 10$


  return (
    <div>

      <Header />

      <Form onSubmit={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <StatsTable stats={stats} />

    </div>
  );
}

export default App;
