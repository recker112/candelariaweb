import React, { useCallback, useState } from 'react';

import { 
	Grid,
} from '@material-ui/core';
import MaterialTable from 'material-table';
import GroupIcon from '@material-ui/icons/Group';
import Delete from '@material-ui/icons/Delete';

import useFetch from '../../../hooks/useFetch';

// Components
import { tableIcons, tableLocation } from '../../../components/TableConfig';
import converterCursoCode from '../../../components/funciones/converterCursoCode';

// Redux
import { useDispatch } from 'react-redux';
import updateDialogs from '../../../actions/updateDialogs';

export default function TableUsers({ tableRef }) {
	const [massiveDelete, setMassiveDelete] = useState(false);
	const [pageSizeController, setpageSizeController] = useState(5);
	const dispatch = useDispatch();
	
	const { fetchData } = useFetch();
	
	const handleMassive = () => setMassiveDelete(value => (!value));
	
	const handleChange = value => setpageSizeController(value);
	
	const onFetch = useCallback(async (query) => {
		const prepare = {
			url: `v1/curso?page=${query.page}&per_page=${query.pageSize}&search=${encodeURI(
				query.search
			)}`,
			type: 'get',
			messageToFinish: false,
		};

		const response = await fetchData(prepare);

		if (response) {
			return {
				data: response.data,
				page: response.page,
				totalCount: response.totalCursos,
			};
		} else {
			return {
				data: [],
				page: 0,
				totalCount: 0,
			};
		}
		// eslint-disable-next-line
	},[]);
	
	return (
		<Grid item xs={12}>
			<MaterialTable
				tableRef={tableRef}
				title="Cursos activos" 
				icons={tableIcons}
				localization={tableLocation}
				data={onFetch}
				onChangeRowsPerPage={handleChange}
				columns={[
					{
						title: 'Cรณdigo',
						field: 'code',
						render: (rowData) => `${rowData.curso}-${rowData.seccion}`
					},
					{
						title: 'Curso',
						field: 'curso',
						render: (rowData) => converterCursoCode(rowData.curso)
					},
					{
						title: 'Seccion', 
						field: 'seccion'
					},
				]}
				actions={[
					{
						icon: () => (<GroupIcon />),
						tooltip: 'Opciones masivas',
						isFreeAction: true,
						onClick: handleMassive,
					},
					{
						icon: () => (<Delete />),
						tooltip: 'Eliminar curso',
						onClick: (event, rowData) => {
							if (!massiveDelete) {
								const data = {
									id: rowData.id,
									code: rowData.code,
								}
								dispatch(updateDialogs('deleteConfirmation', true, false, data));
							}else {
								let i = 0;
								let newData = [];
								for(let value of rowData){
									newData[i] = value.id;
									i++;
								}
								dispatch(updateDialogs('deleteConfirmation', true, false, {
									deleteMassive: true,
									ids: newData
								}));
							}
						},
					},
				]}
				options={{
					sorting: false,
					draggable: false,
					actionsColumnIndex: -1,
					selection: massiveDelete,
					pageSize: pageSizeController,
				}}
			/>
		</Grid>
	);
}