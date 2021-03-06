import { useSnackbar } from 'notistack';

import { useDispatch } from 'react-redux';
import logoutApp from '../actions/logoutApp';

function useFetch(setError) {
	const axios = window.axios;

	const dispatch = useDispatch();
	const { enqueueSnackbar } = useSnackbar();

	const fetchData = async (prepareData) => {
		let {
			url,
			data = null,
			otherData = null,
			messageToFinish = true,
			messageTo422 = true,
			message422 = 'Error al verificar los datos',
			messageTo400 = true,
			message400 = false,
			return400 = false,
			message404 = 'No encontrado',
			messageTo404 = true,
			message404Server = false,
			successText = false,
			type = 'post',
			variant = 'success',
		} = prepareData;

		try {
			const res = await axios[type](url, data, otherData);

			if (messageToFinish) {
				enqueueSnackbar(successText ? successText : res.data.msg, {
					variant: variant,
				});
			}

			return res.data;
		} catch (error) {
			if (axios.isCancel(error)) {
				//No hacer nada
			}else if (error.response) {
				//Errores HTTP
				const { status, data } = error.response;

				if (status === 400) {
					if (messageTo400) {
						enqueueSnackbar(message400 ? message400 : data.msg, {
							variant: 'warning',
						});
					}
					
					if (return400) {
						return data;
					}
				} else if (status === 401) {
					enqueueSnackbar('Sesión expirada', {
						variant: 'info',
					});

					dispatch(logoutApp());
				} else if (status === 403) {
					enqueueSnackbar('No tienes permisos para esta acción', {
						variant: 'error',
					});
				} else if (status === 404) {
					if (message404Server) {
						enqueueSnackbar(data.msg, {
							variant: 'warning',
						});
					}else {
						if (messageTo404) {
							enqueueSnackbar(message404, {
								variant: 'warning',
							});	
						}
					}
				} else if (status === 422) {
					if (messageTo422) {
						enqueueSnackbar(message422, {
							variant: 'error',
						});
					}
					
					for (let key in data.errors) {
						setError && setError(key, {
							type: 'useFetch',
							message: 'Error: '+data.errors[key][0],
						});
					}
				} else if (status === 500) {
					enqueueSnackbar('No se ha podido conectar con la base de datos', {
						variant: 'error',
					});
				} else {
					enqueueSnackbar('Error interno en el servidor', {
						variant: 'error',
					});
				}
			} else {
				enqueueSnackbar('Imposible conectarse con el servidor', {
					variant: 'error',
				});
			}
			return false;
		}
	};

	return { fetchData };
}

export default useFetch;