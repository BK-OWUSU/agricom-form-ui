export const getProgressBarColor = (step, currentStep) => {
  if (step < currentStep) return "bg-green-500"
  if (step === currentStep) return "bg-green-300"
  return "bg-gray-200"
}

