import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, LinearProgress } from '@material-ui/core';

//Redux
import { connect } from 'react-redux';
import openAlert from '../../../../store/action/alerts/openAlerts';

function RenderTableError({openAlert}) {
  //Alert
  openAlert(
    'Error al intentar pedir los datos.',
    'error',
    true,
    )

  //Regresar componente
  return (<TableContainer component={Paper} style={{
    maxHeight: '450px',
    overflow: 'auto'
  }}>
    <Table aria-label="Tabla de Registros" size="small">
      <TableHead>
        <TableRow>
          <TableCell>Cédula</TableCell>
          <TableCell align="right">Usuario</TableCell>
          <TableCell align="right">Acción</TableCell>
          <TableCell align="center">Opciones</TableCell>
        </TableRow>
      </TableHead>
    </Table>
    <LinearProgress variant="determinate" value={100} color="secondary" style={{ width: "100%" }} />
  </TableContainer>);
}

const mapDispatchToProps = {
  openAlert,
}

export default connect(null,mapDispatchToProps)(RenderTableError);