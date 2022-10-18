export const SINGLE_MODE = 1;

export const MULTI_MODE = 2;

export const SECONDARY_MODE = 3;

export const COURIER_RFQ_TYPE = 4;

export const EXIM_RFQ_TYPE = 5;

export const AWL_MULTI_MODE = 6;

export const RIL_WAREHOUSE = 7;

export const GENERAL_PROCUREMENT = 8;

export const DISPOSAL_PRODUCT = 9;

export const TOAST_HIDE_TIME = 2;
export const CHAT_REFRESH_TIME = 5;
export const BIDS_SEEKER_REFRESH_TIME = 10;
export const BIDS_TRANSPORTER_REFRESH_TIME = 10;
export const UPLOAD_TRIPS_REFRESH_TIME = 5;

export const TRANSPORTER = 'transporter';
export const SEEKER = 'seeker';
export const PROVIDER = 'provider';
export const SEEKER_VALUE = 1;
export const PROVIDER_VALUE = 2;
export const USER_ID = 1;
export const MOBILE_NO = 2;

export const ACC = '795c8921af7a4f599a477e44ab163bd5';
export const DEEPAK_PHENOLICS = ['55afbf6dc2154d12a6ed5b9306d39eb5', 'db6c293235a643dd9fc5620addf13768'];
export const GREEN_PLY = ['57d5a22e4518423abfc22b73f8d1bf43', 'f9c8c7e230b147ce9ea3122b3d401247', '3f068bae400d4713b6b784a6282596e4', '0eff907d5e0c4094a2aaf18b59d33e2f'];
export const HIKAL = ['0d42f378198944bb9c6f5c1711c672ab', '195148f00edb4923a5a381c1ee7c2b78'];
export const KPTL = ['38cfdc979eb344e581bf987ac62c2a6a'];
export const RAJPETRO = ['344d1da11e894163ba8aa25b041cee37'];
export const RFQ_NAME_AUTOPOPULATE = true;

export const CHALLENGE_PRICE_SENT = 1;
export const CHALLENGE_PRICE_ACCEPTED = 2;
export const CHALLENGE_PRICE_REJECTED = 3;

export const MULTI_MODE_LEG = 1;
export const MULTI_MODE_COST = 2;

export const NO_OF_LPP_DISPLAY = 5;

export const IS_RIL_RETAIL = 'Ril Retail Ltd';

export const IS_CP_TYPE_RFQ = '737';

export const AVG_DISTANCE = 250;

export const SHOW_SIDEBAR = true;

export const SHOW_TAT = false;

export const FILE_SIZE = 10485760;

export const FILE_SIZE_40_MB = 41943040;

export const FILE_TYPES = ['application/pdf', 'image/jpeg', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'image/png', 'text/html', 'text/comma-separated-values', 'text/csv', 'application/csv'];

export const MODULE_ERROR_ACCESS = 'Please Contact Caliper Admin';

export const COUNTER_ACCEPT = 1;

export const COUNTER_REJECT = 2;

export const COUNTER_RESENT = 3;

export const LOI_ACCEPTED = 6;

export const RFQ_DISPLAY_LIMIT = 6000;

export const RFQ_PROV_DISPLAY_LIMIT = 300;

export const VOLTAS_MIS = '489';

export const RIL_MIS = '98';

export const LEGRAND_MIS = '4';

export const CENTURY_PLY = ['8fc235d589bb45c082d93e6f634265f0', 'c75d5363408f4830a93522590966984c'];

export const CARGIL = ['04d229c7c1934119960cc4f5312dc45d', '5487b3a6065c47e1b764c03b693fc52b'];

export const EMAMI = ['66204f3fc0de46a99c7556c7c0b05699', '810e630cbfce43c79b2693c27c35103c'];

export const SERVICE_TYPES = [
   {
      name: 'FTL',
      value: 1
   },
   {
      name: 'LCL Express',
      value: 2
   },
   {
      name: 'Courier',
      value: 3
   },
   {
      name: 'Container',
      value: 4
   },
    {
        name: 'Less Than Container Load (LCL)',
        value: 5
    },
   // {
   //     name: 'Bulk',
   //     value: 5
   // }
];

export const SERVICE_FTL =
  {
     name: 'FTL',
     value: 1
  }

export const SERVICE_MODES = [
   {
      name: 'Road',
      name2: 'Road',
      value: 1
   },
   {
      name: 'Bus',
      name2: 'Bus',
      value: 2
   },
   {
      name: 'Rail',
      name2: 'Rail',
      value: 3
   },
   {
      name: 'Air',
      name2: 'Air',
      value: 4
   }, {
      name: 'Surface',
      name2: 'Surface',
      value: 5
   }, {
      name: 'Road-Coastal',
      name2: 'Road-Ocean',
      value: 6
   }, {
      name: 'Road-Rail',
      name2: 'Road-Rail',
      value: 7
   }, {
    name: 'Road-Rail (BCN)',
    name2: 'Road-Rail (BCN)',
    value: 9
  }, {
    name: 'Road-Rail (Container)',
    name2: 'Road-Rail (Container)',
    value: 10
  }, {
      name: 'Road-Rail-Coastal',
      name2: 'Road-Rail-Ocean',
      value: 8
   },
  {
    name: 'Road-Air',
    name2: 'Road-Air',
    value: 11
  }
];


export const INSURANCE_BY = [
   {
      name: 'Consignor',
      value: 1
   },
   {
      name: 'Consignee',
      value: 2
   },
   {
      name: 'As Per Business Terms',
      value: 3
   },
   {
      name: 'Transporter',
      value: 4
   }
];

export const CARGO_DETAILS = [
   {
      name: 'Solid',
      value: 1
   },
   {
      name: 'Liquid',
      value: 2
   },
   {
      name: 'Packed Liquid',
      value: 3
   },
   {
      name: 'Gas',
      value: 4
   },
   {
      name: 'Hazardous',
      value: 5
   },
   {
    name: 'Food',
    value: 6
  },
  {
    name: 'Tanker',
    value: 7
  }
];

export const HANDLING_INSTRUCTIONS = [
   {
      name: 'Normal',
      value: 1
   },
   {
      name: 'Temp Sensitive',
      value: 2
   },
   {
      name: 'Sunlight Sensitive',
      value: 3
   },
   {
      name: 'Hygroscopic',
      value: 4
   },
   {
      name: 'Handle With Care',
      value: 5
   },
   {
      name: 'Vertical Loading',
      value: 6
   },
   {
      name: 'Impact Sensitive',
      value: 7
   },
   {
      name: 'Fork Lift',
      value: 8
   },
   {
      name: 'Hydra',
      value: 9
   },
   {
      name: 'Crane',
      value: 10
   },
];

export const TAT_UNITS = [
   {
      name: 'Days',
      value: 1
   },
   {
      name: 'Hours',
      value: 2
   }
];

