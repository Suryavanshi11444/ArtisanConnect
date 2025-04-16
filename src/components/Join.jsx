import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { motion } from "framer-motion";

function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(-1);

  const steps = ["Booking Feature", "Work Started", "Approximate Done", "Completed"];

  const stepImages = [
    "https://source.unsplash.com/800x400/?booking,technology",
    "https://source.unsplash.com/800x400/?wifi,troubleshooting",
    "https://source.unsplash.com/800x400/?progress,technology",
    "https://source.unsplash.com/800x400/?success,connected",
  ];

  const stepDescriptions = [
    "You have successfully booked a WiFi service. Our team will get in touch with you shortly to assist further.",
    "The troubleshooting process has started. Our system is diagnosing the potential issues with your WiFi.",
    "The issue has been 75% resolved. Some final optimizations are being made to ensure smooth connectivity.",
    "Your WiFi is now fully operational! Enjoy seamless internet without any interruptions.",
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setDirection(-1);
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setDirection(1);
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleStepClick = (index) => {
    setDirection(index > activeStep ? -1 : 1);
    setActiveStep(index);
  };

  return (
    <div className="bg-white p-8 w-full min-h-screen font-[Poppins] text-center mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">Track Your Work</h1>
      <p className="text-gray-600 text-lg max-w-xl mx-auto">
        Stay updated with your progress step by step. Monitor the status of your task in real-time.
      </p>

      <div className="w-full mt-8">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index} onClick={() => handleStepClick(index)} className="cursor-pointer">
              <StepLabel
                sx={{
                  "& .MuiStepIcon-root": {
                    color: activeStep >= index ? "#000000" : "#fcb800",
                  },
                  "& .MuiStepConnector-line": {
                    borderColor: activeStep >= index ? "#000000" : "#fcb800",
                  },
                  "& .MuiStepIcon-text": {
                    fill: "#ffffff",
                  },
                  "& .MuiTypography-root": {
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    color: activeStep >= index ? "#000000" : "#fcb800",
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <div className="relative overflow-hidden w-full max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-4">
        <motion.img
          key={activeStep}
          src={stepImages[activeStep]}
          alt={`Step ${activeStep + 1}`}
          initial={{ x: direction * 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-h-52 object-cover rounded-md"
        />
      </div>

      <h2 className="text-2xl font-semibold text-black mt-6">{steps[activeStep]}</h2>
      <p className="text-gray-600 text-lg max-w-lg mx-auto mt-2">{stepDescriptions[activeStep]}</p>

      <div className="flex justify-between items-center gap-4 mt-8 max-w-lg mx-auto">
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{
            fontFamily: "Poppins",
            backgroundColor: "black",
            color: "white",
            px: 3,
            py: 1,
            borderRadius: "8px",
            border: "2px solid black",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
              border: "2px solid black",
            },
            "&:disabled": {
              backgroundColor: "black",
              color: "white",
              opacity: 0.5,
            },
          }}
        >
          Previous
        </Button>

        <Button
          disabled={activeStep === steps.length - 1}
          onClick={handleNext}
          sx={{
            fontFamily: "Poppins",
            backgroundColor: "#fcb800",
            color: "black",
            px: 3,
            py: 1,
            borderRadius: "8px",
            border: "2px solid #fcb800",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "white",
              color: "#fcb800",
              border: "2px solid #fcb800",
            },
            "&:disabled": {
              backgroundColor: "#fcb800",
              color: "black",
              opacity: 0.5,
            },
          }}
        >
          Move Forward
        </Button>
      </div>
    </div>
  );
}

export default Workflow;
