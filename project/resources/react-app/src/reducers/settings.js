//Verificar si ya existe el almacenamiento local de la variable
//theme para evitar reescribirla
if (!localStorage.getItem('theme')) {
	localStorage.setItem('theme', 'light');
}

//Inicar valor del state.
const initialState = {
	tema: localStorage.getItem('theme'),
	drawer: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'UPDATE_THEME': {
			//Verificar tema actual
			const temaActual = state.tema;

			//Cambiar tema actual
			let changeThemeTo = temaActual === 'light' ? 'dark' : 'light';

			//Aplicar cambio en el almacenamiento local.
			localStorage.setItem('theme', changeThemeTo);

			//Regresar state.
			return {
				...state,
				tema: changeThemeTo
			};
		}
		
		case 'UPDATE_DRAWER': {
			return {
				...state,
				drawer: payload
			};
		}
			
		default: {
			return state;
		}
	}
};

// Seleccionar estado del state.
// export const selectTheme = state => state.settings.tema;