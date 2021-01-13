import React, { useEffect } from 'react';

import { 
	Grid, 
	Paper,
	TextField,
	Typography,
	Button,
	Box,
} from '@material-ui/core';

import { useFormContext } from "react-hook-form";

// Components
import MarkDown from './MarkDown';
import DropAreaGalery from './DropAreaGalery';
import { RenderSwitchFormHook } from '../../../components/RendersGlobals';
import LoadingComponent from '../../../components/LoadingComponent';

// Redux
import { useSelector } from 'react-redux';

export default function MakePost({ progressUpload }) {
	
	const { data, loading } = useSelector((state) => ({
		data: state.forms.crearPost.data,
		loading: state.forms.crearPost.loading,
	}));
	
	const { register, errors, control, watch, setValue } = useFormContext();
	
	useEffect(() => {
		data.portada && setValue('portada', data.portada);
		// eslint-disable-next-line
	},[]);
	
	return (
		<Paper className='paper--padding' elevation={0}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant='h6' align='center'>Crear publicación</Typography>
				</Grid>
				<Grid container item xs={12}>
					<TextField 
						inputRef={register({
							required: { value: true, message: '* Campo requerido' },
							minLength: { value: 6, message: 'Error: Demaciado corto' },
							maxLength: { value: 100, message: 'Error: Demaciado largo' },
						})}
						disabled={loading}
						name='title'
						error={Boolean(errors.title)}
						helperText={errors?.title?.message ? errors.title.message : 'Ingrese un título para su publicación'}
						style={{maxWidth: 450}} 
						label='Título'
						size='small' 
						defaultValue={data.title || ''}
						fullWidth
					/>
				</Grid>
				<Grid container item xs={12}>
					<MarkDown
						defaultValue={data.markdown || ''}
						disabled={loading}
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h6' className="text__bold--big text__opacity--semi">
						Opcionales
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<input
						name='portada'
						accept="image/*"
						ref={register}
						style={{display: 'none'}}
						id="button-file-portada"
						type="file"
					/>
					<label htmlFor="button-file-portada">
						<Button color='primary' disabled={loading} variant='contained' component='span' disableElevation>
							Cargar portada
						</Button>
					</label>
					{watch('portada',[]).length ? (
						<Box ml={2} fontSize='body1.fontSize' component='span'>Portada cargada</Box>	
					) : null}
				</Grid>
				<Grid item xs={12}>
					<RenderSwitchFormHook 
						control={control}
						defaultValue={data.only_users || false}
						disabled={loading}
						name='only_users'
						label='Disponible solo para usuarios'
						color='secondary'
					/>
				</Grid>
				<Grid item xs={12}>
					<DropAreaGalery label='Galería de imágenes, arrastre o de click para cargar imágenes' defaultValue={data.galery || []} />
				</Grid>
				<Grid container justify='flex-end' item xs={12}>
					<LoadingComponent 
						loading={loading} 
						progressLoading 
						progress={progressUpload}
						color="inherit"
					>
						<Button type='submit' color='primary' variant='contained' disableElevation>
							Crear
						</Button>
					</LoadingComponent>
				</Grid>
			</Grid>
		</Paper>
	)
}