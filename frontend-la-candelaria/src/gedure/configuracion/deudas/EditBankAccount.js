import React from 'react';

import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Grid,
	MenuItem,
	Button,
} from '@material-ui/core';

import { useForm } from "react-hook-form";

import useFetch from '../../../hooks/useFetch';

// Components
import {
	InputHook,
	InputMaskHook,
	SelectHook,
	SwitchHook,
} from '@form-inputs'
import AnimationDialog from '../../../components/AnimationDialog';
import LoadingComponent from '../../../components/LoadingComponent';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import updateDialogs from '../../../actions/updateDialogs';

export default function EditBankAccount({ tableRef }) {
	const { open, loading, data } = useSelector((state) => ({
		open: state.dialogs.editBankAccount.open,
		loading: state.dialogs.editBankAccount.loading,
		data: state.dialogs.editBankAccount.data,
	}));
	const dispatch = useDispatch();
	
	const { control, handleSubmit, watch, setError } = useForm({
		mode: 'onTouched',
		shouldUnregister: true,
	});
	const { fetchData } = useFetch(setError);
	
	const handleClose = () => {
		if (!loading) {
			dispatch(updateDialogs('editBankAccount', false, false));
		}
	}
	
	const onSubmit = async (submitData) => {
		dispatch(updateDialogs('editBankAccount', true, true));
		
		const prepare = {
			url: `v1/bank-account/${data.id}`,
			type: 'post',
			data: {
				...submitData,
				_method: 'PUT',
			},
			message404Server: true,
		};

		const response = await fetchData(prepare);
		
		if (response) {
			tableRef.current && tableRef.current.onQueryChange();
			dispatch(updateDialogs('editBankAccount', false));
		}else {
			dispatch(updateDialogs('editBankAccount', true, false));
		}
	}
	
	return (
		<Dialog open={open} onClose={handleClose} TransitionComponent={AnimationDialog}>
			<DialogTitle>Editar cuenta bancaria #{data.id}</DialogTitle>
			<DialogContent>
				<form autoComplete='off'>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<InputMaskHook
								control={control}
								rules={{
									required: '* Campo requerido',
									minLength: { value: 20, message: 'Error: Cuenta no válida' },
									maxLength: { value: 20, message: 'Error: Cuenta no válida' },
								}}
								name='n_account'
								label='N° de cuenta'
								fullWidth
								disabled={loading}
								defaultValue={data.n_account}
								format="#### #### #### #### ####"
							/>
						</Grid>
						<Grid item xs={12}>
							<InputMaskHook
								control={control}
								rules={{
									required: '* Campo requerido',
									minLength: { value: 9, message: 'Error: RIF no válida' },
									maxLength: { value: 9, message: 'Error: RIF no válida' },
								}}
								name='rif'
								label='RIF'
								fullWidth
								disabled={loading}
								defaultValue={data.rif}
								format="J-########-#"
							/>
						</Grid>
						{watch('important_data') === true && (
							<React.Fragment>
								<Grid item xs={12}>
									<InputHook
										control={control}
										rules={{
											required: '* Campo requerido',
											minLength: { value: 6, message: 'Error: Demaciado corto' },
											maxLength: { value: 100, message: 'Error: Demaciado largo' },
										}}
										name='name'
										label='Nombre'
										fullWidth
										disabled={loading}
										defaultValue={data.name}
									/>
								</Grid>
								<Grid item xs={12}>
									<InputHook
										control={control}
										rules={{
											required: '* Campo requerido',
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: 'Error: Correo no válido',
											},
										}}
										name='email'
										label='Correo'
										fullWidth
										disabled={loading}
										defaultValue={data.email}
									/>
								</Grid>
							</React.Fragment>
						)}
						<Grid item xs={12}>
							<SelectHook
								name='type'
								label='Tipo de cuenta'
								control={control}
								disabled={loading}
								fullWidth
								defaultValue={data.type}
							>
								<MenuItem value=''>
									<em>Ninguno</em>
								</MenuItem>
								<MenuItem value='ahorro'>
									Ahorro
								</MenuItem>
								<MenuItem value='ahorro'>
									Corriente
								</MenuItem>
							</SelectHook>
						</Grid>
						<Grid item xs={12}>
							<SelectHook
								name='code'
								label='Banco'
								control={control}
								disabled={loading}
								fullWidth
								defaultValue={data.code}
							>
								<MenuItem value=''>
									<em>Ninguno</em>
								</MenuItem>
								<MenuItem value='0012'>
									Venezuela
								</MenuItem>
								<MenuItem value='1103'>
									Banesco
								</MenuItem>
							</SelectHook>
						</Grid>
					</Grid>
				</form>
			</DialogContent>
			<DialogActions>
				<SwitchHook
					control={control}
					name='important_data'
					label="Modificar campos importantes"
					labelPlacement="start"
					color="primary"
					disabled={loading}
				/>
				<Button disabled={loading} onClick={handleClose}>
					Cancelar
				</Button>
				<LoadingComponent 
					loading={loading}
					color="inherit"
				>
					<Button onClick={handleSubmit(onSubmit)}>
						Actualizar
					</Button>
				</LoadingComponent>
			</DialogActions>
		</Dialog>
	);
}