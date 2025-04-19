import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { motion } from "framer-motion";

function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(-1);

  const steps = ["Booking Confirmed", "Work Started", "Progress Update", "Completed"];
  
  const stepIcons = [
    "📅", // Calendar for booking
    "🛠️",  // Tools for work started
    "⏳",  // Hourglass for progress
    "✅"   // Checkmark for completed
  ];

  const stepImages = [
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Hands working
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Artisan tools
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Team working
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" // Handshake
  ];

  const stepDescriptions = [
    "Your booking with our artisan is confirmed! We've sent you the details via email.",
    "Our skilled artisan has begun working on your project with care and precision.",
    "Your project is 75% complete. We're adding the finishing artisan touches.",
    "Your project is complete! We hope you love the handcrafted results."
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
    <div className="bg-white p-8 w-full min-h-screen font-[Poppins] text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Artisan Workflow Tracker</h1>
        <p className="text-blue-800 text-lg max-w-xl mx-auto">
          Follow your artisan's journey as they create your masterpiece
        </p>

        <div className="w-full mt-12 px-4">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index} onClick={() => handleStepClick(index)} className="cursor-pointer">
                <StepLabel
                  sx={{
                    "& .MuiStepIcon-root": {
                      color: activeStep >= index ? "#FCB800" : "#E5E7EB",
                      "&.Mui-completed": {
                        color: "#FCB800",
                      },
                      "&.Mui-active": {
                        color: "#FCB800",
                      },
                    },
                    "& .MuiStepConnector-line": {
                      borderColor: activeStep >= index ? "#FCB800" : "#E5E7EB",
                      borderTopWidth: 3,
                    },
                    "& .MuiStepIcon-text": {
                      fill: "#1E3A8A",
                      fontWeight: "bold",
                    },
                    "& .MuiTypography-root": {
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      color: activeStep >= index ? "#1E3A8A" : "#6B7280",
                    },
                  }}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-1">{stepIcons[index]}</span>
                    {label}
                  </div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <motion.div 
          className="relative overflow-hidden w-full max-w-2xl mx-auto mt-12 bg-white shadow-xl rounded-2xl p-6 border border-blue-100"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            key={activeStep}
            initial={{ x: direction * 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src={stepImages[activeStep]}
              alt={`Step ${activeStep + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-4 text-left rounded-b-lg">
              <h2 className="text-2xl font-bold text-white">{steps[activeStep]}</h2>
              <p className="text-blue-100">{stepDescriptions[activeStep]}</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-center items-center gap-6 mt-12 max-w-lg mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                fontFamily: "Poppins",
                backgroundColor: "#1E3A8A",
                color: "white",
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                border: "2px solid #1E3A8A",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#1E3A8A",
                },
                "&:disabled": {
                  backgroundColor: "#E5E7EB",
                  color: "#9CA3AF",
                  border: "none"
                },
              }}
            >
              Previous Step
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              disabled={activeStep === steps.length - 1}
              onClick={handleNext}
              sx={{
                fontFamily: "Poppins",
                backgroundColor: "#FCB800",
                color: "#1E3A8A",
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                border: "2px solid #FCB800",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#FCB800",
                  border: "2px solid #FCB800",
                },
                "&:disabled": {
                  backgroundColor: "#E5E7EB",
                  color: "#9CA3AF",
                  border: "none"
                },
              }}
            >
              Next Step
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Workflow;