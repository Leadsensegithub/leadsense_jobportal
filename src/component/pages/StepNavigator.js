import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import WorkStatus from "./WorkStatus";
import UgForm from "./UgForm";
import PgForm from "./PgForm";
import SslcForm from "./SslcForm";
import HscForm from "./HscForm";
import ExplainPage from "./ExplainPage";
import PersonalServey from "./PersonalServey";
import EmploymentServey from "./EmploymentServey";
import VedioUploadPage from "./VedioUploadPage";

const steps = [
  "Work Status",
  "UG Details",
  "PG Details",
  "SSLC Details",
  "HSC Details",
  "Explain Yourself",
  "Personal Survey",
  "Employment Survey",
  "Video Upload"
];

const StepNavigator = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);
  const handleReset = () => {
    setActiveStep(0);
    navigate("/otp"); // Reset to OTP if needed
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <WorkStatus onNext={handleNext} />;
      case 1:
        return <UgForm onNext={handleNext} />;
      case 2:
        return <PgForm onNext={handleNext} />;
      case 3:
        return <SslcForm onNext={handleNext} />;
      case 4:
        return <HscForm onNext={handleNext} />;
      case 5:
        return <ExplainPage onNext={handleNext} />;
      case 6:
        return <PersonalServey onNext={handleNext} />;
      case 7:
        return <EmploymentServey onNext={handleNext} />;
      case 8:
        return <VedioUploadPage />;
      default:
        return "Unknown Step";
    }
  };

  return (
    <Box sx={{ width: "70%", margin: "auto", mt: 5 }}>
      {/* Stepper */}
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step Content */}
      <Box sx={{ my: 5 }}>{renderStepContent(activeStep)}</Box>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep < steps.length - 1 && (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default StepNavigator;
