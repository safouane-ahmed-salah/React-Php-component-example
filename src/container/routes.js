
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

export const menus=[
    {
        // icon: 'caret-left',
        label: 'Overview',
        to: '/',
    },
    {
        // icon: 'caret-left',
        label: 'Enquiry Dashboard',
        to: '/#enquiry-dashboard',
    },
    {
        // icon: 'caret-left',
        label: 'Reports',
        content: [
            {
                // icon: 'caret-left',
                label: 'Enquiry',
                content: [
                    {
                        // icon: 'caret-left',
                        label: 'Campaign',
                        to: '/#campaigns',
                    },
                    {
                        // icon: 'caret-left',
                        label: 'Status',
                        to: '/#status',
                    },
                    {
                        // icon: 'caret-left',
                        label: 'Source',
                        to: '/#source',
                    },
                    {
                        // icon: 'caret-left',
                        label: 'Location',
                        to: '/#location',
                    },
                    {
                        // icon: 'caret-left',
                        label: 'Device',
                        to: '/#device',
                    },
                ],
            },
        ],
    },
];


