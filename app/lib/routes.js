Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('profile', {
  name: 'profile',
  controller: 'ProfileController',
  where: 'client'
});

Router.route('events', {
  name: 'events',
  controller: 'EventsController',
  where: 'client'
});