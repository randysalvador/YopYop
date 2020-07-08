routes = [
  {
    path: '/',
    componentUrl: './pages/contratadores/homeC.html',
  },
  {
    path: '/home/',
    componentUrl: './pages/home.html',
  },
  {
    path: '/about/',
    componentUrl: './pages/about.html',
  },
  {
    path: '/registro/',
    componentUrl: './pages/registro.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/login/',
    componentUrl: './pages/login.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/tipo/',
    componentUrl: './pages/tipoUser.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  //Contratadores
  {
    path: '/registroC/',
    componentUrl: './pages/contratadores/registroC.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/dTrabajadores/:nombre',
    componentUrl: './pages/contratadores/detalleTrabajadores.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/homeC/',
    componentUrl: './pages/contratadores/homeC.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  //Trabajadores
  {
    path: '/registroT/',
    componentUrl: './pages/trabajadores/registroT.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/homeT/',
    componentUrl: './pages/trabajadores/homeT.html',
    options: {
      transition: 'f7-parallax',
    },
  },

 
  // Default route, match to all pages (e.g. 404 page)
  {
    path: '(.*)',
    url: './pages/404.html',
  },
]
