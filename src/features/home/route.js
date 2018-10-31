import {
  DefaultPage,
  Overview,
  EnergyComp,
  CompareComp,
  TourComp,
  BuildingComp,
} from './';

export default {
  path: '/',
  name: 'Home',
  component: DefaultPage,
  childRoutes: [
    { path: 'ruukki/loop', name: 'Energy loop', component: EnergyComp },
    { path: 'ruukki/tour', name: 'Tour', component: TourComp },
    { path: 'ruukki/compare', name: 'Compare', component: CompareComp },
    { path: 'ruukki', name: 'Overview', component: Overview, isIndex: true },
    { path: 'ruukki/building', name: 'Building', component: BuildingComp },
  ],
};
