// nuxt middleware
export default ({ app, redirect }) => {
    const cookieRes = app.$cookies.get('logedIn');
    // app.$cookies.set('logedIn', false);
    if(cookieRes !== true){
        return redirect('/login')
    }
    
  }