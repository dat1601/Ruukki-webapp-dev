import {
  DefaultPage,
  Overview,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: '',
      name: 'Default page',
      component: DefaultPage
    },
    { path: 'loop', name: 'Energy loop', component: DefaultPage },
    { path: 'tour', name: 'Tour', component: DefaultPage },
    { path: 'compare', name: 'Compare', component: DefaultPage },
    { path: '', name: 'Overview', component: DefaultPage },
    { path: 'building', name: 'Building', component: DefaultPage },
  ],
};
