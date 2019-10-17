    <!-- Contenido -->
    <div id="contenido">
      <?php 
      if ($privilegio == "A-") { 
        require 'contentAdmin/welcome.php';
        require 'contentAdmin/registros.php';
        require 'contentAdmin/modificar.php';
        require 'contentAdmin/matricula.php';
        require 'contentAdmin/boletas.php';
				require 'contentAdmin/configuracion.php';
				require 'contentAdmin/borrar.php';
				require 'contentCreator/noticias.php';
				require 'contentAdmin/anuncios.php';
				require 'contentAdmin/avatar.php';
      }elseif ($privilegio == "V-"){
        require 'contentStudent/welcome.php';
        require 'contentStudent/informacion.php';
				require 'contentStudent/constancias.php';
				require 'contentAdmin/avatar.php';
      }elseif ($privilegio == "CR-") {
				require 'contentCreator/welcome.php';
				require 'contentCreator/noticias.php';
      }
      ?>
			<!-- Opciones -->
			<div class="c-caja" id="c-contenido-passChange" style="display: none">
				<div class="box">
					<span class="title">Opciones</span>
					<form action="#" id="pc-form" method="POST" autocomplete="off">
						<div class="pc-div1">
							<span>Contraseña actual</span>
							<input class="inputText" type="password" id="pc-actual" name="pass_actual" placeholder="Contraseña actual" />
						</div>
						<div class="pc-div2">
							<div class="pass-new-text">
								<span>Nueva contraseña</span>
								<input class="inputText" type="password" id="pc-new" name="pass_new" placeholder="Nueva contraseña" />
							</div>
							<div class="pass-new-inputs">
								<span>Repetir contraseña</span>
								<input class="inputText" type="password" id="pc-newRepit" name="pass_new_repit" placeholder="Repetir contraseña" />
							</div>
						</div>
						<div class="pc-div3">
							<button id="pc-ok">Cambiar</button>
							<img id="pc-loading" style="display: none;" src='assets/img/loading.svg' height='28' alt='imagen de carga' />
					</div>
					</form>
				</div>
			</div>
		</div>
  </main>