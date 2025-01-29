import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle,CardFooter, CardContent, CardDescription } from "@/components/ui/card"
import { getProgressBarColor } from "@/utils/progressBar"
import FarmerInfo from "./components/FarmerInfo"
import FarmLandInfo from "./components/FarmLandInfo"
import FarmYieldInfo from "./components/FarmYieldInfo"
import Swal from "sweetalert2"

function FarmingForms() {
    const formsNumbers = [1,2,3];
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({})
    //function to update form date when stepper changes
    const updateFormData = (newData)=> {
        setFormData((previousData)=> ({...previousData, ...newData}))
    }

    //Function to handle next
    const handleNext = () => {
        if (step < 3) setStep(step + 1)
    }
    //Function to handle previous
    const handlePrevious = () => {
        if (step > 1) setStep(step - 1)
    }
    //Function to handle submit
    const handleSubmit = () => {
        console.log("Form data here")
        console.log(formData)
        Swal.fire({
            title: 'Registration successful',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#22C55E',
          });
        //Resting form data
        setFormData({});
        setStep(1);
    }
//bg-gray-100 h-screen m-5 flex flex-col gap-4 p-4
  return (
    <Card className="w-full max-w-4xl mx-auto mt-10 bg-white ">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-700">Farmer Information</CardTitle>
          <CardDescription>Please fill out the following information about you farm</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="mb-6 flex justify-between">
                {formsNumbers.map((s)=> (
                    <div key={s} className="w-1/3 px-2">
                        <div className={`h-2 rounded-full ${getProgressBarColor(s, step)}`}></div>
                        <p className={`text-center mt-2 ${s === step? 'font-semibold' : ""}`}>
                            {s === 1 ? "Farmer Information"
                            : s === 2 ? "Farm Information"
                            :"Yield Information"}
                        </p>
                    </div>
                ))}
            </div>
            {step === 1 && <FarmerInfo updateFormData={updateFormData}/>}
            {step === 2 && <FarmLandInfo updateFormData={updateFormData}/>}
            {step === 3 && <FarmYieldInfo updateFormData={updateFormData}/>}
        </CardContent>
        <CardFooter className ="flex justify-between">
            <Button onClick={handlePrevious} disabled = {step === 1} variant="outline">Previous</Button>
            {step < 3 ? <Button onClick={handleNext}>Next</Button>: <Button onClick={handleSubmit}>Submit</Button>}
        </CardFooter>
    </Card>
  )
}

export default FarmingForms