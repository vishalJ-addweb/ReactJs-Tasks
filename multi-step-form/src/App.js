import AllSteps from "./components/AllSteps";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
// import { Form } from 'antd';

function App(props) {

  const steps = [
    {
      step: 1,
      title: "Personal Details",
      content: <Step1 />
    },
    {
      step: 2,
      title: "Address",
      content: <Step2 />
    },
    {
      step: 3,
      title: "Health And Fitness Regime",
      content: <Step3 />
    }
  ]
  return (
    <div className="container">
      <br />

      <AllSteps steps={steps} />

      <br />
    </div>
  );
}

export default App;
