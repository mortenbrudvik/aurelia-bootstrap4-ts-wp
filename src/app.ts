import {RouterConfiguration, Router} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router; 
    config.title = 'Morten Brudvik';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./home'), nav: true, title: 'Home' },
      { route: ['hobbies'], name: 'hobbies', moduleId: PLATFORM.moduleName('./hobbies'), nav: true, title: 'Hobbies' },
      { route: ['contact'], name: 'contact', moduleId: PLATFORM.moduleName('./contact'), nav: true, title: 'Contact'}
    ]);
  }
}
