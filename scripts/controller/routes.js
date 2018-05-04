


//landing on home page
page("/", () => app.loginView.initLoginView());
page("/sign-up", () => app.homeView.initHomeView());
//loading a previous project
page("/create/:project_id/:project_name", ctx => app.createView.initCreateView(ctx));
//when are creating a new project
page("/create/new/:user_id", (ctx) => app.createView.initCreateView(ctx));
//navigating to project view from homeview/sign-in or create a new account / might need ctx after login
page("/projects/:user_id", ctx => app.projectView.initProjectView(ctx));
//auth view that each of the other view use to check the login token lcoalstoage


// initializes page.js
//still have to add CDN to index.html
//have to add universal nav bar
//have an auth.js page that all the view pages check to see if you have a sign in  token
page();