export const TAT_UNITS_LAT = [
   {
      name: 'Days',
      value: 1
   },
   {
      name: 'Hours',
      value: 2
   }
];

export const TEMPERATURE_UNITS = [
   {
      name: '°C',
      value: 1
   },
   {
      name: '°F',
      value: 2
   },
];

export const RFQ_TYPE_NAMES = {
   1: "Single Mode",
   2: "Multi Mode",
   3: "Secondary Mode",
   4: "Courier",
   5: "EXIM",
   6: "Multi Mode"
};

export const PAYMENT_TERMS = {
   1: "To Pay",
   2: "To Be Paid",
};
export const SHIPPING_TYPE_NAMES = {
  1: "Import",
  2: "Export"
};

export const RFQ_TABLE_DATE_FORMAT = 'DD/MM/YYYY';
export const LINE_ITEM_DETAIL_DATE_FORMAT = 'DD MMM YYYY hh:mm a';
export const CHAT_DATE_FORMAT = 'DD MMM';
export const CHAT_TIME_FORMAT = 'h:mm a';

export const LOG_IN_AND_LOG_OUT ="DD MMM YYYY h:mm:ss a";

export const LEGS_TYPES = [
   {
      name: 'Door To Port',
      value: 1
   },
   {
      name: 'Port To Port',
      value: 2
   },
   {
      name: 'Port To Door',
      value: 3
   },

   {
      name: 'LP THC',
      value: 4
   },

   {
      name: 'DP THC',
      value: 5
   },

   {
      name: 'CFS',
      value: 6
   },
   {
      name: 'Ocean Freight',
      value: 7
   },
   {
      name: 'Destination',
      value: 8
   },
   {
      name: 'Admin',
      value: 9
   },
   {
    name: 'Full rake',
    value: 10

   }, 
   {
    name: 'Yard To Yard',
    value: 11
   }
]

export const DOOR_TO_DOOR_LEGS_TYPES = [
   {
      name: 'Door To Door',
      value: 1
   }
]


export const PACKING_TYPES = [
   {
      name: "Cartons/Boxes",
      value: 1,
   },
   {
      name: "Bags/Sacks",
      value: 2,
   },
   {
      name: "Drums",
      value: 3,
   },
   {
      name: "Cylinders",
      value: 4,
   },
   {
      name: "Pallets",
      value: 5,
   },
   {
      name: "Boxes",
      value: 6,
   },
   {
      name: "Bottles",
      value: 7,
   },
   {
      name: "Glass Bottles",
      value: 8,
   },
   {
      name: "Cases",
      value: 9,
   },
   {
      name: "Free Flowing",
      value: 10,
   },
   {
      name: "Multiple Loose Units",
      value: 11,
   },
   {
      name: "Odd / Various Shapes",
      value: 12,
   },
   {
      name: "Tanker",
      value: 13,
   },
   {
      name: "Mixed Packages",
      value: 14,
   },
   {
      name: "Documents",
      value: 15,
   },
   {
      name: "Bundles",
      value: 16,
   },
   {
      name: "Poles",
      value: 17,
   },
   {
      name: "Cartoons",
      value: 18,
   }
];

export const PRODUCT_TYPE = [
   {
      name: "F & V",
      value: 1,
   },
   {
      name: "Onion",
      value: 2,
   },
   {
      name: "Potato",
      value: 3,
   },
   {
      name: "Tomato",
      value: 4,
   },
   {
      name: "Grapes",
      value: 5,
   },
   {
      name: "Oranges",
      value: 6,
   },
   {
      name: "Empty Crates",
      value: 7,
   },
   {
      name: "Others",
      value: 8,
   },
   {
      name: "Solid Petrochemical",
      value: 20
  }
];


export const COST_TYPE = [
   {
      name: 'INR',
      value: 1
   },
   {
      name: 'USD',
      value: 2
   }
];


export const MOVEMENT_TYPE = [
   {
      name: 'Door To Door',
      value: 1
   },
   {
      name: 'Leg Wise',
      value: 2
   }
];

export const ZONE_LIST ={
   slab: '',
   price: '',
   tat: ''
}


export const Courier_data = {
   'Central': {
      'Central' : [{
         ...ZONE_LIST
      }],
      'East': [{
         ...ZONE_LIST
      }],
      'West': [{
         ...ZONE_LIST
      }],
      'South': [{
         ...ZONE_LIST
      }],
      'North': [{
         ...ZONE_LIST
      }],
      'J And K': [{
         ...ZONE_LIST
      }],
      'North East': [{
         ...ZONE_LIST
       }]
   },
   'East': {
      'Central' : [{
         ...ZONE_LIST
      }],
      'East': [{
         ...ZONE_LIST
      }],
      'West': [{
         ...ZONE_LIST
      }],
      'South': [{
         ...ZONE_LIST
      }],
      'North': [{
         ...ZONE_LIST
      }],
      'J And K': [{
         ...ZONE_LIST
      }],
      'North East': [{
         ...ZONE_LIST
       }]
   },
   'West': {
      'Central' : [{
         ...ZONE_LIST
      }],
      'East': [{
         ...ZONE_LIST
      }],
      'West': [{
         ...ZONE_LIST
      }],
      'South': [{
         ...ZONE_LIST
      }],
      'North': [{
         ...ZONE_LIST
      }],
      'J And K': [{
         ...ZONE_LIST
      }],
      'North East': [{
         ...ZONE_LIST
       }]
   },
   'South':{
      'Central' : [{
         ...ZONE_LIST
      }],
      'East': [{
         ...ZONE_LIST
      }],
      'West': [{
         ...ZONE_LIST
      }],
      'South': [{
         ...ZONE_LIST
      }],
      'North': [{
         ...ZONE_LIST
      }],
      'J And K': [{
         ...ZONE_LIST
      }],
      'North East': [{
         ...ZONE_LIST
       }]
   },
   'North': {
      'Central' : [{
         ...ZONE_LIST
      }],
      'East': [{
         ...ZONE_LIST
      }],
      'West': [{
         ...ZONE_LIST
      }],
      'South': [{
         ...ZONE_LIST
      }],
      'North': [{
         ...ZONE_LIST
      }],
      'J And K': [{
         ...ZONE_LIST
      }],
      'North East': [{
         ...ZONE_LIST
       }]
   },
   'J And K': {
      'Central' : [{
         ...ZONE_LIST
      }],
      'East': [{
         ...ZONE_LIST
      }],
      'West': [{
         ...ZONE_LIST
      }],
      'South': [{
         ...ZONE_LIST
      }],
      'North': [{
         ...ZONE_LIST
      }],
      'J And K': [{
         ...ZONE_LIST
      }],
      'North East': [{
         ...ZONE_LIST
       }]
   },
   'North East': {
      'Central' : [{
         ...ZONE_LIST
      }],
      'East': [{
         ...ZONE_LIST
      }],
      'West': [{
         ...ZONE_LIST
      }],
      'South': [{
         ...ZONE_LIST
      }],
      'North': [{
         ...ZONE_LIST
      }],
      'J And K': [{
         ...ZONE_LIST
      }],
      'North East': [{
         ...ZONE_LIST
       }]
   }
}



export const STATIC_DATA = [
   
  {
    "id": "f3f94b62a6964a9b82436e8cd1845a55",
    "rfqId": "17fb5d975791432182084ca214888434",
    "vehicleType": null,
    "vehicleTypeName": '',
    "vehicleBodyType": null,
    "vehicleBodyTypeName": '',
    "distance": '1 - 10',
    "distanceUOM": 'KGS',
    "routeCode": "",
    "remarks": "",
    "noOfContainers": 0,
    "consigners": [],
    "consignees": [],
    "multi_mode_leg_trip": [],
    "subTrips": [],
    "stops": [],
    "from": "CENTRAL -> WEST",
    "to": "Slab 1",
    "noOfPickups": null,
    "noOfDrops": null,
    "biddingDetails": {
      "from": 1587387448490,
      "to": 1587362880000,
      "pricingBasis": 1,
      "qbr": 100,
      "tatValue": 7,
      "tatUnit": 1,
      "tatUnitName": "Days",
      "businessVolumeValue": 10,
      "businessVolumeUnit": "",
      "businessVolumeUnitName": "",
      "paymentTerms": 2,
      "paymentCycle": -1,
      "lpp": null
    },
    "ftlStops": [],
    "lclStops": [],
    "legs": [],
    "costs": [],
    "bids": [],
    "slabs": [],
    "lpp": 0,
    "rfqType": 1,
    "showTat": true,
    "rfqServiceType": 4,
    "status": {
      "colorCode": "#228B22",
      "statusText": "L1"
    },
    "price": 19,
    "tat": {
      "tatValue": 7,
      "tatUnit": {
        "tatUnitName": "Days"
      }
    },
  },

  {
    "id": "f3f94b62a6964a9b82436e8cd1845a55",
    "rfqId": "17fb5d975791432182084ca214888434",
    "vehicleType": 55,
    "vehicleTypeName": '',
    "vehicleBodyType": 55,
    "vehicleBodyTypeName": '',
    "distance": '1 - 30',
    "distanceUOM": 'KGS',
    "routeCode": "",
    "remarks": "qwqw",
    "noOfContainers": 1,
    "consigners": [],
    "consignees": [],
    "multi_mode_leg_trip": [],
    "subTrips": [],
    "stops": [
      {
        "id": "81f5d961-2899-49e3-8223-460037addc3e",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "dc526bdb-64cf-40a2-a636-5400633b2c95",
        "city": "Bhuj",
        "state": "Gujarat",
        "country": "India",
        "latitude": 23.2419997,
        "longitude": 69.66693239999995,
        "type": 2,
        "sequence": 1,
        "location": "Bhuj, Gujarat, India"
      }
    ],
    "from": "CENTRAL -> EAST",
    "to": "Slab 1",
    "noOfPickups": 1,
    "noOfDrops": 1,
    "biddingDetails": {
      "from": 1587387448490,
      "to": 1587362880000,
      "pricingBasis": 1,
      "qbr": 100,
      "tatValue": 7,
      "tatUnit": 1,
      "tatUnitName": "Days",
      "businessVolumeValue": 10,
      "businessVolumeUnit": "",
      "businessVolumeUnitName": "",
      "paymentTerms": 2,
      "paymentCycle": -1,
      "lpp": null
    },
    "ftlStops": [
      {
        "id": "ad797e6c-2743-4d39-b9ec-a400b61cfa7c",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "4466a6d2-ba66-40db-bd81-0bb25d32542a",
        "city": "Bhuj",
        "state": "Gujarat",
        "country": "India",
        "latitude": 23.2419997,
        "longitude": 69.66693239999995,
        "type": 2,
        "sequence": 1,
        "location": "Bhuj, Gujarat, India"
      }
    ],
    "lclStops": [
      {
        "id": "397dc1a5-8c25-4dfc-b164-dbfb51b910c5",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      },
      {
        "id": "92cbf38b-d8f5-45dc-a3fe-7bfa5d485e45",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      }
    ],
    "legs": [],
    "costs": [],
    "bids": [],
    "slabs": [],
    "lpp": 0,
    "rfqType": 1,
    "rfqServiceType": 4,
    "status": {
      "colorCode": "#228B22",
      "statusText": "L1"
    },
    "price": 11,
    "tat": {
      "tatValue": 7,
      "tatUnit": {
        "tatUnitName": "Days"
      }
    },
    "challengePrice": 17,
    "counterPrice": 20,
    "counterStatus": 3,
    "isCounter": true,
    "showTat": true,
    "originalPrice": 8000,
    "totalPrice": 100,
    "pricingBasisName": "Rate/KG",
    "isApprovalSent": true,
    "lppList": [],
    "lpp1": 0,
    "lpp2": 0,
    "lpp3": 0,
    "lpp4": 0,
    "lpp5": 0,
    "seekerRemarks": "",
    "providerRemarks": "",
    "cpState": 2,
    "boxPrice": null,
    "tripsCount": 0,
    "tripBidEnd": 0,
    "base_volume": 0,
    "multiModeHeadingCharges": [],
    "tripCostList": [],
    "totalCeilingPrice": [],
    "secTat": {
      "unit": "",
      "value": "",
      "name": ""
    }
  },

   {
       "id": "f3f94b62a6964a9b82436e8cd1845a55",
       "rfqId": "17fb5d975791432182084ca214888434",
       "vehicleType": null,
       "vehicleTypeName": '',
       "vehicleBodyType": null,
       "vehicleBodyTypeName": '',
       "distance": '1 - 10',
       "distanceUOM": 'KGS',
       "routeCode": "",
       "remarks": "",
       "noOfContainers": 0,
       "consigners": [],
       "consignees": [],
       "multi_mode_leg_trip": [],
       "subTrips": [],
       "stops": [],
       "from": "SOUTH -> CENTRAL",
       "to": "Slab 1",
       "noOfPickups": null,
       "noOfDrops": null,
       "showTat": true,
       "biddingDetails": {
         "from": 1587387448490,
         "to": 1587362880000,
         "pricingBasis": 1,
         "qbr": 100,
         "tatValue": 7,
         "tatUnit": 1,
         "tatUnitName": "Days",
         "businessVolumeValue": 10,
         "businessVolumeUnit": "",
         "businessVolumeUnitName": "",
         "paymentTerms": 2,
         "paymentCycle": -1,
         "lpp": null
       },
       "ftlStops": [
       ],
       "lclStops": [
       ],
       "legs": [],
       "costs": [],
       "bids": [],
       "slabs": [],
       "lpp": 0,
       "rfqType": 1,
       "rfqServiceType": 4,
       "status": {
         "colorCode": "#228B22",
         "statusText": "L1"
       },
       "price": 13,
       "tat": {
         "tatValue": 7,
         "tatUnit": {
           "tatUnitName": "Days"
         }
       },
   },

  {
    "id": "9952612452aa4055bb0c51e846434392",
    "rfqId": "17fb5d975791432182084ca214888434",
    "vehicleType": 30,
    "vehicleTypeName": '',
    "vehicleBodyType": 2,
    "vehicleBodyTypeName": '',
    "distance": '11 - 20',
    "distanceUOM": 'KGS',
    "routeCode": "",
    "noOfContainers": 1,
    "consigners": [],
    "consignees": [],
    "multi_mode_leg_trip": [],
    "subTrips": [],
    "stops": [
      {
        "id": "fb6ba899-a4cc-4385-a886-1fb8a36bf51a",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "b7bb6460-d091-45cf-ae0c-8b11ad311999",
        "city": "Mysuru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.2958104,
        "longitude": 76.63938050000002,
        "type": 2,
        "sequence": 1,
        "location": "Mysuru, Karnataka, India"
      }
    ],
    "from": "SOUTH -> CENTRAL",
    "to": "Slab 2",
    "noOfPickups": 1,
    "noOfDrops": 1,
    "biddingDetails": {
      "from": 1587387448490,
      "to": 1587362880000,
      "pricingBasis": 1,
      "qbr": 200,
      "tatValue": 1,
      "tatUnit": 1,
      "tatUnitName": "Days",
      "businessVolumeValue": 1,
      "businessVolumeUnit": 6,
      "businessVolumeUnitName": "Kilo Litres",
      "paymentTerms": 2,
      "paymentCycle": -1,
      "lpp": null
    },
    "ftlStops": [
      {
        "id": "044518c6-c4d7-46fc-ab6f-a0937f686f5b",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "76c198bd-ffdc-4453-93a3-ba99b7796abb",
        "city": "Mysuru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.2958104,
        "longitude": 76.63938050000002,
        "type": 2,
        "sequence": 1,
        "location": "Mysuru, Karnataka, India"
      }
    ],
    "lclStops": [
      {
        "id": "a625e953-55dc-4330-a2a2-e2005e6d7476",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      },
      {
        "id": "afd3631d-67c4-4431-93a1-99a572d6bc0e",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      }
    ],
    "legs": [],
    "costs": [],
    "bids": [],
    "slabs": [],
    "lpp": 890,
    "rfqType": 1,
    "rfqServiceType": 4,
    "status": {
      "colorCode": "#228B22",
      "statusText": "L1"
    },
    "price": 16,
    "tat": {
      "tatValue": 1,
      "tatUnit": {
        "tatUnitName": "Days",
        "tatUnit": 1
      }
    },
    "challengePrice": 18,
    "counterPrice": 25,
    "counterStatus": 3,
    "isCounter": true,
    "showTat": true,
    "originalPrice": 21000,
    "totalPrice": 23788,
    "pricingBasisName": "Rate/KG",
    "lppList": [],
    "lpp1": 890,
    "lpp2": 0,
    "lpp3": 0,
    "lpp4": 0,
    "lpp5": 0,
    "seekerRemarks": "",
    "providerRemarks": "",
    "cpState": 1,
    "boxPrice": null,
    "tripsCount": 0,
    "tripBidEnd": 0,
    "base_volume": 0,
    "multiModeHeadingCharges": [],
    "tripCostList": [],
    "totalCeilingPrice": [],
    "secTat": {
      "unit": "",
      "value": "",
      "name": ""
    }
  },
  {
    "id": "6fed19be2c31478a83639448f16ddd90",
    "rfqId": "17fb5d975791432182084ca214888434",
    "vehicleType": 57,
    "vehicleTypeName": '',
    "vehicleBodyType": 1,
    "vehicleBodyTypeName": '',
    "distance": '1 - 30',
    "distanceUOM": 'KGS',
    "routeCode": "",
    "noOfContainers": 1,
    "consigners": [],
    "consignees": [],
    "multi_mode_leg_trip": [],
    "subTrips": [],
    "stops": [
      {
        "id": "89e80aa7-a449-4904-9fff-7645b2cfa401",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "b439de84-c1fe-4337-bc28-926c48382ab6",
        "city": "Yellapur",
        "state": "Karnataka",
        "country": "India",
        "latitude": 14.9643112,
        "longitude": 74.71207679999998,
        "type": 2,
        "sequence": 1,
        "location": "Yellapur, Karnataka, India"
      }
    ],
    "from": " EAST -> NORTH",
    "to": "Slab 1",
    "noOfPickups": 1,
    "noOfDrops": 1,
    "biddingDetails": {
      "from": 1587387448490,
      "to": 1587362880000,
      "pricingBasis": 1,
      "qbr": 210,
      "tatValue": 2,
      "tatUnit": 1,
      "tatUnitName": "Days",
      "businessVolumeValue": 1,
      "businessVolumeUnit": 6,
      "businessVolumeUnitName": "Kilo Litres",
      "paymentTerms": 2,
      "paymentCycle": -1,
      "lpp": null
    },
    "ftlStops": [
      {
        "id": "9b3c34b3-aae5-4306-8e28-aff6d60c7ab7",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "5c76e738-b8c5-4a6f-8754-3214f4ee050e",
        "city": "Yellapur",
        "state": "Karnataka",
        "country": "India",
        "latitude": 14.9643112,
        "longitude": 74.71207679999998,
        "type": 2,
        "sequence": 1,
        "location": "Yellapur, Karnataka, India"
      }
    ],
    "lclStops": [
      {
        "id": "6cfde5e1-6184-4d19-9a5c-24bae74868d8",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      },
      {
        "id": "0d73fff1-1289-4dd2-b7a9-90a5bf4da877",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      }
    ],
    "legs": [],
    "costs": [],
    "bids": [],
    "slabs": [],
    "lpp": 0,
    "rfqType": 1,
    "rfqServiceType": 4,
    "status": {
      "colorCode": "#228B22",
      "statusText": "L1"
    },
    "price": 15,
    "tat": {
      "tatValue": 2,
      "tatUnit": {
        "tatUnitName": "Days",
        "tatUnit": 1
      }
    },
    "showTat": true,
    "originalPrice": 200000,
    "totalPrice": 210001,
    "pricingBasisName": "Rate/KG",
    "lppList": [],
    "lpp1": 0,
    "lpp2": 0,
    "lpp3": 0,
    "lpp4": 0,
    "lpp5": 0,
    "seekerRemarks": null,
    "providerRemarks": null,
    "cpState": null,
    "boxPrice": null,
    "tripsCount": 0,
    "tripBidEnd": 0,
    "base_volume": 0,
    "multiModeHeadingCharges": [],
    "tripCostList": [],
    "totalCeilingPrice": [],
    "secTat": {
      "unit": "",
      "value": "",
      "name": ""
    }
  },

  {
       "id": "f3f94b62a6964a9b82436e8cd1845a55",
       "rfqId": "17fb5d975791432182084ca214888434",
       "vehicleType": null,
       "vehicleTypeName": '',
       "vehicleBodyType": null,
       "vehicleBodyTypeName": '',
       "distance": '1 - 20',
       "distanceUOM": 'KGS',
       "routeCode": "",
       "remarks": "",
       "noOfContainers": 0,
       "consigners": [],
       "consignees": [],
       "multi_mode_leg_trip": [],
       "subTrips": [],
       "stops": [],
       from: "EAST -> WEST",
       "to": "Slab 1",
       "noOfPickups": null,
       "noOfDrops": null,
       "biddingDetails": {
         "from": 1587387448490,
         "to": 1587362880000,
         "pricingBasis": 1,
         "qbr": 100,
         "tatValue": 7,
         "tatUnit": 1,
         "tatUnitName": "Days",
         "businessVolumeValue": 10,
         "businessVolumeUnit": "",
         "businessVolumeUnitName": "",
         "paymentTerms": 2,
         "paymentCycle": -1,
         "lpp": null
       },
       "showTat": true,
       "ftlStops": [
       ],
       "lclStops": [
       ],
       "legs": [],
       "costs": [],
       "bids": [],
       "slabs": [],
       "lpp": 0,
       "rfqType": 1,
       "rfqServiceType": 4,
       "status": {
         "colorCode": "#228B22",
         "statusText": "L1"
       },
       "price": 13,
       "tat": {
         "tatValue": 7,
         "tatUnit": {
           "tatUnitName": "Days"
         }
       },
   },

  {
    "id": "9952612452aa4055bb0c51e846434392",
    "rfqId": "17fb5d975791432182084ca214888434",
    "vehicleType": 30,
    "vehicleTypeName": '',
    "vehicleBodyType": 2,
    "vehicleBodyTypeName": '',
    "distance": '1 - 20',
    "distanceUOM": 'KGS',
    "routeCode": "",
    "noOfContainers": 1,
    "consigners": [],
    "consignees": [],
    "multi_mode_leg_trip": [],
    "subTrips": [],
    "stops": [
      {
        "id": "fb6ba899-a4cc-4385-a886-1fb8a36bf51a",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "b7bb6460-d091-45cf-ae0c-8b11ad311999",
        "city": "Mysuru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.2958104,
        "longitude": 76.63938050000002,
        "type": 2,
        "sequence": 1,
        "location": "Mysuru, Karnataka, India"
      }
    ],
    "from": "NORTH -> CENTRAL",
    "to": "Slab 1",
    "noOfPickups": 1,
    "noOfDrops": 1,
    "biddingDetails": {
      "from": 1587387448490,
      "to": 1587362880000,
      "pricingBasis": 1,
      "qbr": 200,
      "tatValue": 1,
      "tatUnit": 1,
      "tatUnitName": "Days",
      "businessVolumeValue": 1,
      "businessVolumeUnit": 6,
      "businessVolumeUnitName": "Kilo Litres",
      "paymentTerms": 2,
      "paymentCycle": -1,
      "lpp": null
    },
    "ftlStops": [
      {
        "id": "044518c6-c4d7-46fc-ab6f-a0937f686f5b",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "76c198bd-ffdc-4453-93a3-ba99b7796abb",
        "city": "Mysuru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.2958104,
        "longitude": 76.63938050000002,
        "type": 2,
        "sequence": 1,
        "location": "Mysuru, Karnataka, India"
      }
    ],
    "lclStops": [
      {
        "id": "a625e953-55dc-4330-a2a2-e2005e6d7476",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      },
      {
        "id": "afd3631d-67c4-4431-93a1-99a572d6bc0e",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      }
    ],
    "legs": [],
    "costs": [],
    "bids": [],
    "slabs": [],
    "lpp": 890,
    "rfqType": 1,
    "rfqServiceType": 4,
    "status": {
      "colorCode": "#228B22",
      "statusText": "L1"
    },
    "price": 16,
    "tat": {
      "tatValue": 1,
      "tatUnit": {
        "tatUnitName": "Days",
        "tatUnit": 1
      }
    },
    "challengePrice": 18,
    "counterPrice": 25,
    "counterStatus": 3,
    "isCounter": true,
    "showTat": true,
    "originalPrice": 21000,
    "totalPrice": 23788,
    "pricingBasisName": "Rate/KG",
    "lppList": [],
    "lpp1": 890,
    "lpp2": 0,
    "lpp3": 0,
    "lpp4": 0,
    "lpp5": 0,
    "seekerRemarks": "",
    "providerRemarks": "",
    "cpState": 1,
    "boxPrice": null,
    "tripsCount": 0,
    "tripBidEnd": 0,
    "base_volume": 0,
    "multiModeHeadingCharges": [],
    "tripCostList": [],
    "totalCeilingPrice": [],
    "secTat": {
      "unit": "",
      "value": "",
      "name": ""
    }
  },
  {
    "id": "6fed19be2c31478a83639448f16ddd90",
    "rfqId": "17fb5d975791432182084ca214888434",
    "vehicleType": 57,
    "vehicleTypeName": '',
    "vehicleBodyType": 1,
    "vehicleBodyTypeName": '',
    "distance": '1 - 10',
    "distanceUOM": 'KGS',
    "routeCode": "",
    "noOfContainers": 1,
    "consigners": [],
    "consignees": [],
    "multi_mode_leg_trip": [],
    "subTrips": [],
    "stops": [
      {
        "id": "89e80aa7-a449-4904-9fff-7645b2cfa401",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "b439de84-c1fe-4337-bc28-926c48382ab6",
        "city": "Yellapur",
        "state": "Karnataka",
        "country": "India",
        "latitude": 14.9643112,
        "longitude": 74.71207679999998,
        "type": 2,
        "sequence": 1,
        "location": "Yellapur, Karnataka, India"
      }
    ],
    "from": "NORTH -> WEST",
    "to": "Slab 2",
    "noOfPickups": 1,
    "noOfDrops": 1,
    "biddingDetails": {
      "from": 1587387448490,
      "to": 1587362880000,
      "pricingBasis": 1,
      "qbr": 210,
      "tatValue": 2,
      "tatUnit": 1,
      "tatUnitName": "Days",
      "businessVolumeValue": 1,
      "businessVolumeUnit": 6,
      "businessVolumeUnitName": "Kilo Litres",
      "paymentTerms": 2,
      "paymentCycle": -1,
      "lpp": null
    },
    "ftlStops": [
      {
        "id": "9b3c34b3-aae5-4306-8e28-aff6d60c7ab7",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "5c76e738-b8c5-4a6f-8754-3214f4ee050e",
        "city": "Yellapur",
        "state": "Karnataka",
        "country": "India",
        "latitude": 14.9643112,
        "longitude": 74.71207679999998,
        "type": 2,
        "sequence": 1,
        "location": "Yellapur, Karnataka, India"
      }
    ],
    "lclStops": [
      {
        "id": "6cfde5e1-6184-4d19-9a5c-24bae74868d8",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      },
      {
        "id": "0d73fff1-1289-4dd2-b7a9-90a5bf4da877",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      }
    ],
    "legs": [],
    "costs": [],
    "bids": [],
    "slabs": [],
    "lpp": 0,
    "rfqType": 1,
    "rfqServiceType": 4,
    "status": {
      "colorCode": "#228B22",
      "statusText": "L1"
    },
    "price": 15,
    "tat": {
      "tatValue": 2,
      "tatUnit": {
        "tatUnitName": "Days",
        "tatUnit": 1
      }
    },
    "showTat": true,
    "originalPrice": 200000,
    "totalPrice": 210001,
    "pricingBasisName": "Rate/KG",
    "lppList": [],
    "lpp1": 0,
    "lpp2": 0,
    "lpp3": 0,
    "lpp4": 0,
    "lpp5": 0,
    "seekerRemarks": null,
    "providerRemarks": null,
    "cpState": null,
    "boxPrice": null,
    "tripsCount": 0,
    "tripBidEnd": 0,
    "base_volume": 0,
    "multiModeHeadingCharges": [],
    "tripCostList": [],
    "totalCeilingPrice": [],
    "secTat": {
      "unit": "",
      "value": "",
      "name": ""
    }
  },

  {
    "id": "f3f94b62a6964a9b82436e8cd1845a55",
    "rfqId": "17fb5d975791432182084ca214888434",
    "vehicleType": null,
    "vehicleTypeName": '',
    "vehicleBodyType": null,
    "vehicleBodyTypeName": '',
    "distance": '1 - 10',
    "distanceUOM": 'KGS',
    "routeCode": "",
    "remarks": "",
    "noOfContainers": 0,
    "consigners": [],
    "consignees": [],
    "multi_mode_leg_trip": [],
    "subTrips": [],
    "stops": [
      
    ],
    "from": "J & K -> CENTRAL",
    "to": "Slab 1",
    "noOfPickups": null,
    "noOfDrops": null,
    "biddingDetails": {
      "from": 1587387448490,
      "to": 1587362880000,
      "pricingBasis": 1,
      "qbr": 100,
      "tatValue": 7,
      "tatUnit": 1,
      "tatUnitName": "Days",
      "businessVolumeValue": 10,
      "businessVolumeUnit": "",
      "businessVolumeUnitName": "",
      "paymentTerms": 2,
      "paymentCycle": -1,
      "lpp": null
    },
    "showTat": true,
    "ftlStops": [
    ],
    "lclStops": [
    ],
    "legs": [],
    "costs": [],
    "bids": [],
    "slabs": [],
    "lpp": 0,
    "rfqType": 1,
    "rfqServiceType": 4,
    "status": {
      "colorCode": "#228B22",
      "statusText": "L1"
    },
    "price": 18,
    "tat": {
      "tatValue": 7,
      "tatUnit": {
        "tatUnitName": "Days"
      }
    },
  },

  {
    "id": "f3f94b62a6964a9b82436e8cd1845a55",
    "rfqId": "17fb5d975791432182084ca214888434",
    "vehicleType": null,
    "vehicleTypeName": '',
    "vehicleBodyType": null,
    "vehicleBodyTypeName": '',
    "distance": '11 - 20',
    "distanceUOM": 'KGS',
    "routeCode": "",
    "remarks": "",
    "noOfContainers": 0,
    "consigners": [],
    "consignees": [],
    "multi_mode_leg_trip": [],
    "subTrips": [],
    "stops": [],
    "from": "J & K -> WEST",
    "to": "Slab 2",
    "noOfPickups": null,
    "noOfDrops": null,
    "biddingDetails": {
      "from": 1587387448490,
      "to": 1587362880000,
      "pricingBasis": 1,
      "qbr": 100,
      "tatValue": 7,
      "tatUnit": 1,
      "tatUnitName": "Days",
      "businessVolumeValue": 10,
      "businessVolumeUnit": "",
      "businessVolumeUnitName": "",
      "paymentTerms": 2,
      "paymentCycle": -1,
      "lpp": null
    },
    "showTat": true,
    "ftlStops": [],
    "lclStops": [],
    "legs": [],
    "costs": [],
    "bids": [],
    "slabs": [],
    "lpp": 0,
    "rfqType": 1,
    "rfqServiceType": 4,
    "status": {
      "colorCode": "#228B22",
      "statusText": "L1"
    },
    "price": 19,
    "tat": {
      "tatValue": 7,
      "tatUnit": {
        "tatUnitName": "Days"
      }
    },
  },

  {
    "id": "a9ddcbfe4cd645178e78e5626bd8afd6",
    "rfqId": "17fb5d975791432182084ca214888434",
    "vehicleType": 46,
    "vehicleTypeName": '',
    "vehicleBodyType": 30,
    "vehicleBodyTypeName": '',
    "distance": '1 - 10',
    "distanceUOM": 'KGS',
    "routeCode": "",
    "noOfContainers": 1,
    "consigners": [],
    "consignees": [],
    "multi_mode_leg_trip": [],
    "subTrips": [],
    "stops": [
      {
        "id": "a91ab289-b82d-456f-82d8-92d0208f066f",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "ec6fef47-19d7-4842-a478-459249b0a669",
        "city": "Prayagraj",
        "state": "Uttar Pradesh",
        "country": "India",
        "latitude": 25.4358011,
        "longitude": 81.846311000001,
        "type": 2,
        "sequence": 1,
        "location": "Prayagraj, Uttar Pradesh, India"
      }
    ],
    "from": "EAST -> CENTRAL",
    "to": "Slab 1",
    "noOfPickups": 1,
    "noOfDrops": 1,
    "biddingDetails": {
      "from": 1587387448490,
      "to": 1587362880000,
      "pricingBasis": 1,
      "qbr": 150,
      "tatValue": 7,
      "tatUnit": 1,
      "tatUnitName": "Days",
      "businessVolumeValue": 1,
      "businessVolumeUnit": 6,
      "businessVolumeUnitName": "Kilo Litres",
      "paymentTerms": 2,
      "paymentCycle": -1,
      "lpp": null
    },
    "ftlStops": [
      {
        "id": "7c2c3c62-c391-4366-8fd3-b4d8f7053cbf",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "latitude": 12.9715987,
        "longitude": 77.59456269999998,
        "type": 1,
        "sequence": 1,
        "location": "Bangalore, Karnataka, India"
      },
      {
        "id": "01919d1f-55c1-4a89-b1fa-f4ab22d898cf",
        "city": "Prayagraj",
        "state": "Uttar Pradesh",
        "country": "India",
        "latitude": 25.4358011,
        "longitude": 81.846311000001,
        "type": 2,
        "sequence": 1,
        "location": "Prayagraj, Uttar Pradesh, India"
      }
    ],
    "lclStops": [
      {
        "id": "2c5168b0-0d13-4f06-94fc-9b34a3532520",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      },
      {
        "id": "4880d0e7-3fc9-4953-b1ab-53fcf1b3d937",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      }
    ],
    "legs": [],
    "costs": [],
    "bids": [],
    "slabs": [],
    "lpp": 0,
    "rfqType": 1,
    "rfqServiceType": 4,
    "status": {},
    "showTat": true,
    "pricingBasisName": "Rate/KG",
    "lppList": [],
    "lpp1": 0,
    "lpp2": 0,
    "lpp3": 0,
    "lpp4": 0,
    "lpp5": 0,
    "tripsCount": 0,
    "tripBidEnd": 0,
    "base_volume": 0,
    "multiModeHeadingCharges": [],
    "tripCostList": [],
    "totalCeilingPrice": [],
    "secTat": {
      "unit": "",
      "value": "",
      "name": ""
    }
  },
  {
    "id": "3d7c6bbda79d4af8b1b525af8a880045",
    "rfqId": "17fb5d975791432182084ca214888434",
    "vehicleType": 37,
    "vehicleTypeName": '',
    "vehicleBodyType": 1,
    "vehicleBodyTypeName": '',
    "distance": '11 - 20',
    "distanceUOM": 'KGS',
    "routeCode": "",
    "noOfContainers": 1,
    "consigners": [],
    "consignees": [],
    "multi_mode_leg_trip": [],
    "subTrips": [],
    "stops": [
      {
        "id": "ea39e2a2-cdd0-4c29-90a3-4aa891736093",
        "city": "Yellapur",
        "state": "Karnataka",
        "country": "India",
        "latitude": 14.9643112,
        "longitude": 74.71207679999998,
        "type": 1,
        "sequence": 1,
        "location": "Yellapur, Karnataka, India"
      },
      {
        "id": "c9db6793-ee1b-47af-a075-cc4ea95e2be5",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "latitude": 19.0759837,
        "longitude": 72.87765590000004,
        "type": 2,
        "sequence": 1,
        "location": "Mumbai, Maharashtra, India"
      }
    ],
    "from": "EAST -> J & K",
    "to": "Slab 2",
    "noOfPickups": 1,
    "noOfDrops": 1,
    "biddingDetails": {
      "from": 1587387448490,
      "to": 1587362880000,
      "pricingBasis": 1,
      "qbr": 50,
      "tatValue": 2,
      "tatUnit": 1,
      "tatUnitName": "Days",
      "businessVolumeValue": 1,
      "businessVolumeUnit": 6,
      "businessVolumeUnitName": "Kilo Litres",
      "paymentTerms": 2,
      "paymentCycle": -1,
      "lpp": null
    },
    "ftlStops": [
      {
        "id": "8b1735e2-60b1-4e92-be95-47a036fbf274",
        "city": "Yellapur",
        "state": "Karnataka",
        "country": "India",
        "latitude": 14.9643112,
        "longitude": 74.71207679999998,
        "type": 1,
        "sequence": 1,
        "location": "Yellapur, Karnataka, India"
      },
      {
        "id": "69b3b561-951e-4e15-a58e-fbe1dd6496a6",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "latitude": 19.0759837,
        "longitude": 72.87765590000004,
        "type": 2,
        "sequence": 1,
        "location": "Mumbai, Maharashtra, India"
      }
    ],
    "lclStops": [
      {
        "id": "ef15d6a4-65e5-4792-9666-816c89fcc882",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      },
      {
        "id": "17ce976f-c42d-44af-863c-a3c35ce6519b",
        "from": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": "",
          "longitude": "",
          "location": ""
        },
        "to": {
          "city": "",
          "state": "",
          "country": "",
          "latitude": 0,
          "longitude": 0,
          "location": ""
        },
        "fromLandmark": "",
        "toLandmark": "",
        "slabs": []
      }
    ],
    "legs": [],
    "costs": [],
    "bids": [],
    "slabs": [],
    "lpp": 0,
    "rfqType": 1,
    "rfqServiceType": 4,
    "status": {},
    "showTat": true,
    "pricingBasisName": "Rate/KG",
    "lppList": [],
    "lpp1": 0,
    "lpp2": 0,
    "lpp3": 0,
    "lpp4": 0,
    "lpp5": 0,
    "tripsCount": 0,
    "tripBidEnd": 0,
    "base_volume": 0,
    "multiModeHeadingCharges": [],
    "tripCostList": [],
    "totalCeilingPrice": [],
    "secTat": {
      "unit": "",
      "value": "",
      "name": ""
    }
  },
  
]

export const ROAD_RAIL_COASTAL_LEGS = [
  { 
    name: 'Plant To Yard',
    label: 'Plant To Yard',
    value: 1 , 
    childs: [
      { name: 'Transporter', name2: 'Transportation At Origin', value: 2 },
      { name: 'Handling Agent', name2: 'Handling Agent At Origin', value: 21 },
      { name: 'Surveyor', name2: 'Surveyor At Origin', value: 9 },
      { name: 'Lashing', name2: 'Lashing At Origin',  value: 10 },
      { name: 'Security Charges', name2: 'Security Charges At Origin', value: 8},
      // { name: 'GPS Vendor Charges', value: 6},
      { name: 'Warehousing Cost', name2: 'Warehousing Cost At Origin', value: 8},
      { name: 'Port charges', name2: 'Port charges At Origin', value: 8},
      { name: 'Yard charges', name2: 'Yard charges At Origin', value: 8},
      { name: 'Other charges', name2: 'Other charges At Origin', value: 8}
    ]
  },
  // { 
  //   name: 'Yard To Yard (BCN)', 
  //   label: 'Yard To Yard (BCN)',
  //   value: 2,
  //   childs: [
  //     // { name: 'Railway (Railway Freight + Wharfage + Demurrage + Indent Cancellation)', value: 8}
  //   ]
  // },
  { 
    name: 'Yard To Yard (Container)', 
    label: 'Yard To Yard (Conatiner)',
    value: 6,
    childs: [
      // { name: 'Railway (Railway Freight + Wharfage + Demurrage + Indent Cancellation)', value: 8}
      { name: 'Railway Charges', value: 8}
    ]
  },
  {
    name: 'Yard To Port',
    label: 'Yard To Port',
    value: 3,
    childs: [
      { name: 'Transporter', value: 2 },
      { name: 'Handling Agent', value: 21 },
      { name: 'Surveyor', value: 9 },
      { name: 'Lashing', value: 10},
      { name: 'Security Charges', value: 8},
      // { name: 'GPS Vendor Charges', value: 8},
      // { name: 'Warehousing Cost(At private Warehouse Unloading)', value: 8},
      { name: 'Warehousing Cost', value: 8},
      { name: 'Port charges', value: 8},
      { name: 'Yard charges', value: 8},
      { name: 'Other charges', value: 8}
    ]
  },
  {
    name: 'Yard To Depot',
    label: 'Yard To Depot',
    value: 8,
    childs: [
      { name: 'Transporter', name2: 'Transportation At Destination', value: 2 },
      { name: 'Handling Agent', name2: 'Handling Agent At Destination', value: 21 },
      { name: 'Surveyor', name2: 'Surveyor At Destination', value: 9 },
      { name: 'Lashing', name2: 'Lashing At Destination', value: 10},
      { name: 'Security Charges', name2: 'Security Charges At Destination', value: 8},
      // { name: 'GPS Vendor Charges', value: 8},
      // { name: 'Warehousing Cost(At private Warehouse Unloading)', value: 8},
      { name: 'Warehousing Cost', name2: 'Warehousing Cost At Destination', value: 8},
      { name: 'Port charges', name2: 'Port charges At Destination', value: 8},
      { name: 'Yard charges', name2: 'Yard charges At Destination', value: 8},
      { name: 'Other charges', name2: 'Other charges At Destination', value: 8}
    ]
  },
  {
    name: 'Plant To Port',
    label: 'Plant To Port',
    value: 7,
    childs: [
      { name: 'Transporter', name2: 'Transportation At Origin', value: 2 },
      { name: 'Handling Agent', name2: 'Handling Agent At Origin', value: 21 },
      { name: 'Surveyor', name2: 'Surveyor At Origin', value: 9 },
      { name: 'Lashing', name2: 'Lashing At Origin', value: 10},
      { name: 'Security Charges', name2: 'Security Charges At Origin', value: 8},
      // { name: 'GPS Vendor Charges', value: 8},
      // { name: 'Warehousing Cost(At private Warehouse Unloading)', value: 8},
      { name: 'Warehousing Cost', name2: 'Warehousing Cost At Origin', value: 8},
      { name: 'Port charges', name2: 'Port charges At Origin', value: 8},
      { name: 'Yard charges', name2: 'Yard charges At Origin', value: 8},
      { name: 'Other charges', name2: 'Other charges At Origin', value: 8}
    ] 
  },
  {
    name: 'Port To Port',
    label: 'Port To Port',
    value: 4,
    childs: [
      { name: 'Port charges', value: 8 }, 
      { name: 'Port Authorities', value: 8 }
    ]
  },
  {
    name: 'Port To Depot',
    label: 'Port To Depot',
    value: 5,
    childs: [
      { name: 'Transporter', name2: 'Transportation At Destination', value: 2 },
      { name: 'Handling Agent', name2: 'Handling Agent At Destination', value: 21 },
      { name: 'Surveyor', name2: 'Surveyor At Destination', value: 9 },
      { name: 'Lashing', name2: 'Lashing At Destination', value: 10},
      { name: 'Security Charges', name2: 'Security Charges At Destination', value: 8},
      // { name: 'GPS Vendor Charges', value: 6},
      // { name: 'Warehousing Cost(At private Warehouse Unloading)', value: 8},
      { name: 'Warehousing Cost', name2: 'Warehousing Cost At Destination', value: 8},
      { name: 'Port charges', name2: 'Port charges At Destination', value: 8},
      { name: 'Yard charges', name2: 'Yard charges At Destination', value: 8},
      { name: 'Other charges', name2: 'Other charges At Destination', value: 8}
    ]
  },
  {
    name: 'Yard To Party',
    label: 'Yard To Party',
    value: 9,
    childs: [
      { name: 'Transporter', name2: 'Transportation At Destination', value: 2 },
    ]
  },
  {
    name: 'Door To Door',
    label: 'Door To Door',
    value: 10,
    childs: [
      { name: 'Transporter', value: 2 },
    ]
  },
  {
      name: 'Door to Door Container',
      label: 'Door to Door Container',
      value: 11,
      childs: [
         { name: 'Transporter', value: 2 }
      ]
  },
  {
      name: 'Plant to Destination ICD',
      label: 'Plant to Destination ICD',
      value: 12,
      childs: [
         { name: 'Transporter', value: 2 }
      ]
   },
   {
      name: 'Destination ICD to Depot',
      label: 'Destination ICD to Depot',
      value: 13,
      childs: [
         { name: 'Transporter', value: 2 }
      ]
   },
   {
      name: 'Destination ICD to Consignee',
      label: 'Destination ICD to Consignee',
      value: 14,
      childs: [
         { name: 'Transporter', value: 2 }
      ]
   }
] 

