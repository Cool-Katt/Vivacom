import Dashboard from './pages/Dashboard';
import FormsDailyMSISDN from './pages/FormDailyMSISDN';
import FormsMonthlyMSISDN from './pages/FormMonthlyMSISDN';
import FormDailyNetwork from "./pages/FormDailyNetwork";
import FormMonthlyNetwork from "./pages/FormMonthlyNetwork";
import FormDailyRegions from "./pages/FormDailyRegions";
import FormMonthlyRegions from "./pages/FormMonthlyRegions";
import Analytics from './pages/Analytics';
import ErrorPage from './pages/404';
import PITree from "./pages/PITree";

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
const pageList = [
  {
    name: 'Dashboard',
    path: '/index.html',
    component: Dashboard,
  },
  {
    name: 'Dashboard',
    path: '/home',
    component: Dashboard,
  },
  {
    name: 'MSISDN Daily',
    path: '/msisdn/daily',
    component: FormsDailyMSISDN,
  },
  {
    name: 'MSISDN Monthly',
    path: '/msisdn/monthly',
    component: FormsMonthlyMSISDN,
  },
  {
    name: 'Network Daily',
    path: '/network/daily',
    component: FormDailyNetwork,
  },
  {
    name: 'Network Monthly',
    path: '/network/monthly',
    component: FormMonthlyNetwork,
  },
  {
    name: 'Region Daily',
    path: '/region/daily',
    component: FormDailyRegions,
  },
  {
    name: 'Region Monthly',
    path: '/region/monthly',
    component: FormMonthlyRegions,
  },
  {
    name: 'Analytics',
    path: '/apps/analytics',
    component: Analytics,
  },
  {
    name: 'PI Tree',
    path: '/tree',
    component: PITree,
  },
  {
    name: '404',
    component: ErrorPage,
  },
];

export default pageList;
