import React from 'react';

import {
	Grid,
	Box,
} from '@material-ui/core';

import { useWatch } from "react-hook-form";

import useFetch from '../../../hooks/useFetch';

// Components
import {
	AutoCompleteAsyncHook,
} from '@form-inputs';

export default function StudiendSection({ control, disabled }) {
  const privilegio = useWatch({
		control,
    name: 'privilegio',
    defaultValue: ''
  });
	
	const { fetchData } = useFetch();
	
	const asyncRequestCursos = async search => {
		const prepare = {
			url: `v1/find/curso?search=${encodeURI(search)}`,
			type: 'get',
			messageToFinish: false,
		};

		const response = await fetchData(prepare);
		
		return response || [];
	}
	
	if (privilegio === 'V-') {
		return (
			<Grid item xs={12}>
				<Box mt={1}>
					<AutoCompleteAsyncHook
						label='Seleccionar un curso'
						name='curso_id'
						asyncRequest={asyncRequestCursos}
						getOptionLabel={(option) => option.code || ''}
						renderOption={option => option.code}
						helperText='Seleccione el curso en el cual desea ingresar al usuario'
						control={control}
						rules={{
							required: { value: true, message: '* Campo requerido' },
						}}
					/>
				</Box>
			</Grid>
		);
	}
	
	return null;
}