export const PROVIDER_TYPES = [
  { name: 'Transporter', value: 2 },
  { name: 'Handling Agent', value: 21 },
  { name: 'Surveyor', value: 9 },
  { name: 'Lashers', value: 10},
  { name: 'Aggregators', value: 8},
  { name: 'Shipping Liners', value: 22},
  { name: 'Buyers', value: 24}
]

export const SERVICE_TYPE_CATEGORIES = [
  {name: 'Sea Freight', value: 1},
  {name: 'Air Freight', value: 2}
]

export const CARGO_TYPE = [
  {name: 'Hazardous / DG Goods', value: 1},
  {name: 'Non Hazardous / Non-DG Goods', value: 2}
]

export const METRIC_SYSTEM = [
  {name: 'Metric (Kg, Cm)', value: 1},
  {name: 'Imperial', value: 2}
]

export const METRIC_SYSTEM_CONVERSION = [
  {name: 'cms', value: 1, metricvalue: 1, calValue: 6000},
  {name: 'mtrs', value: 2, metricvalue: 1, calValue: 0.06},
  {name: 'inches', value: 3, metricvalue: 1, calValue: 366},
  {name: 'pounds', value: 3, metricvalue: 2, calValue: 166}
]

export const CARGO_PARTICULARS = {
  cargoPackingType: '',
  length: '',
  breadth: '',
  height: '',
  quantity: '',
  uom: '',
  netWeight: '',
  grossWeight: '',
  volumeWeight: '',
  chargableWeight: ''
}
export const LEGS_TYPES_SEA = [
  {
    name: 'Door To Sea Port',
    value: 1
  },
  {
    name: 'Sea Port To Sea Port',
    value: 2
  },
  {
    name: 'Sea Port To Door',
    value: 3
  },
]

export const LEGS_TYPES_AIR = [
  {
    name: 'Door To AirPort',
    value: 1
  },
  {
    name: 'AirPort To AirPort',
    value: 2
  },
  {
    name: 'AirPort To Door',
    value: 3
  }
]

export const UOM_CARGO_PACKING_TYPE = [
  {name: 'cms', value: 1, cbm: 100},
  {name: 'mtrs', value: 2, cbm: 1},
  {name: 'inches', value: 3, cbm: 39.37}
]

export const CARGO_SHIPMENT = [
  { name: 'Sea Shipment', value: 1 },
  { name: 'Air Shipment', value: 2 }
]


export const BAGS_LOAD = [
  { name: 'Bags', value: 1 },
  { name: 'Bulk', value: 2 },
  { name: 'Both', value: 3}
]
