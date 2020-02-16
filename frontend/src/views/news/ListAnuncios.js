import React, { useEffect } from "react";

//Material-UI
import { Grow, Paper } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

//redux
import { connect } from "react-redux";
import { updateNewsAnuncios } from "../../actions/news/updateNews";

//Componentes
import Anuncio from "./../../components/Anuncio";

function ListAnuncios({ list, updateNewsAnuncios }) {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://my-json-server.typicode.com/recker112/candelariaweb/anuncios"
      )
        .then(response => response.json())
        .then(json => json);

      if (res !== {}) {
      }

      updateNewsAnuncios(res);
    };

    let cancel = false;
    if (!cancel) {
      fetchData();
    }

    //Al desmontar
    return () => {
      cancel = true;
      updateNewsAnuncios(null);
    };
  }, [updateNewsAnuncios]);

  return (
    <aside id="test" className="BoxAnuncios">
			<Grow in={true}>
				<Paper variant="outlined">
					<div className="AHead">
						<span>Anuncios</span>
					</div>
				</Paper>
			</Grow>
      {list !== null ?
      <Anuncio option={list} />
      :
      <Skeleton variant="rect" height={139} />}
    </aside>
  );
}

const mapStateToProps = state => ({
  list: state.news.dataA
});

const mapDispatchToProps = {
  updateNewsAnuncios
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAnuncios);