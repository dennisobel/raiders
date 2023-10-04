import { images } from '../constants';

const products = [ 
    { 
        id: 1,
        image: images.product1Gallery1, 
        name: 'Shoes',
        price: 270,    
        disprice: 260,
        content: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam, Quisquam Consectetur! Nulla Dicta Aperiam Necessitatibus, Ad Impedit Cupiditate Illum Possimus Placeat Unde At Deserunt Eum, Quas, Dignissimos Omnis Cum Fugit.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, culpa doloremque suscipit tempore id a tenetur adipisci aliquid pariatur dolores cumque voluptas. Laborum modi sapiente aliquid officia blanditiis cum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio repellendus nobis quaerat architecto ullam molestiae provident dolor saepe consequatur, nihil quis eos commodi, ab eius, laborum consequuntur laudantium! Odit.',
        category: ['FootWear', 'Clothing'],
        tags: ['Footwear', 'Equipment', 'Accessories'],
        gallery: {
            image1: images.product1Gallery1,
            image2: images.product1Gallery2,
            image3: images.product1Gallery3,
            image4: images.product1Gallery4,
        },
        addInfo: [
            {id: 1, title: 'glasses', content: 'standard'},
            {id: 2, title: 'shape', content: 'square'},
        ],
        comments: [
            {
                id: 1,
                image: images.product1Review1,
                name: 'Jeff Crowe',
                date: 'Mar 21st, 2023',
                rating: 4.8,
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
            {
                id: 2,
                image: images.product1Review2,
                name: 'Suzie Bates',
                date: 'Aug 5th, 2023',
                rating: 4.9,
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {
        id: 2,
        image: images.product2Gallery1, 
        name: 'cap',
        price: 290,
        disprice: 280,
        content: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam, Quisquam Consectetur! Nulla Dicta Aperiam Necessitatibus, Ad Impedit Cupiditate Illum Possimus Placeat Unde At Deserunt Eum, Quas, Dignissimos Omnis Cum Fugit.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, culpa doloremque suscipit tempore id a tenetur adipisci aliquid pariatur dolores cumque voluptas. Laborum modi sapiente aliquid officia blanditiis cum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio repellendus nobis quaerat architecto ullam molestiae provident dolor saepe consequatur, nihil quis eos commodi, ab eius, laborum consequuntur laudantium! Odit.',
        category: ['Accessories', 'Clothing'],
        tags: ['Accessories', 'Clothing', 'Team Kits'],
        gallery: {
            image1: images.product2Gallery1,
            image2: images.product2Gallery2,
            image3: images.product2Gallery3,
            image4: images.product2Gallery4,
        },
        addInfo: [
            {id: 1, title: 'glasses', content: 'standard'},
            {id: 2, title: 'shape', content: 'square'},
        ],
        comments: [
            {
                id: 1,
                image: images.product2Review1,
                name: 'Jeff Crowe',
                date: 'Mar 21st, 2023',
                rating: 4.5,
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {
        id: 3,
        image: images.product3Gallery1, 
        name: 'cricket ball',
        price: 310,
        disprice: 300,
        content: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam, Quisquam Consectetur! Nulla Dicta Aperiam Necessitatibus, Ad Impedit Cupiditate Illum Possimus Placeat Unde At Deserunt Eum, Quas, Dignissimos Omnis Cum Fugit.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, culpa doloremque suscipit tempore id a tenetur adipisci aliquid pariatur dolores cumque voluptas. Laborum modi sapiente aliquid officia blanditiis cum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio repellendus nobis quaerat architecto ullam molestiae provident dolor saepe consequatur, nihil quis eos commodi, ab eius, laborum consequuntur laudantium! Odit.',
        category: ['Equipment', 'Accessories'],
        tags: ['Balls', 'Equipment', 'Accessories'],
        gallery: {
            image1: images.product3Gallery1,
            image2: images.product3Gallery2,
            image3: images.product3Gallery3,
            image4: images.product3Gallery4,
        },
        addInfo: [
            {id: 1, title: 'glasses', content: 'standard'},
            {id: 2, title: 'shape', content: 'square'},
        ],
        comments: []
    },
    {
        id: 4,
        image: images.product4Gallery1, 
        name: 'Team Jersey',
        price: 330,
        disprice: 320,
        content: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam, Quisquam Consectetur! Nulla Dicta Aperiam Necessitatibus, Ad Impedit Cupiditate Illum Possimus Placeat Unde At Deserunt Eum, Quas, Dignissimos Omnis Cum Fugit.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, culpa doloremque suscipit tempore id a tenetur adipisci aliquid pariatur dolores cumque voluptas. Laborum modi sapiente aliquid officia blanditiis cum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio repellendus nobis quaerat architecto ullam molestiae provident dolor saepe consequatur, nihil quis eos commodi, ab eius, laborum consequuntur laudantium! Odit.',
        category: ['Clothing', 'Accessories'],
        tags: ['Clothing', 'Team Kits', 'Accessories'],
        gallery: {
            image1: images.product4Gallery1,
            image2: images.product4Gallery2,
            image3: images.product4Gallery3,
            image4: images.product4Gallery4,
        },
        addInfo: [
            {id: 1, title: 'glasses', content: 'standard'},
            {id: 2, title: 'shape', content: 'square'},
        ],
        comments: [
            {
                id: 1,
                image: images.product4Review1,
                name: 'Jeff Crowe',
                date: 'Mar 21st, 2023',
                rating: 5,
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
            {
                id: 2,
                image: images.product4Review2,
                name: 'Suzie Bates',
                date: 'Aug 5th, 2023',
                rating: 4.8,
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {
        id: 5,
        image: images.product5Gallery1, 
        name: 'Jacket',
        price: 350,
        disprice: 340,
        content: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam, Quisquam Consectetur! Nulla Dicta Aperiam Necessitatibus, Ad Impedit Cupiditate Illum Possimus Placeat Unde At Deserunt Eum, Quas, Dignissimos Omnis Cum Fugit.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, culpa doloremque suscipit tempore id a tenetur adipisci aliquid pariatur dolores cumque voluptas. Laborum modi sapiente aliquid officia blanditiis cum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio repellendus nobis quaerat architecto ullam molestiae provident dolor saepe consequatur, nihil quis eos commodi, ab eius, laborum consequuntur laudantium! Odit.',
        category: ['Clothing', 'Accessories'], 
        tags: ['Clothing', 'Team Kits', 'Accessories'],
        gallery: {
            image1: images.product5Gallery1,
            image2: images.product5Gallery2,
            image3: images.product5Gallery3,
            image4: images.product5Gallery4,
        },
        addInfo: [
            {id: 1, title: 'glasses', content: 'standard'},
            {id: 2, title: 'shape', content: 'square'},
        ],
        comments: []
    },
    {
        id: 6,
        image: images.product6Gallery1, 
        name: 'Bag',
        price: 370,
        disprice: 360,
        content: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam, Quisquam Consectetur! Nulla Dicta Aperiam Necessitatibus, Ad Impedit Cupiditate Illum Possimus Placeat Unde At Deserunt Eum, Quas, Dignissimos Omnis Cum Fugit.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, culpa doloremque suscipit tempore id a tenetur adipisci aliquid pariatur dolores cumque voluptas. Laborum modi sapiente aliquid officia blanditiis cum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio repellendus nobis quaerat architecto ullam molestiae provident dolor saepe consequatur, nihil quis eos commodi, ab eius, laborum consequuntur laudantium! Odit.',
        category: ['Bags', 'Accessories'], 
        tags: ['Bag', 'Equipment', 'Accessories'],
        gallery: {
            image1: images.product6Gallery1,
            image2: images.product6Gallery2,
            image3: images.product6Gallery3,
            image4: images.product6Gallery4,
        },
        addInfo: [
            {id: 1, title: 'glasses', content: 'standard'},
            {id: 2, title: 'shape', content: 'square'},
        ],
        comments: [
            {
                id: 1,
                image: images.product6Review1,
                name: 'Jeff Crowe',
                date: 'Mar 21st, 2023',
                rating: 4.5,
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
            {
                id: 2,
                image: images.product6Review2,
                name: 'Suzie Bates',
                date: 'Aug 5th, 2023',
                rating: 4.5,
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    }, 
    {
        id: 7,
        image: images.product7Gallery1, 
        name: 'Hoodie',
        price: 390,
        disprice: 380,
        content: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam, Quisquam Consectetur! Nulla Dicta Aperiam Necessitatibus, Ad Impedit Cupiditate Illum Possimus Placeat Unde At Deserunt Eum, Quas, Dignissimos Omnis Cum Fugit.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, culpa doloremque suscipit tempore id a tenetur adipisci aliquid pariatur dolores cumque voluptas. Laborum modi sapiente aliquid officia blanditiis cum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio repellendus nobis quaerat architecto ullam molestiae provident dolor saepe consequatur, nihil quis eos commodi, ab eius, laborum consequuntur laudantium! Odit.',
        category: ['Clothing', 'Accessories'], 
        tags: ['Clothing', 'Team Kits', 'Accessories'],
        gallery: {
            image1: images.product7Gallery1,
            image2: images.product7Gallery2,
            image3: images.product7Gallery3,
            image4: images.product7Gallery4,
        },
        addInfo: [
            {id: 1, title: 'glasses', content: 'standard'},
            {id: 2, title: 'shape', content: 'square'},
        ],
        comments: [
            {
                id: 1,
                image: images.product7Review1,
                name: 'Jeff Crowe',
                date: 'Mar 21st, 2023',
                rating: 4,
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {
        id: 8,
        image: images.product8Gallery1, 
        name: 'Gloves',
        price: 410,
        disprice: 400,
        content: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam, Quisquam Consectetur! Nulla Dicta Aperiam Necessitatibus, Ad Impedit Cupiditate Illum Possimus Placeat Unde At Deserunt Eum, Quas, Dignissimos Omnis Cum Fugit.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, culpa doloremque suscipit tempore id a tenetur adipisci aliquid pariatur dolores cumque voluptas. Laborum modi sapiente aliquid officia blanditiis cum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio repellendus nobis quaerat architecto ullam molestiae provident dolor saepe consequatur, nihil quis eos commodi, ab eius, laborum consequuntur laudantium! Odit.',
        category: ['Accessories', 'Equipment'], 
        tags: ['Accessories', 'Equipment', 'Team Kits'],
        gallery: {
            image1: images.product8Gallery1,
            image2: images.product8Gallery2,
            image3: images.product8Gallery3,
            image4: images.product8Gallery4,
        }, 
        addInfo: [
            {id: 1, title: 'glasses', content: 'standard'},
            {id: 2, title: 'shape', content: 'square'},
        ],
        comments: []
    },
    {
        id: 9,
        image: images.product9Gallery1, 
        name: 'Tennis Ball',
        price: 420,
        disprice: 410,
        content: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quam, Quisquam Consectetur! Nulla Dicta Aperiam Necessitatibus, Ad Impedit Cupiditate Illum Possimus Placeat Unde At Deserunt Eum, Quas, Dignissimos Omnis Cum Fugit.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, culpa doloremque suscipit tempore id a tenetur adipisci aliquid pariatur dolores cumque voluptas. Laborum modi sapiente aliquid officia blanditiis cum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio repellendus nobis quaerat architecto ullam molestiae provident dolor saepe consequatur, nihil quis eos commodi, ab eius, laborum consequuntur laudantium! Odit.',
        category: ['Accessories', 'Equipment'],
        tags: ['Balls', 'Equipment', 'Accessories'],
        gallery: {
            image1: images.product9Gallery1,
            image2: images.product9Gallery2,
            image3: images.product9Gallery3,
            image4: images.product9Gallery4,
        },
        addInfo: [
            {id: 1, title: 'glasses', content: 'standard'},
            {id: 2, title: 'shape', content: 'square'},
        ],
        comments: [
            {
                id: 1,
                image: images.product9Review1,
                name: 'Jeff Crowe',
                date: 'Mar 21st, 2023',
                rating: 4.4,
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
 
];

export default products;