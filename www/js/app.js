// Dom7
var $$ = Dom7;
var provider = new firebase.auth.GoogleAuthProvider();

/*$(document).ready(function(){
    if($(this).enabled(true){
      $('header').addClass('header2');
    }else {
      $('header').removeClass('header2');
    }
});*/

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'md', // Automatic theme detection
  view:{
    stackPages:true,
  },
  statusbar: {
    enabled:true,
    androidBackgroundColor:'#fff'
  },
  navbar:{
    mdCenterTitle:true,
  },
  // App routes
  routes: routes,
});

var mainView = app.views.create('.view-main', {
  url: '/'
})
