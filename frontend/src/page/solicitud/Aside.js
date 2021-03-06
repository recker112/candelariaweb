import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { 
	Box,
	Container,
	Grid,
	Typography, 
	Stepper,
	Step,
	StepLabel,
	StepContent,
	IconButton,
	Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Components
import GedureLogo from '../../imgs/gedure-logo-recto.svg';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import updateSteppersActive from '../../actions/updateSteppersActive';

const useStylesStepper = makeStyles((theme) => ({
	root: {
    background: theme.palette.primary.main,
		'& .MuiStepConnector-line': {
			borderColor: '#bdbdbd',
		}
  },
	active: {
		color: 'rgba(255, 255, 255, 0.87) !important',
	},
	completed: {
		color: 'white !important',
	},
	icon: {
		'& .MuiStepIcon-active': {
			color: theme.palette.secondary.main,
		},
		
		'& .MuiStepIcon-completed': {
			color: theme.palette.secondary.main,
		}
	},
	label: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
	button: {
		color: theme.palette.secondary.contrastText,
	},
}));

export function getSteps() {
  return [
		'Datos del estudiante', 
		'Datos para la solicitud',
		'Centro taller artesanal',
		'Datos del representante',
		'Datos de los padres',
	];
}

function Aside() {
	const { activeStep } = useSelector((state) => ({
		activeStep: state.settings.steppers.active,
	}));
	const dispatch = useDispatch();
	
	let history = useHistory();
	
	const steps = getSteps();
	
	const classesStepper = useStylesStepper();
	
	// DESMONTAR
	useEffect(()=>{
		return () => {
			dispatch(updateSteppersActive(0));
		}
		// eslint-disable-next-line
	},[])
	
	return (
		<Container style={{height: '100%'}}>
			<Box py={2} color='primary.contrastText' style={{height: '100%'}}>
				<Grid container direction='column' justify='space-between' style={{height: '100%'}}>
					<Grid container item>
						<Grid container alignItems='center' item xs={12}>
							<IconButton 
								className={classesStepper.button}
								onClick={()=>{
									if (history.length > 2) {
										history.goBack();
									}else {
										history.push('/');
									}
								}}
							>
								<ArrowBackIcon />
							</IconButton>
							<Box display='inline-block' ml={1} color="primary.contrastText">
								<Typography component='div' variant='h5'>
									Solicitud de cupo
								</Typography>
							</Box>
						</Grid>
						
						<Grid item xs={12}>
							<Stepper activeStep={activeStep} orientation="vertical" classes={{
									root: classesStepper.root,
								}}
							>
								{steps.map((label) => (
									<Step key={label}>
										<StepLabel classes={{
											label: classesStepper.label,
											active: classesStepper.active,
											iconContainer: classesStepper.icon,
											completed: classesStepper.completed,
										}}>{label}</StepLabel>
										<StepContent />
									</Step>
								))}
							</Stepper>
						</Grid>
					</Grid>
					
					<Grid container justify='center' alignItems='center' item>
						<Box display='inline-block' color="primary.contrastText" mr={1}>
							<Typography component='div' variant='h6' className='text__bold--big text__opacity--semi'>
								Powered by
							</Typography>
						</Box>
						<Link style={{display: 'inherit'}} href='https://github.com/recker112/gedure'>
							<img src={GedureLogo} alt='Logo de Gedure' height={25} />
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}

export default Aside;