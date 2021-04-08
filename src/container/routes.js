
// const Empty = (props) => <div {...props} />
import dashoboardIcon from './../assets/menu/dashboard.png';
import { Dashboard } from './views';
import { Campaign } from './views/Campaign';
import { Device } from './views/Device';
import { EnquiryDashBoard } from './views/EnquiryDashboard';
import { Locations } from './views/Locations';
import { Source } from './views/Source';
import { Status } from './views/Status';

export const routes = 
[ 
    {path: '/', exact:true, component: Dashboard  },
    {path: '/enquiry-dashboard', exact:true, component: EnquiryDashBoard  },
    {path: '/campaigns', exact:true, component: Campaign  },
    {path: '/status', exact:true, component: Status  },
    {path: '/source', exact:true, component: Source  },
    {path: '/location', exact:true, component: Locations  },
    {path: '/device', exact:true, component: Device  },

];

export const menus = 
[
    {icon: dashoboardIcon, name: 'Overview', path: '/'},
    {icon: dashoboardIcon, name: 'Enquiry Dashboard', path: '/enquiry-dashboard'},
    {icon: dashoboardIcon, name: 'Campaign', path: '/campaigns'},
    {icon: dashoboardIcon, name: 'Status', path: '/status'},
    {icon: dashoboardIcon, name: 'Source', path: '/source'},
    {icon: dashoboardIcon, name: 'Location', path: '/location'},
    {icon: dashoboardIcon, name: 'Device', path: '/device'},
];