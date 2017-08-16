"use strict";

const emailStatuses = {
    pending: 1,
    sent: 2,
    error: 3
};

const orderStatuses = {
    created: 1,
    pending: 2,
    paid: 3,
    timeout: 4,
    rejected: 5
};

const orderStatusMessages = {
    cancelled: 'CANCELLED',
    netsPermanentError: 'NETS_PERMANENT_ERROR',
    netsReject: 'NETS_REJECT',
    netsNotFound: 'NETS_NOT_FOUND',
    netsTimeout: 'NETS_TIMEOUT',
    netsCustomerCancelled: 'NETS_CUSTOMER_CANCELLED',
    innerTimeout: 'INNER_TIMEOUT',
    empty: ''
};

const lienTypes = {
    mortgage: 1,
    enforcement: 2
};

const energyLabels = {};
'abcdefg'.split('').forEach((l, i) => {
    energyLabels[l] = i + 1;
});


const heatingRates = {
    'red': 1,
    'orange': 2,
    'yellow': 3,
    'lightGreen': 4,
    'darkGreen': 5
};

const loanTypes = {
    serial: 1,
    annuity: 2
};

const userPropertyTypes = {
    section: 1,
    share: 2,
    stock: 3,
    house: 4
};

const userRoles = {
    user: 1,
    admin: 100
};

const facilities = [
    {
        title: 'Aircondition/Ventilasjon',
        key: 'airconditionVentilation'
    },
    {
        title: 'Alarm',
        key: 'alarm'
    },
    {
        title: 'Bademulighet',
        key: 'swimmingPossibilities'
    },
    {
        title: 'Balkong/Terrasse',
        key: 'balconyTerrace'
    },
    {
        title: 'Barnevennlig',
        key: 'childFriendly'
    },
    {
        title: 'Bredbåndtilknytning',
        key: 'internetConnection'
    },
    {
        title: 'Fellesvaskeri',
        key: 'commonLaundry'
    },
    {
        title: 'Fiskemuligheter',
        key: 'fishingPossibilities'
    },
    {
        title: 'Garasje/P-plass',
        key: 'garageParking'
    },
    {
        title: 'Heis',
        key: 'elevator'
    },
    {
        title: 'Ingen gjenboere (Ingen innsyn)',
        key: 'noOppositeNeighbors'
    },
    {
        title: 'Kabel-TV',
        key: 'kabelTv'
    },
    {
        title: 'Tilrettelagt rullestol',
        key: 'disabledWheelchair'
    },
    {
        title: 'Moderne',
        key: 'modern'
    },
    {
        title: 'Offentlig vann/avløp',
        key: 'publicWaterSewage'
    },
    {
        title: 'Parkett',
        key: 'parquet'
    },
    {
        title: 'Ildsted',
        key: 'firePlace'
    },
    {
        title: 'Stille/rolig',
        key: 'quiteCalm'
    },
    {
        title: 'Sentralt',
        key: 'centrally'
    },
    {
        title: 'Turmuligheter',
        key: 'hikingPossibilities'
    },
    {
        title: 'Utsikt',
        key: 'view'
    },
    {
        title: 'Vaktmester-/vektertjeneste',
        key: 'custodian'
    }
];

const advertisementStatuses = {
    active: 1,
    deleted: 2
};

const smsStatuses = {
    pending : 1,
    sent : 2,
    received : 3,
    error : 4
};

const smsTypes = {
    serverToUser: 1, //ordinary sms
    userToServer: 2  //response from the user
};

module.exports = {
    emailStatuses,
    orderStatuses,
    orderStatusMessages,
    energyLabels,
    heatingRates,
    loanTypes,
    lienTypes,
    userPropertyTypes,
    userRoles,
    facilities,
    advertisementStatuses,
    smsStatuses,
    smsTypes
};
