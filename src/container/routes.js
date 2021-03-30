
// const Empty = (props) => <div {...props} />
import dashoboardIcon from './../assets/menu/dashboard.png';
import { Dashboard } from './views';
import { EnquiryDashBoard } from './views/EnquiryDashboard';

export const routes = 
[ 
    {path: '/', exact:true, component: Dashboard  },
    {path: '/enquiry-dashbaord', exact:true, component: EnquiryDashBoard  },

];

export const menus = 
[
    {icon: dashoboardIcon, name: 'Overview', path: '/'},
    {icon: dashoboardIcon, name: 'Enquiry Dashboard', path: '/enquiry-dashboard'},
];