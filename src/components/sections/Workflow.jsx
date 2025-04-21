import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import "./stars.css";

function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(-1);

  const steps = ["Booking Confirmed", "Work Started", "Progress Update", "Completed"];
  const stepIcons = ["📅", "🛠", "⏳", "✅"];
  const stepImages = [
    "https://images.unsplash.com/photo-1597047084897-51e81819a499?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583744946564-b52d01e2da64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    <div className="relative w-full min-h-screen overflow-hidden font-[Poppins] text-center bg-orange-100 text-black">
      <div className="stars" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-5" />

      <motion.div
        className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-[#ff9933]/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-20 w-60 h-60 rounded-full bg-[#FF9933]/10 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto p-8"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF9933] mb-4">
            <span className="inline-block transform hover:rotate-1 transition-transform">
              Artisan Workflow Tracker
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Follow your artisan's journey as they create your masterpiece
          </p>
        </motion.div>

        <div className="w-full mt-12 px-4">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index} onClick={() => handleStepClick(index)} className="cursor-pointer">
                <StepLabel
                  sx={{
                    "& .MuiStepIcon-root": {
                      color: activeStep >= index ? "#FF9933" : "#4B5563",
                      "&.Mui-completed": {
                        color: "#FF9933",
                      },
                      "&.Mui-active": {
                        color: "#FF9933",
                      },
                    },
                    "& .MuiStepConnector-line": {
                      borderColor: activeStep >= index ? "#FF9933" : "#4B5563",
                      borderTopWidth: 3,
                    },
                    "& .MuiTypography-root": {
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      color: activeStep >= index ? "#FF9933" : "#9CA3AF",
                    },
                  }}
                >
                  <motion.div className="flex flex-col items-center" whileHover={{ y: -5 }}>
                    <motion.span
                      className="text-2xl mb-1"
                      animate={{
                        scale: activeStep === index ? [1, 1.2, 1] : 1,
                        rotate: activeStep === index ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {stepIcons[index]}
                    </motion.span>
                    <span>{label}</span>
                  </motion.div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <motion.div
          className="relative overflow-hidden w-full max-w-2xl mx-auto mt-12 bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-[#FF9933]/30"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(255, 153, 51, 0.2)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ x: direction * 300, opacity: 0, rotateY: direction * 30 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              exit={{ x: -direction * 300, opacity: 0, rotateY: -direction * 30 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div className="relative overflow-hidden rounded-lg" whileHover={{ scale: 1.01 }}>
                <img
                  src={stepImages[activeStep]}
                  alt={`Step ${activeStep + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#ff9933] to-transparent p-6 text-left rounded-b-lg">
                  <h2 className="text-2xl font-bold text-[#FF9933]">{steps[activeStep]}</h2>
                  <p className="text-gray-200">{stepDescriptions[activeStep]}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* 3D Buttons */}
        <div className="flex justify-center items-center gap-6 mt-12 max-w-lg mx-auto">
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                fontFamily: "Poppins",
                backgroundColor: activeStep === 0 ? "#ffffff" : "#FF9933",
                color: activeStep === 0 ? "#64748b" : "white",
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                border: activeStep === 0 ? "1px solid #cbd5e1" : "2px solid #FF9933",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: activeStep === 0 ? "#ffffff" : "#E07F1E",
                },
                transition: "all 0.3s ease",
              }}
            >
              Previous Step
            </Button>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
            <Button
              disabled={activeStep === steps.length - 1}
              onClick={handleNext}
              sx={{
                fontFamily: "Poppins",
                backgroundColor: activeStep === steps.length - 1 ? "#ffffff" : "#FF9933",
                color: activeStep === steps.length - 1 ? "#64748b" : "white",
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                border: activeStep === steps.length - 1 ? "1px solid #cbd5e1" : "2px solid #FF9933",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: activeStep === steps.length - 1 ? "#ffffff" : "#E07F1E",
                },
                transition: "all 0.3s ease",
              }}
            >
              Next Step
            </Button>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <div className="relative h-2 bg-white rounded-full max-w-md mx-auto overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#FF9933] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(activeStep + 1) * 25}% `}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#FF9933]/50 rounded-full"
              animate={{
                width: ["0%", "100%", "0%"],
                left: ["0%", "100%", "0%"],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <p className="text-[#FF9933] mt-2 font-medium">Progress: {(activeStep + 1) * 25}%</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Workflow;