import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    userInput.preventDefault()

    const yearlyData = []; // per-year results

    let currentSavings = parseFloat(userInput.target['current-savings'].value); // feel free to change the shape of this input object!
    const yearlyContribution = parseFloat(userInput.target['yearly-contribution'].value); // as mentioned: feel free to change the shape...
    const expectedReturn = parseFloat(userInput.target['expected-return'].value) / 100;
    const duration = parseFloat(userInput.target['duration'].value);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }


    // do something with yearlyData ...
  };

  return (
    <div>
      <Header></Header>

      <Form onSubmit={calculateHandler} ></Form>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Table></Table>

    </div>
  );
}

export default App;
