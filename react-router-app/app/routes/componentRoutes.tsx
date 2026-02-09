import { Routes, Route } from "react-router";

function StepOne() { return <p>Step 1</p> }
function StepTwo() { return <p>Step 2</p> }
function StepThree() { return <p>Step 3</p> }

export default function Wizard() {
    return (
        <div>
            <h1>Some Wizard with Steps</h1>
            <Routes>
                <Route index element={<StepOne />} />
                <Route path="step-2" element={<StepTwo />} />
                <Route path="step-3" element={<StepThree />} />
            </Routes>
        </div>
    )
}