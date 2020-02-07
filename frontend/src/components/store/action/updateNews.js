//Se crea una acción la cual será capturada
//por el reducer correspondiente.
export const updateNewsAnuncios = () => {
  const query = [{
    title: 'Hola, soy una prueba',
    content: "Test test tes test",
    by: 'Recker'
  }, {
    title: 'Test2 largo',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
    by: 'Recker'
  }]
  return {
    type: "UPDATE_NEWS_ANUNCIOS",
    payload: query
  }
}

export const updateNewsNoticias = () => {
  const query = [{
    id: '2',
    name: 'Henrry',
    title: 'Ayer vi a un ave',
    content: 'Yep, si la vi y no pude ver mas porque se fue. :u',
    imgList: [{title: 'Imagen47'}, 
      {title: 'Imagen47'},
      {title: 'Imagen47'},
      {title: 'Imagen47'},
      {title: 'Imagen47'}
    ],
  },{
    id: '2',
    name: 'Henrry',
    title: 'Ayer vi a un ave',
    content: 'Yep, si la vi y no pude ver mas porque se fue. :u',
    imgList: [{title: 'Imagen47'}, 
      {title: 'Imagen47'},
      {title: 'Imagen47'},
      {title: 'Imagen47'},
      {title: 'Imagen47'}
    ],
  }];
  
  return {
    type: 'UPDATE_NEWS_NOTICIAS',
    payload: query,
  }
}