import Home from '../pages/Home'
import FolkDashboard from '../pages/FolkDashboard'
import RockDashboard from '../pages/RockDashboard'
import RhythmDashboard from '../pages/RhythmDashboard'
// import About from '../pages/About'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/folkdashboard",
      component: FolkDashboard,
      name: "Folk Dashboard",
      protected: true
    },
    {
        path: "/rockdashboard",
        component: RockDashboard,
        name: "Rock Dashboard",
        protected: true
      },
      {
        path: "/rhythmdashboard",
        component: RhythmDashboard,
        name: "Rhythm Dashboard",
        protected: true
      },
    // {
    //   path: "/about",
    //   component: About,
    //   name: "About",
    //   protected: false
    // }
];

export default routes