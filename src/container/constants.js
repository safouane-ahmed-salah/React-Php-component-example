export const statuses = [
    {name: "Draft", value: "24", color: "#e77e4e", key: 'draft', desc: 'Information is being drafted & has not been submitted'},
    {name: "Filing", value: "25", color: "#bd1028", key: 'filling', desc: 'Project / paper has been submitted for filing'},
    {name: "IP Pending", value: "33", color: "#23a4ab", key: 'pending', desc: 'Documents processed & awaiting IP approval'},
    {name: "Accepted", value: "43", color: "#438945", key: 'publish', desc: 'Documents accepted & IP has been awarded'},
];

export const adminStatuses = statuses.filter(v=> v.key!='draft');

export const technical_types = [
    {value:"H", label:"Only Hardware", shortLabel: "Hardware"},
    {value:"S", label:"Only Software", shortLabel: "Software"},
    {value:"B", label:"Both", shortLabel: "Both"},
]

export const manufacturing_types = [
    {value:1, label:"Use Manufacturing"},
    {value:0, label:"No Manufacturing"},
]
export const programmatic_types = [
    {value:1, label:"Use Programmatics"},
    {value:0, label:"No Programmatics"},
]

export const product_types = ['Paper', 'Product', 'Both'];

export const isAdmin = admin; // eslint-disable-line