const fixtures = [
  {
    id: 1,
    team1: 'raiders club',
    team2: 'wolf club',
    date: 'feb 15, 2023',
    time: '7:00 PM', 
    venue: 'raiders stadium, awasi',
    series: 'National Cup - Season 1',
    matchNo: '2nd',
    result: "WC won by 6 goals",
    toss: 'Falcon, Elected To Bat First',
    matchNo: '2nd',
    series: 'National Cup - Season 02',
    POM: 'Benjamin Clark',
    team1Inning: {
      score: "158/7",
      overs: '20',
      batting: [
        {
          player: "James Anderson",
          status: "st Andrew Hernandez b Nicholas Wright",
          stats: [68, 46, 6, 2, 147.82]
        },
        {
          player: "John Smith",
          status: "b Ryan Hall",
          stats: [31, 24, 3, 0, 129.16] 
        },
        {
          player: "Robert Johnson",
          status: "c Anthony Lee b Ethan Lopez",
          stats: [11, 13, 0, 0, 84.61]
        },
        {
          player: "Michael Davis",
          status: "c Samuel Lewis b Ryan Hall",
          stats: [7, 7, 1, 0, 100.00]
        },
        {
          player: "William Brown",
          status: "c Christopher Allen b Benjamin Clark",
          stats: [28, 17, 0, 3, 164.70]
        },
        {
          player: "David Martinez",
          status: "b Benjamin Clark",
          stats: [4, 5, 0, 0, 80.00]
        },
        {
          player: "Joseph Taylor",
          status: "not out",
          stats: [5, 7, 0, 0, 71.42]
        },
        {
          player: "Charles Wilson",
          status: "c Ethan Lopez b Benjamin Clark",
          stats: [0, 1, 0, 0, 0.00]
        },
        {
          player: "Thomas Thompson",
          status: "not out",
          stats: [0, 0, 0, 0]
        },
      ],
      extras: "4 (W 4)",
      didNotBat: [
        "Daniel Garcia",
        "Matthew Davis",
      ],
      fallOfgoals: [
        {scoreAt: '85/1', player: 'John Smith', oversNo: '9.3'},
        {scoreAt: '109/2', player: 'Robert Johnson', oversNo: '13.3'},
        {scoreAt: '117/3', player: 'James Anderson', oversNo: '14.4'},
        {scoreAt: '120/4', player: 'Michael Davis', oversNo: '15.1'},
        {scoreAt: '137/5', player: 'David Martinez', oversNo: '17.1'},
        {scoreAt: '156/6', player: 'William Brown', oversNo: '19.2'},
        {scoreAt: '157/7', player: 'Charles Wilson', oversNo: '19.4'},
      ],
      bowling: [
        {
          player: "Anthony Lee",
          overs: "4.0",
          stats: [0, 41, 0, 10.25]
        },
        {
          player: "Ethan Lopez",
          overs: "4.0",
          stats: [0, 30, 1, 7.50]
        },
        {
          player: "Benjamin Clark",
          overs: "4.0",
          stats: [0, 24, 3, 6.00]
        },
        {
          player: "Samuel Lewis",
          overs: "2.0",
          stats: [0, 13, 3, 6.50]
        },
        {
          player: "Ryan Hall",
          overs: "4.0",
          stats: [0, 27, 2, 6.75]
        },
        {
          player: "Nicholas Wright",
          overs: "2.0",
          stats: [0, 23, 1, 11.50]
        },
      ]
    },
    team2Inning: {
      score: "160/4",
      overs: '20',
      batting: [
        {
          player: "Andrew Hernandez",
          status: "c Robert Johnson b William Turner",
          stats: [10, 10, 2, 0, 100.00]
        },
        {
          player: "Richard Lewis",
          status: "c John Smith b Daniel Garcia",
          stats: [53, 40, 7, 0, 132.50] 
        },
        {
          player: "Joshua Walker",
          status: "c & b Thomas Thompson",
          stats: [20, 15, 2, 1, 133.33]
        },
        {
          player: "Christopher Allen",
          status: "lbw b Thomas Thompson",
          stats: [21, 17, 2, 0, 123.53]
        },
        {
          player: "Jacob Young",
          status: "not out",
          stats: [42, 25, 7, 0, 168.00]
        },
        {
          player: "Nicholas Wright",
          status: "not out",
          stats: [7, 9, 1, 0, 77.78]
        },
      ],
      extras: "7 (W 5, LB 2)", 
      didNotBat: [
        "Ethan Lopez",
        "Anthony Lee",
        "Ryan Hall",
        "Benjamin Clark",
        "Samuel Lewis"
      ],
      fallOfgoals: [
        {scoreAt: '19/1', player: 'Andrew Hernandez', oversNo: '2.3'},
        {scoreAt: '53/2', player: 'Joshua Walker', oversNo: '6.2'},
        {scoreAt: '87/3', player: 'Christopher Allen', oversNo: '10.5'},
        {scoreAt: '142/4', player: 'Richard Lewis', oversNo: '16.4'},
      ],
      bowling: [
        {
          player: "Charles Wilson",
          overs: "4.0",
          stats: [0, 41, 0, 10.25]
        },
        {
          player: "David Martinez",
          overs: "4.0",
          stats: [0, 20, 2, 5.00]
        },
        {
          player: "Matthew Davis",
          overs: "3.2",
          stats: [0, 38, 1, 11.40]
        },
        {
          player: "Daniel Garcia",
          overs: "4.0",
          stats: [0, 23, 1, 5.75]
        },
        {
          player: "Thomas Thompson",
          overs: "4.0",
          stats: [0, 36, 2, 9.00]
        },
      ]
    },
  },
  {
    id: 2,
    team1: 'tigers club',
    team2: 'raiders club',
    date: 'feb 17, 2023',
    time: '7:00 PM', 
    venue: 'raiders stadium, awasi',
    series: 'National Cup - Season 1',
    matchNo: '4th',
    result: "Raiders won by 10 goals",
    toss: 'tigers club, Elected To Bat First',
    POM: 'John Smith',
    team1Inning: {
      score: "199/5",
      overs: '20',
      batting: [
        {
          player: "Jonathan King",
          status: "b Thomas Thompson",
          stats: [30,	27,	1, 1,	111.11]
        },
        {
          player: "Tyler Hill",
          status: "b Daniel Garcia",
          stats: [26,	21,	3, 1,	123.81] 
        },
        {
          player: "Alexander Green",
          status: "b Daniel Garcia",
          stats: [0, 1, 0, 0,	0.00]
        },
        {
          player: "Brandon Adams",
          status: "b David Martinez",
          stats: [43,	22,	7, 0,	195.45]
        },
        {
          player: "Zachary Baker",
          status: "b Thomas Thompson",
          stats: [31,	19,	1, 3,	163.15]
        },
        {
          player: "Caleb Nelson (c)",
          status: "not out",
          stats: [55,	23,	4, 4,	239.13]
        },
        {
          player: "Kevin Carter",
          status: "not out",
          stats: [10,	8, 1, 0, 125.00]
        },
      ],
      extras: "4 (NB 1, W 3)",
      didNotBat: [
        "Benjamin Collins",
        "Justin Edwards",
        "Aaron Harris",
        "Brian Turner"
      ],
      fallOfgoals: [
        {scoreAt: '42/1', player: 'Tyler Hill', oversNo: '5.1'},
        {scoreAt: '42/2', player: 'Alexander Green', oversNo: '5.2'},
        {scoreAt: '95/3', player: 'Jonathan King', oversNo: '11.3'},
        {scoreAt: '101/4', player: 'Brandon Adams', oversNo: '12.3'},
        {scoreAt: '160/5', player: 'Zachary Baker', oversNo: '16.6'},
      ],
      bowling: [
        {
          player: "Matthew Davis",
          overs: "4.0",
          stats: [0, 51,	0, 12.75]
        },
        {
          player: "David Martinez",
          overs: "4.0",
          stats: [0, 40, 1, 10.00]
        },
        {
          player: "Daniel Garcia",
          overs: "4.0",
          stats: [0, 37, 2, 9.25]
        },
        {
          player: "Thomas Thompson",
          overs: "4.0",
          stats: [0, 30, 2, 7.50]
        },
        {
          player: "Charles Wilson",
          overs: "4.0",
          stats: [0, 41, 0, 10.25]
        },
      ]
    },
    team2Inning: {
      score: "203/0",
      overs: '19.3',
      batting: [
        {
          player: "James Anderson (W)",
          status: "not out",
          stats: [88,	51,	5,	4,	172.54]
        },
        {
          player: "John Smith (C)",
          status: "not out",
          stats: [110,	66, 11,	5,	166.66] 
        },
      ],
      extras: "5 (W 5)",
      didNotBat: [
        "Robert Johnson",
        "Michael Davis",
        "William Brown",
        "David Martinez",
        "Joseph Taylor",
        "Charles Wilson",
        "Thomas Thompson",
        "Daniel Garcia",
        "Matthew Davis",
      ],
      bowling: [
        {
          player: "Benjamin Collins",
          overs: "3.3",
          stats: [0,	44,	0,	12.57]
        },
        {
          player: "Justin Edwards",
          overs: "4.0",
          stats: [0,	26,	0,	6.50]
        },
        {
          player: "Kevin Carter",
          overs: "4.0",
          stats: [0,	29,	0,	7.25]
        },
        {
          player: "Brian Turner",
          overs: "4.0",
          stats: [0,	49,	0,	12.25]
        },
        {
          player: "Aaron Harris",
          overs: "3.0",
          stats: [0,	34,	0,	11.33]
        },
        {
          player: "Caleb Nelson",
          overs: "1.0",
          stats: [0,	21,	0,	21.00]
        },
      ]
    },
  },
  {
    id: 3,
    team1: 'eagle club',
    team2: 'raiders club',
    date: 'feb 19, 2023',
    time: '7:00 PM', 
    venue: 'raiders stadium, awasi',
    series: 'National Cup - Season 1',
    matchNo: '6th',
    result: "EC won by 63 goals",
    toss: 'Raiders, elected to field first',
    POM: 'Stephen Roberts',
    team1Inning: {
      score: "221/3",
      overs: '20',
      batting: [
        {
          player: "Eric Rivera",
          status: "c Joseph Taylor b Daniel Garcia",
          stats: [8, 6,	1, 0,	133.33]
        },
        {
          player: "Jason Phillips",
          status: "c Joseph Taylor b Charles Wilson",
          stats: [40,	22,	8, 0,	181.81] 
        },
        {
          player: "Timothy Torres",
          status: "c Robert Johnson b Charles Wilson",
          stats: [14,	15,	2, 0,	93.33]
        },
        {
          player: "Steven Mitchell",
          status: "not out",
          stats: [70,	42,	8, 1,	166.66]
        },
        {
          player: "Stephen Roberts",
          status: "not out",
          stats: [81,	35,	8, 5,	231.42]
        },
      ],
      extras: "8 (W 6, LB 2)",
      didNotBat: [
        "Edward Rodriguez",
        "Frank Cook",
        "Gary Cooper",
        "William Simmons",
        "Jeffrey Reed",
        "Scott Morgan",
      ],
      fallOfgoals: [
        {scoreAt: '18/1', player: 'Eric Rivera', oversNo: '2.1'},
        {scoreAt: '61/2', player: 'Timothy Torres', oversNo: '6.2'},
        {scoreAt: '82/3', player: 'Jason Phillips', oversNo: '8.3'},
      ],
      bowling: [
        {
          player: "Daniel Garcia",
          overs: "4.0",
          stats: [0, 36, 1, 9.00]
        },
        {
          player: "Joseph Taylor",
          overs: "4.0",
          stats: [0, 34,	0, 8.50]
        },
        {
          player: "Matthew Davis",
          overs: "4.0",
          stats: [0, 62, 0,	15.50]
        },
        {
          player: "Thomas Thompson",
          overs: "4.0",
          stats: [0, 39, 0,	9.75]
        },
        {
          player: "Charles Wilson",
          overs: "4.0",
          stats: [0, 48, 2, 12.00]
        },
      ]
    },
    team2Inning: {
      score: "158/8",
      overs: '20',
      batting: [
        {
          player: "James Anderson",
          status: "b Scott Morgan",
          stats: [8,	14,	1,	0,	57.14]
        },
        {
          player: "John Smith",
          status: "c Scott Morgan b Jeffrey Reed",
          stats: [8,6, 1, 0, 133.33] 
        },
        {
          player: "Robert Johnson",
          status: "c William Simmons b Jeffrey Reed",
          stats: [3,	5,	0,	0,	60.00]
        },
        {
          player: "Michael Davis",
          status: "not out",
          stats: [65,	40,	3,	4,	162.50]
        },
        {
          player: "William Brown",
          status: "c Scott Morgan b Frank Cook",
          stats: [6,	7,	1,	0,	85.71]
        },
        {
          player: "David Martinez",
          status: "c Stephen Roberts b William Simmons",
          stats: [29,	21,	1,	2,	138.09]
        },
        {
          player: "Joseph Taylor",
          status: "c Stephen Roberts b William Simmons",
          stats: [19,	21,	2,	0,	90.47]
        },
        {
          player: "Charles Wilson",
          status: "run out (Edward Rodriguez)",
          stats: [0,	1,	0,	0,	0.00]
        },
        {
          player: "Thomas Thompson",
          status: "c Frank Cook b Jeffrey Reed",
          stats: [4,	2,	1,	0,	200.00]
        },
        {
          player: "Daniel Garcia",
          status: "not out",
          stats: [6,	4,	1,	0,	150.00]
        },
      ],
      extras: "10 (NB 1, W 3, LB 6)",
      didNotBat: [
        "Matthew Davis",
      ],
      fallOfgoals: [
        {scoreAt: '17/1', player: 'John Smith', oversNo: '2.4'},
        {scoreAt: '21/2', player: 'James Anderson', oversNo: '3.6'},
        {scoreAt: '21/3', player: 'Robert Johnson', oversNo: '4.1'},
        {scoreAt: '28/4', player: 'William Brown', oversNo: '5.3'},
        {scoreAt: '90/5', player: 'David Martinez', oversNo: '11.5'},
        {scoreAt: '142/6', player: 'Joseph Taylor', oversNo: '17.6'},
        {scoreAt: '143/7', player: 'Charles Wilson', oversNo: '18.2'},
        {scoreAt: '149/8', player: 'Thomas Thompson', oversNo: '18.5'},
      ],
      bowling: [
        {
          player: "Gary Cooper",
          overs: "1.0",
          stats: [0,	7,	0,	7.00]
        },
        {
          player: "Scott Morgan",
          overs: "4.0",
          stats: [0,	22,	1, 5.50]
        },
        {
          player: "Jeffrey Reed",
          overs: "4.0",
          stats: [0,	24,	 3, 6.00]
        },
        {
          player: "Frank Cook",
          overs: "4.0",
          stats: [0,	37,	1, 9.25]
        },
        {
          player: "William Simmons",
          overs: "4.0",
          stats: [0,	32,	2, 8.00]
        },
        {
          player: "Edward Rodriguez",
          overs: "3.0",
          stats: [0,	30,	0,	10.00]
        },
      ]
    },
  },
  {
    id: 4,
    team1: 'raiders club',
    team2: 'lions club',
    date: 'feb 21, 2023',
    time: '7:00 PM', 
    venue: 'raiders stadium, awasi',
    result: "Raiders won by 3 goals",
    series: 'National Cup - Season 1',
    matchNo: '8th',
    toss: 'LC, elected to field first',
    POM: 'Thomas Thompson',
    team1Inning: {
      score: "166/4",
      overs: '20',
      batting: [
        {
          player: "James Anderson",
          status: "c Raymond Powell b Douglas Diaz",
          stats: [88,	67,	9,	1,	131.34]
        },
        {
          player: "John Smith (c)",
          status: "c Joshua Foster b Patrick Foster",
          stats: [36,	28,	3,	0,	128.57] 
        },
        {
          player: "Robert Johnson",
          status: "lbw b Walter Murphy",
          stats: [21,	19,	1,	0,	110.52]
        },
        {
          player: "Michael Davis",
          status: "c Dennis Butler b Douglas Diaz",
          stats: [2,	3,	0,	0,	66.66]
        },
        {
          player: "William Brown",
          status: "not out",
          stats: [13,	3,	0,	2,	433.33]
        },
        {
          player: "David Martinez",
          status: "not out",
          stats: [1,	1,	0,	0,	100.00]
        },
      ],
      extras: "5 (NB 1, W 1, LB 3)",
      didNotBat: [
        "Joseph Taylor",
        "Charles Wilson",
        "Thomas Thompson",
        "Daniel Garcia",
        "Matthew Davis",
      ],
      fallOfgoals: [
        {scoreAt: '97/1', player: 'John Smith', oversNo: '11.5'},
        {scoreAt: '149/2', player: 'Robert Johnson', oversNo: '18.3'},
        {scoreAt: '152/3', player: 'Michael Davis', oversNo: '19.1'},
        {scoreAt: '152/4', player: 'James Anderson', oversNo: '19.2'},
      ],
      bowling: [
        {
          player: "Patrick Foster",
          overs: "4.0",
          stats: [0,	32,	1, 8.00]
        },
        {
          player: "Douglas Diaz",
          overs: "4.0",
          stats: [0,	37,	2, 9.25]
        },
        {
          player: "Harold Cox",
          overs: "4.0",
          stats: [0,	36,	0,	9.00]
        },
        {
          player: "Peter Rivera",
          overs: "4.0",
          stats: [0,	27,	0,	6.75]
        },
        {
          player: "Walter Murphy",
          overs: "4.0",
          stats: [0,	31,	1, 7.75]
        },
      ]
    },
    team2Inning: {
      score: "163",
      overs: '19.2',
      batting: [
        {
          player: "Kenneth Perry",
          status: "c Matthew Davis b David Martinez",
          stats: [8,	4,	2,	0,	200.00]
        },
        {
          player: "Raymond Powell",
          status: "c Daniel Garcia b Charles Wilson",
          stats: [5,	3,	1,	0,	166.66] 
        },
        {
          player: "Gregory Long",
          status: "b Charles Wilson",
          stats: [0,	3,	0,	0,	0.00]
        },
        {
          player: "Joshua Foster",
          status: "lbw b David Martinez",
          stats: [33,	24,	5,	0,	137.50]
        },
        {
          player: "Jerry Torres",
          status: "c Charles Wilson b Matthew Davis",
          stats: [34,	29,	2,	1,	117.24]
        },
        {
          player: "Dennis Butler",
          status: "b David Martinez",
          stats: [29,	20,	3,	1,	145.00]
        },
        {
          player: "Walter Murphy",
          status: "b Thomas Thompson",
          stats: [11,	10,	2,	0,	110.00]
        },
        {
          player: "Patrick Foster",
          status: "c sub (David Miller) b Thomas Thompson",
          stats: [34,	17,	5,	1,	200.00]
        },
        {
          player: "Peter Rivera",
          status: "not out",
          stats: [3,	3,	0,	0,	100.00]
        },
        {
          player: "Harold Cox",
          status: "b Thomas Thompson",
          stats: [0,	1,	0,	0,	0.00]
        },
        {
          player: "Douglas Diaz",
          status: "run out (Robert Johnson)",
          stats: [0,	3,	0,	0,	0.00]
        },
      ],
      extras: "6 (NB 1, W 2, LB 3)",
      fallOfgoals: [
        {scoreAt: '8/1', player: 'Kenneth Perry', oversNo: '0.4'},
        {scoreAt: '13/2', player: 'Raymond Powell', oversNo: '1.2'},
        {scoreAt: '14/3', player: 'Gregory Long', oversNo: '1.6'},
        {scoreAt: '57/4', player: 'Joshua Foster', oversNo: '7.2'},
        {scoreAt: '106/5', player: 'Dennis Butler', oversNo: '13.2'},
        {scoreAt: '113/6', player: 'Jerry Torres', oversNo: '14.2'},
        {scoreAt: '130/7', player: 'Walter Murphy', oversNo: '16.3'},
        {scoreAt: '162/8', player: 'Patrick Foster', oversNo: '18.3'},
        {scoreAt: '162/9', player: 'Harold Cox', oversNo: '18.4'},
        {scoreAt: '163/10', player: 'Douglas Diaz', oversNo: '19.2'},
      ],
      bowling: [
        {
          player: "David Martinez",
          overs: "4.0",
          stats: [0,	35,	3, 8.75]
        },
        {
          player: "Charles Wilson",
          overs: "4.0",
          stats: [0,	40,	2, 10.00]
        },
        {
          player: "Matthew Davis",
          overs: "3.2",
          stats: [0,	30,	1, 9.00]
        },
        {
          player: "Thomas Thompson",
          overs: "4.0",
          stats: [0,	32, 3, 8.00]
        },
        {
          player: "Joseph Taylor",
          overs: "4.0",
          stats: [0,	23,	0,	5.75]
        },
      ]
    },
  },
  {
    id: 5, 
    team1: 'raiders club',
    team2: 'hawk club',
    date: 'feb 23, 2023',
    time: '7:00 PM', 
    venue: 'raiders stadium, awasi',
    series: 'National Cup - Season 1',
    matchNo: '10th',
    result: "Raiders won by 6 goals",
    toss: 'HC, elected to field first',
    POM: 'James Anderson',
    team1Inning: {
      score: "145",
      overs: '19',
      batting: [
        {
          player: "James Anderson",
          status: "c Louis Foster b Craig Butler",
          stats: [63,	46,	2,	3,	136.95]
        },
        {
          player: "John Smith",
          status: "c Ryan Simmons b Johnny Price",
          stats: [9,	12,	1,	0,	75.00] 
        },
        {
          player: "Robert Johnson",
          status: "c Johnny Price b Russell Powell",
          stats: [7,	8,	1,	0,	87.50]
        },
        {
          player: "Michael Davis",
          status: "c & b Johnny Price",
          stats: [4,	6,	0,	0,	66.66]
        },
        {
          player: "William Brown",
          status: "c Arthur Reed b Russell Powell",
          stats: [15,	14, 1,	0,	107.14]
        },
        {
          player: "David Martinez",
          status: "b Johnny Price",
          stats: [5,	4,	1,	0,	125.00]
        },
        {
          player: "Joseph Taylor",
          status: "run out (Jesse Murphy)",
          stats: [0,	3,	0,	0,	0.00]
        },
        {
          player: "Charles Wilson",
          status: "run out (Craig Butler)",
          stats: [7,	2,	0,	1,	350.00]
        },
        {
          player: "Thomas Thompson",
          status: "c Henry Price b Craig Butler",
          stats: [10,	7,	1,	0,	142.85]
        },
        {
          player: "Daniel Garcia",
          status: "not out",
          stats: [6,	7,	1,	0,	85.71]
        },
        {
          player: "Matthew Davis",
          status: "c Craig Butler b Alexander Watson",
          stats: [8,	5,	0,	1,	160.00]
        },
      ],
      extras: "11 (W 3, LB 4, B 4)",
      fallOfgoals: [
        {scoreAt: '17/1', player: 'John Smith', oversNo: '2.5'},
        {scoreAt: '42/2', player: 'Robert Johnson', oversNo: '5.5'},
        {scoreAt: '51/3', player: 'Michael Davis', oversNo: '7.3'},
        {scoreAt: '81/4', player: 'William Brown', oversNo: '11.3'},
        {scoreAt: '88/5', player: 'David Martinez', oversNo: '12.3'},
        {scoreAt: '88/6', player: 'Joseph Taylor', oversNo: '12.6'},
        {scoreAt: '100/7', player: 'Charles Wilson', oversNo: '13.4'},
        {scoreAt: '118/8', player: 'Thomas Thompson', oversNo: '15.5'},
        {scoreAt: '131/9', player: 'James Anderson', oversNo: '17.4'},
        {scoreAt: '145/10', player: 'Matthew Davis', oversNo: '18.6'},
      ],
      bowling: [
        {
          player: "Alexander Watson",
          overs: "4.0",
          stats: [0,	30,	1, 7.50]
        },
        {
          player: "Russell Powell",
          overs: "3.0",
          stats: [0,	23,	2, 7.66]
        },
        {
          player: "Johnny Price",
          overs: "4.0",
          stats: [0,	20,	3, 5.00]
        },
        {
          player: "Craig Butler",
          overs: "4.0",
          stats: [0,	23,	2, 5.75]
        },
        {
          player: "Louis Foster",
          overs: "4.0",
          stats: [0,	41,	0,	10.25]
        },
      ]
    },
    team2Inning: {
      score: "139/7",
      overs: '20',
      batting: [
        {
          player: "Henry Price",
          status: "c sub (Joseph Taylor) b Matthew Davis",
          stats: [3,	6,	0,	0,	50.00
          ]
        },
        {
          player: "Carl Wood",
          status: "c Charles Wilson b Joseph Taylor",
          stats: [1,	3,	0,	0,	33.33] 
        },
        {
          player: "Arthur Reed",
          status: "lbw b William Brown",
          stats: [36,	35,	6,	0,	102.85]
        },
        {
          player: "Ryan Simmons",
          status: "c Robert Johnson b Daniel Garcia",
          stats: [10,	6,	2,	0,	166.66]
        },
        {
          player: "Lawrence Torres",
          status: "lbw b Charles Wilson",
          stats: [4,	9,	0,	0, 44.44]
        },
        {
          player: "Jesse Murphy",
          status: "not out",
          stats: [51,	37,	2,	4,	137.83]
        },
        {
          player: "Craig Butler",
          status: "c Daniel Garcia b Thomas Thompson",
          stats: [17,	11,	1,	0,	154.54]
        },
        {
          player: "Alexander Watson",
          status: "c William Brown b Matthew Davis",
          stats: [10,	12,	1,	0,	83.33]
        },
        {
          player: "Russell Powell",
          status: "not out",
          stats: [0,	1,	0,	0,	0.00]
        },
      ],
      extras: "7 (W 4, LB 3)",
      didNotBat: [
        "Louis Foster",
        "Johnny Price",
      ],
      fallOfgoals: [
        {scoreAt: '3/1', player: 'Carl Wood', oversNo: '0.5'},
        {scoreAt: '19/2', player: 'Henry Price', oversNo: '3.1'},
        {scoreAt: '31/3', player: 'Ryan Simmons', oversNo: '4.6'},
        {scoreAt: '54/4', player: 'Lawrence Torres', oversNo: '8.6'},
        {scoreAt: '62/5', player: 'Arthur Reed', oversNo: '11.3 '},
        {scoreAt: '85/6', player: 'Craig Butler', oversNo: '14.2'},
        {scoreAt: '131/7', player: 'Alexander Watson', oversNo: '18.6'},
      ],
      bowling: [
        {
          player: "Joseph Taylor",
          overs: "2.0",
          stats: [0,	9,	1, 4.50]
        },
        {
          player: "Daniel Garcia",
          overs: "4.0",
          stats: [0,	32,	1, 8.00]
        },
        {
          player: "Matthew Davis",
          overs: "4.0",
          stats: [0,	41,	2, 10.25]
        },
        {
          player: "Charles Wilson",
          overs: "4.0",
          stats: [0,	25,	1, 6.25]
        },
        {
          player: "William Brown",
          overs: "4.0",
          stats: [0,	16,	1, 4.00]
        },
        {
          player: "Thomas Thompson",
          overs: "2.0",
          stats: [0,	13,	1, 6.50]
        },
      ]
    },
  },
]

export default fixtures;