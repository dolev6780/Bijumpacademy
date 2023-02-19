import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardSubTitle1,
  cardSubTitle2,
  cardSubTitle3,
  list1,
  list2,
  list3,
  skipLevel1,
  skipLevel2,
  skipLevel3,
} from "../contents/Sec5Content";
const steps = [
  {
    label: cardTitle1,
    subLable: cardSubTitle1,
    level: skipLevel1,
    description: list1,
  },
  {
    label: cardTitle2,
    subLable: cardSubTitle2,
    level: skipLevel2,
    description: list2,
  },
  {
    label: cardTitle3,
    subLable: cardSubTitle3,
    level: skipLevel3,
    description: list3,
  },
];

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400, textAlign: "right" }}>
      <Stepper dir="RTL" activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography
                sx={{ color: "white", fontSize: 24, fontWeight: 700 }}
              >
                {step.label}
              </Typography>
              <Typography sx={{ color: "pink" }}>{step.subLable}</Typography>
            </StepLabel>
            <StepContent>
              <Box sx={{ width: 80, marginRight: "auto" }}>{step.level}</Box>
              <Box>{step.description}</Box>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, color: "pink" }}
                  >
                    {index === steps.length - 1 ? "סיום" : "שלב הבא"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, color: "pink" }}
                  >
                    שלב קודם
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, backgroundColor: "grey" }}>
          <Typography sx={{ color: "white", fontWeight: 700 }}>
            לצפייה שוב בשלבים
          </Typography>
          <Button
            onClick={handleReset}
            sx={{ mt: 1, mr: 1, color: "pink", fontWeight: 700 }}
          >
            להתחלה
          </Button>
        </Paper>
      )}
    </Box>
  );
}
