# Federation Marking Sheet API

Marking sheets is used for Dressage, Freestyle, Para-dressage, Eventing and more. These sheets is created within app, and mapped to your specified judgement id or rule code.

As you will put a lot of effort creating this sheets we want to make sure that you are able to re-use this information outside app.equipe.com.


## Authentication

Login to your account. Visit you profile page and click show API-Key. This key should be set in the X-API-KEY header on every request.

## Marking sheets

This will return all marking sheets, both FEI and created specific for your own federation.

`GET /federations/:federation_id/marking_sheets.json`

###### Example JSON request

```json
[
  {
    "id": 307,
    "federation": "FEI",
    "name": "FEI Grand Prix 16-25",
    "sp": "E",
    "year": "2009",
    "course_length": "60",
    "time": "6",
    "type": "D",
    "max_score": 430,
    "format": {
      "pdf": "https://app.equipe.com/federations/4/marking_sheets/307.pdf",
      "xml": "https://app.equipe.com/federations/4/marking_sheets/307.xml",
      "json": "https://app.equipe.com/federations/4/marking_sheets/307.json"
    }
  },
  {
    "id": 306,
    "federation": "FEI",
    "name": "FEI Ind. Comp. Test Regional Games",
    "sp": "E",
    "year": "1997",
    "course_length": "60",
    "time": "6,5",
    "type": "D",
    "max_score": 370,
    "format": {
      "pdf": "https://app.equipe.com/federations/4/marking_sheets/306.pdf",
      "xml": "https://app.equipe.com/federations/4/marking_sheets/306.xml",
      "json": "https://app.equipe.com/federations/4/marking_sheets/306.json"
    }
  }
]
```

Attribute | Type | Mandatory | Description
--- | :---: | :---: | ---
federation | string | Yes
name | string | Yes
sp | string | Yes | Language
year | string | Yes | Edition
course_length | string | Yes
time | string | Yes
type | string | Yes
max_score | integer | Yes
format | url | object | Marking sheet in the different formats

Follow the links to get the marking sheet in pdf or as json with full details.

# Marking sheet

`GET federations/3/marking_sheets/10007.json`

###### Example JSON request

```json
{
  "id":10007,
  "name":"FEI Dressage Test Nr 6",
  "year":"2002",
  "course_length":"100",
  "time":"9",
  "t":"A",
  "sp":"E",
  "ord":150,
  "max_score":200,
  "scale":10,
  "bridle":"",
  "deduction":null,
  "sort_desc":null,
  "federation":"ERL",
  "items":[
    {
      "index":0,
      "section":"technical",
      "group_no":"1",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "A",
        "X",
        "",
        "XCH",
        "",
        ""
      ],
      "rows":[
        "Enter ar working tot",
        "Halt - Salute",
        "Proceed at working trot",
        "Track to the left",
        "",
        ""
      ]
    },
    {
      "index":1,
      "section":"technical",
      "group_no":"2",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "HX",
        "X",
        "",
        "KAF",
        "",
        ""
      ],
      "rows":[
        "Collected trot",
        "Reins in one hand an circle to the right,",
        "20 m diameter",
        "Working trot and reins at will",
        "",
        ""
      ]
    },
    {
      "index":2,
      "section":"technical",
      "group_no":"3",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "FPXSH",
        "HCM",
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Extended trot",
        "Working trot",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "index":3,
      "section":"technical",
      "group_no":"4",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "MX",
        "X",
        "",
        "FAK",
        "",
        ""
      ],
      "rows":[
        "Collected trot",
        "Reins in one hand and circle to the left,",
        "20 m diameter",
        "Working trot and reins at will",
        "",
        ""
      ]
    },
    {
      "index":4,
      "section":"technical",
      "group_no":"5",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "KVXRM",
        "MCHS",
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Extended trot",
        "Working trot",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "index":5,
      "section":"technical",
      "group_no":"6",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "SEXBP",
        "",
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Walk on the bit",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "index":6,
      "section":"technical",
      "group_no":"7",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "PFAD",
        "SX",
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Collected trot",
        "Extended trot",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "index":7,
      "section":"technical",
      "group_no":"8",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "X",
        "",
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Collected trot",
        "Circle to the right followed by",
        "circle to the left, 15 m diameter",
        "",
        "",
        ""
      ]
    },
    {
      "index":8,
      "section":"technical",
      "group_no":"9",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "XG",
        "G",
        "C",
        "",
        "",
        ""
      ],
      "rows":[
        "Extended trot",
        "Working trot",
        "Track to the left",
        "",
        "",
        ""
      ]
    },
    {
      "index":9,
      "section":"technical",
      "group_no":"10",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "HE",
        "V",
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "10 m deviation from side",
        "Collected trot",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "index":10,
      "section":"technical",
      "group_no":"11",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "VL",
        "LX",
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Half circle to the left 20 m diameter",
        "Straight on the center line",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "index":11,
      "section":"technical",
      "group_no":"12",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "X",
        "",
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Halt, immobility 10 seconds, rein back 3 m",
        "Proceed at collected trot",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "index":12,
      "section":"technical",
      "group_no":"13",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "XI",
        "IR",
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Straight ion the center line",
        "Half circle to the right 20 m diameter",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "index":13,
      "section":"technical",
      "group_no":"14",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "RB",
        "BF",
        "A",
        "",
        "",
        ""
      ],
      "rows":[
        "Working trot",
        "10 m deviation from side",
        "Turn down centre line",
        "",
        "",
        ""
      ]
    },
    {
      "index":14,
      "section":"technical",
      "group_no":"15",
      "coefficient":1,
      "keyword":"",
      "positions":[
        "DXG",
        "G",
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Extended trot",
        "Halt - Salute",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "index":15,
      "section":"artistic",
      "group_no":"16",
      "coefficient":1,
      "keyword":"Paces",
      "positions":[
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Paces",
        "",
        "",
        ""
      ]
    },
    {
      "index":16,
      "section":"artistic",
      "group_no":"17",
      "coefficient":1,
      "keyword":"Impulsion",
      "positions":[
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Impulsion",
        "",
        "",
        ""
      ]
    },
    {
      "index":17,
      "section":"artistic",
      "group_no":"18",
      "coefficient":1,
      "keyword":"Obedience",
      "positions":[
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Obedience and lightness",
        "",
        "",
        ""
      ]
    },
    {
      "index":18,
      "section":"artistic",
      "group_no":"19",
      "coefficient":1,
      "keyword":"Driver",
      "positions":[
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Driver",
        "",
        "",
        ""
      ]
    },
    {
      "index":19,
      "section":"artistic",
      "group_no":"20",
      "coefficient":1,
      "keyword":"Presentation",
      "positions":[
        "",
        "",
        "",
        ""
      ],
      "rows":[
        "Presentation",
        "",
        "",
        ""
      ]
    },
    {
      "index":20,
      "section":"total_deduction",
      "group_no":null,
      "coefficient":-1,
      "keyword":"Deduction",
      "positions":[

      ],
      "rows":[

      ]
    }
  ]
}
```
