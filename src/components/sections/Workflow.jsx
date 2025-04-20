import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./stars.css"; // Create this CSS file

function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(-1);

  const steps = ["Booking Confirmed", "Work Started", "Progress Update", "Completed"];

  const stepIcons = ["📅", "🛠️", "⏳", "✅"];

  const stepImages = [
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  ];

  const stepDescriptions = [
    "Your booking with our artisan is confirmed! We've sent you the details via email.",
    "Our skilled artisan has begun working on your project with care and precision.",
    "Your project is 75% complete. We're adding the finishing artisan touches.",
    "Your project is complete! We hope you love the handcrafted results.",
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
    <div className="relative w-full min-h-screen overflow-hidden font-[Poppins] text-center bg-gradient-to-r from-blue-900 to-blue-800  text-white">
      <div className="stars" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto p-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">Artisan Workflow Tracker</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Follow your artisan's journey as they create your masterpiece
        </p>

        <div className="w-full mt-12 px-4">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index} onClick={() => handleStepClick(index)} className="cursor-pointer">
                <StepLabel
                  sx={{
                    "& .MuiStepIcon-root": {
                      color: activeStep >= index ? "#FACC15" : "#4B5563",
                      "&.Mui-completed": {
                        color: "#FACC15",
                      },
                      "&.Mui-active": {
                        color: "#FACC15",
                      },
                    },
                    "& .MuiStepConnector-line": {
                      borderColor: activeStep >= index ? "#FACC15" : "#4B5563",
                      borderTopWidth: 3,
                    },
                    "& .MuiTypography-root": {
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      color: activeStep >= index ? "#FACC15" : "#9CA3AF",
                    },
                  }}
                >
                  <div className="flex flex-col items-center text-white">
                    <span className="text-2xl mb-1">{stepIcons[index]}</span>
                    {label}
                  </div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <motion.div
          className="relative overflow-hidden w-full max-w-2xl mx-auto mt-12 bg-white shadow-xl rounded-2xl p-6 border border-amber-500"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            key={activeStep}
            initial={{ x: direction * 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={stepImages[activeStep]}
              alt={`Step ${activeStep + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4 text-left rounded-b-lg">
              <h2 className="text-2xl font-bold text-amber-400">{steps[activeStep]}</h2>
              <p className="text-gray-200">{stepDescriptions[activeStep]}</p>
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
                backgroundColor: "white",
                color: "blue-400",
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                border: "2px solid #FACC15",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "white",
                },
                "&:disabled": {
                  backgroundColor: "white",
                  color: "blue-200",
                  border: "none",
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
                backgroundColor: "white",
                color: "blue-400",
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                border: "2px solid #FACC15",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "white",
                  color: "blue-400",
                },
                "&:disabled": {
                  backgroundColor: "white",
                  color: "blue-200",
                  border: "none",
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
