
// const Empty = (props) => <div {...props} />
import dashoboardIcon from './../assets/menu/dashboard.png';
import { Dashboard } from './views';
import { EnquiryDashBoard } from './views/EnquiryDashboard';

export const routes = 
[ 
    {path: '/', exact:true, component: Dashboard  },
    {path: '/enquiry-dashbaord', exact:true, component: EnquiryDashBoard  },
    // {path: '/projects', exact:true, component: DashboardTable },
    // {path: '/create-project', exact:true, component: NewProject  },
    // {path: '/edit-project/:id', exact:true, component: NewProject  },
    // {path: '/create-project/calculator/:id', exact:true, component: Calculator  },
    // {path: '/business-plan', exact:true, component: BusinessPlan  },
    // {path: '/business-plan/create', exact:true, component: BusinessPlanForm  },
    // {path: '/business-plan/edit/:id', exact:true, component: BusinessPlanForm  },
    // {path: '/business-plan/view/:id', exact:true, component: BusinessPdf  },
    // {path: '/innovation-catalogue', exact:true, component: Innovation  },
    // {path: '/innovation-catalogue/edit/:id',  component: InnovationForm  },
    // {path: '/innovation-catalogue/view/:id',  component: InnovationView  },
    // {path: '/innovation-catalogue/create',  component: InnovationForm  },
    // {path: '/profile-page', exact:true, component: ProfilePage  },
];

export const menus = 
[
    {icon: dashoboardIcon, name: 'Overview', path: '/'},
    {icon: dashoboardIcon, name: 'Enquiry Dashboard', path: '/enquiry-dashboard'},
];