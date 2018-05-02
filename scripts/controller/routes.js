


//landing on home page
page("/", () => app.homeView.initHomeView());
//loading a previous project
page("/create/:id", ctx => app.createView.initCreateView(ctx));
//when are creating a new project
page("/create", () => app.createView.initCreateView());
//navigating to project view from homeview/sign-in or create a new account / might need ctx after login
page("/projects", () => app.projectView.initProjectView());
//auth view that each of the other view use to check the login token lcoalstoage


// initializes page.js
//still have to add CDN to index.html
//have to add universal nav bar
//have an auth.js page that all the view pages check to see if you have a sign in  token
page();