import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Button, Steps } from 'antd';
// import Step1 from './Step1';
const { Step } = Steps;

const AllSteps = (props) => {

    const [current, setCurrent] = useState(0);
    // const [step, setStep] = useState(1)

    const next = () => {
        const nextStep = current + 1;
        setCurrent(nextStep);
        // setStep((prevVal)=>prevVal+1)
    }

    const prev = () => {
        const prevStep = current - 1;
        setCurrent(prevStep);
        // setStep((prevVal)=>prevVal-1)
    }

    // switch(step)
    // {
    //     case 1:
    //     return (<Step1 nextStep={next} onChange={} />);
    // }

    return (
        <div>
            <br />



            <Steps current={current} onChange={(curr)=>setCurrent(curr)}>
                {props.steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <br />
            <div className="steps-content">{props.steps[current].content}</div>


            <div className="steps-action">
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {current === props.steps.length - 1 && (
                    <Button type="primary" htmlType="submit">
                        Done
                    </Button>
                )}
                {current < props.steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
            </div>


        </div>
    )
}

export default AllSteps
