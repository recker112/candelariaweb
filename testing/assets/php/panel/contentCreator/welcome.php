<!-- Bienvenidos -->
<div class="c-caja" id="c-contenido-bienvenidos">
<div class="announces">
    <?
      require('assets/php/consults/funciones/func_infoPanel.php');
      require('assets/php/consults/connect_db.php');
    ?>
    <div class="abox">
      <span class="circulo morado"><? echo countPublicNews($mysqli,$_SESSION['cedula']); ?></span>
      <p class="text">Noticias publicadas</p>
    </div>
    <? $mysqli->close() ?>
  </div>
  <div class="box">
    <span class="title">Bienvenido</span>
    <p class="content">Le damos la bienvenida al Panel de Administación, aquí usted podrá realizar acciones como: carga de matricula, carga de boletas, modificar usuarios, eliminar usuarios, ver los registros, borrar cursos o boletas, entre otras cosas. Se le recomienda leerse el manual para poder obtener información completa sobre las acciones que realizan cada función en la web.</p>
  </div>  
</div>