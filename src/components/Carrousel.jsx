import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, MobileStepper, Paper, Typography, Button, Grid } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Carrousel = ({ imgList }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = imgList.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: '85vw', flexGrow: 1 }}>
            <Box display="flex" justifyContent="center" mb={2} /* bgcolor='blue' */>

                <Typography color="primary" align="center" variant='h5' >{imgList[activeStep].label}</Typography>
            </Box>
            <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents >
                {imgList.map((step, index) => (
                    <Grid container justifyContent="center" >
                        <div key={step.label}>
                            <Grid item xs={12}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <>
                                        <Box display='flex' justifyContent="center"
                                            component="img"
                                            sx={{
                                                height: '60vh',
                                                display: 'block',
                                                maxWidth: '100%',
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    </>
                                ) : null}
                            </Grid>
                        </div>
                    </Grid>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1} >
                        Next
                        {theme.direction === 'rtl' ? (<KeyboardArrowLeft />) : (<KeyboardArrowRight />)}
                    </Button>
                }
                backButton={
                    <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (<KeyboardArrowRight />) : (<KeyboardArrowLeft />)}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

