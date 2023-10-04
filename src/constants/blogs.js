import { images } from '../constants'; 

const blogs = [   
    {   
        id: 1, 
        image: images.blog1,
        category: 'Sport Center',
        date : 'may 10, 2023',
        admin: 'admin', 
        heading: 'Complete List of Soccer Equipment',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        important: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        paragraph: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        subSection: {
            subHeading: 'Soccer Equipment List',
            points: ['Shirts','Shorts','Pants','Shoes','Gloves','Stumps','Leg pads'],
        } ,
        gallery: [   
            {id: 1, image: images.blog1Gallery1},
            {id: 2, image: images.blog1Gallery2},
            {id: 3, image: images.blog1Gallery3},
            {id: 4, image: images.blog1Gallery4},
            {id: 5, image: images.blog1Gallery5},
            {id: 6, image: images.blog1Gallery6},
        ],
        tags: ['Team', 'Practice', 'Facilities'],
        comments: [
            { 
                id: 1,
                image: images.blog1Comment1,
                name: 'Dayle Hadlee',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                replies: [
                    {
                        id: 1,
                        image: images.blog1Comment2,
                        name: 'Hayley Jensen',
                        date: 'june 1st, 2023',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                    },
                ],
            }, 
            {
                id: 2,
                image: images.blog1Comment3,
                name: 'Jeremy Coney',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {   
        id: 2, 
        image: images.blog2,
        category: 'soccer club',
        date : 'May 8, 2023',
        admin: 'admin',
        heading: 'A brief history of Raiders',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        important: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        paragraph: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        subSection: {
            subHeading: 'Soccer Equipment List',
            points: ['Shirts','Shorts','Pants','Shoes','Gloves','Stumps','Leg pads'],
        } ,
        gallery: [   
            {id: 1, image: images.blog2Gallery1},
            {id: 2, image: images.blog2Gallery2},
            {id: 3, image: images.blog2Gallery3},
            {id: 4, image: images.blog2Gallery4},
            {id: 5, image: images.blog2Gallery5},
            {id: 6, image: images.blog2Gallery6},
        ],
        tags: ['Team', 'Tournaments', 'Sponsorship'],
        comments: [
            { 
                id: 1,
                image: images.blog2Comment1,
                name: 'Dayle Hadlee',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                replies: [
                    {
                        id: 1,
                        image: images.blog2Comment2,
                        name: 'Hayley Jensen',
                        date: 'june 1st, 2023',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                    },
                ],
            }, 
            {
                id: 2,
                image: images.blog2Comment3,
                name: 'Jeremy Coney',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {   
        id: 3, 
        image: images.blog3,
        category: 'Interviews',
        date : 'Apr 15, 2023',
        admin: 'admin',
        heading: 'We are a family, not just a team',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        important: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        paragraph: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        subSection: {
            subHeading: 'Soccer Equipment List',
            points: ['Shirts','Shorts','Pants','Shoes','Gloves','Stumps','Leg pads'],
        } ,
        gallery: [   
            {id: 1, image: images.blog3Gallery1},
            {id: 2, image: images.blog3Gallery2},
            {id: 3, image: images.blog3Gallery3},
            {id: 4, image: images.blog3Gallery4},
            {id: 5, image: images.blog3Gallery5},
            {id: 6, image: images.blog3Gallery6},
        ],
        tags: ['Team', 'Events', 'Social'],
        comments: [
            { 
                id: 1,
                image: images.blog3Comment1,
                name: 'Dayle Hadlee',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                replies: [
                    {
                        id: 1,
                        image: images.blog3Comment2,
                        name: 'Hayley Jensen',
                        date: 'june 1st, 2023',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                    },
                ],
            }, 
            {
                id: 2,
                image: images.blog3Comment3,
                name: 'Jeremy Coney',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {   
        id: 4, 
        image: images.blog4,
        category: 'Analysis',
        date : 'Apr 25, 2023',
        admin: 'admin',
        heading: '10 Best Coaches for soccer',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        important: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        paragraph: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        subSection: {
            subHeading: 'Soccer Equipment List',
            points: ['Shirts','Shorts','Pants','Shoes','Gloves','Stumps','Leg pads'],
        } ,
        gallery: [   
            {id: 1, image: images.blog4Gallery1},
            {id: 2, image: images.blog4Gallery2},
            {id: 3, image: images.blog4Gallery3},
            {id: 4, image: images.blog4Gallery4},
            {id: 5, image: images.blog4Gallery5},
            {id: 6, image: images.blog4Gallery6},
        ],
        tags: ['Practice', 'Coaching', 'Events'],
        comments: [
            { 
                id: 1,
                image: images.blog4Comment1,
                name: 'Dayle Hadlee',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                replies: [
                    {
                        id: 1,
                        image: images.blog4Comment2,
                        name: 'Hayley Jensen',
                        date: 'june 1st, 2023',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                    },
                ],
            }, 
            {
                id: 2,
                image: images.blog4Comment3,
                name: 'Jeremy Coney',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {   
        id: 5, 
        image: images.blog5,
        category: 'Match Report',
        date : 'Apr 5, 2023',
        admin: 'admin',
        heading: 'How to motivate yourself to train daily',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        important: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        paragraph: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        subSection: {
            subHeading: 'Soccer Equipment List',
            points: ['Shirts','Shorts','Pants','Shoes','Gloves','Stumps','Leg pads'],
        } ,
        gallery: [   
            {id: 1, image: images.blog5Gallery1},
            {id: 2, image: images.blog5Gallery2},
            {id: 3, image: images.blog5Gallery3},
            {id: 4, image: images.blog5Gallery4},
            {id: 5, image: images.blog5Gallery5},
            {id: 6, image: images.blog5Gallery6},
        ],
        tags: ['Practice', 'Events', 'Social'],
        comments: [
            { 
                id: 1,
                image: images.blog5Comment1,
                name: 'Dayle Hadlee',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                replies: [
                    {
                        id: 1,
                        image: images.blog5Comment2,
                        name: 'Hayley Jensen',
                        date: 'june 1st, 2023',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                    },
                ],
            }, 
            {
                id: 2,
                image: images.blog5Comment3,
                name: 'Jeremy Coney',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {   
        id: 6, 
        image: images.blog6,
        category: 'Tournaments',
        date : 'Mar 27, 2023', 
        admin: 'admin',
        heading: 'New season Schedule announced',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        important: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        paragraph: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        subSection: {
            subHeading: 'Soccer Equipment List',
            points: ['Shirts','Shorts','Pants','Shoes','Gloves','Stumps','Leg pads'],
        } ,
        gallery: [   
            {id: 1, image: images.blog6Gallery1},
            {id: 2, image: images.blog6Gallery2},
            {id: 3, image: images.blog6Gallery3},
            {id: 4, image: images.blog6Gallery4},
            {id: 5, image: images.blog6Gallery5},
            {id: 6, image: images.blog6Gallery6},
        ],
        tags: ['Team', 'Tournaments', 'Events'],
        comments: [
            { 
                id: 1,
                image: images.blog6Comment1,
                name: 'Dayle Hadlee',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                replies: [
                    {
                        id: 1,
                        image: images.blog6Comment2,
                        name: 'Hayley Jensen',
                        date: 'june 1st, 2023',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                    },
                ],
            }, 
            {
                id: 2,
                image: images.blog6Comment3,
                name: 'Jeremy Coney',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {   
        id: 7,
        image: images.blog7,
        category: 'sport center',
        date : 'Mar 15, 2023',
        admin: 'admin',
        heading: 'Building a Strong Soccer Club Culture',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        important: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        paragraph: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        subSection: {
            subHeading: 'Soccer Equipment List',
            points: ['Shirts','Shorts','Pants','Shoes','Gloves','Stumps','Leg pads'],
        } ,
        gallery: [   
            {id: 1, image: images.blog7Gallery1},
            {id: 2, image: images.blog7Gallery2},
            {id: 3, image: images.blog7Gallery3},
            {id: 4, image: images.blog7Gallery4},
            {id: 5, image: images.blog7Gallery5},
            {id: 6, image: images.blog7Gallery6},
        ],
        tags: ['Team', 'Events', 'Social'],
        comments: [
            { 
                id: 1,
                image: images.blog7Comment1,
                name: 'Dayle Hadlee',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                replies: [
                    {
                        id: 1,
                        image: images.blog7Comment2,
                        name: 'Hayley Jensen',
                        date: 'june 1st, 2023',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                    },
                ],
            }, 
            {
                id: 2,
                image: images.blog7Comment3,
                name: 'Jeremy Coney',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {   
        id: 8, 
        image: images.blog8,
        category: 'soccer club',
        date : 'Mar 6, 2023',
        admin: 'admin',
        heading: 'Organizing Soccer Club Events',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        important: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        paragraph: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        subSection: {
            subHeading: 'Soccer Equipment List',
            points: ['Shirts','Shorts','Pants','Shoes','Gloves','Stumps','Leg pads'],
        } ,
        gallery: [   
            {id: 1, image: images.blog8Gallery1},
            {id: 2, image: images.blog8Gallery2},
            {id: 3, image: images.blog8Gallery3},
            {id: 4, image: images.blog8Gallery4},
            {id: 5, image: images.blog8Gallery5},
            {id: 6, image: images.blog8Gallery6},
        ],
        tags: ['Tournaments', 'Events', 'Sponsorship'],
        comments: [
            { 
                id: 1,
                image: images.blog8Comment1,
                name: 'Dayle Hadlee',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                replies: [
                    {
                        id: 1,
                        image: images.blog8Comment2,
                        name: 'Hayley Jensen',
                        date: 'june 1st, 2023',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                    },
                ],
            }, 
            {
                id: 2,
                image: images.blog8Comment3,
                name: 'Jeremy Coney',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {   
        id: 9, 
        image: images.blog9,
        category: 'interviews',
        date : 'Feb 22, 2023',
        admin: 'admin',
        heading: 'Raiders Soccer Club Facilities',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        important: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        paragraph: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        subSection: { 
            subHeading: 'Soccer Equipment List',
            points: ['Shirts','Shorts','Pants','Shoes','Gloves','Stumps','Leg pads'],
        } ,
        gallery: [   
            {id: 1, image: images.blog9Gallery1},
            {id: 2, image: images.blog9Gallery2},
            {id: 3, image: images.blog9Gallery3},
            {id: 4, image: images.blog9Gallery4},
            {id: 5, image: images.blog9Gallery5},
            {id: 6, image: images.blog9Gallery6},
        ],
        tags: ['coaching', 'Facilities', 'Sponsorship'],
        comments: [
            { 
                id: 1,
                image: images.blog9Comment1,
                name: 'Dayle Hadlee',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                replies: [
                    {
                        id: 1,
                        image: images.blog9Comment2,
                        name: 'Hayley Jensen',
                        date: 'june 1st, 2023',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                    },
                ],
            }, 
            {
                id: 2,
                image: images.blog9Comment3,
                name: 'Jeremy Coney',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
    {   
        id: 10, 
        image: images.blog10,
        category: 'Analysis',
        date : 'Feb 7, 2023',
        admin: 'admin',
        heading: 'Promoting Diversity in Soccer Clubs',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        important: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus modi.',
        paragraph: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        subSection: {
            subHeading: 'Soccer Equipment List',
            points: ['Shirts','Shorts','Pants','Shoes','Gloves','Stumps','Leg pads'],
        } ,
        gallery: [   
            {id: 1, image: images.blog10Gallery1},
            {id: 2, image: images.blog10Gallery2},
            {id: 3, image: images.blog10Gallery3},
            {id: 4, image: images.blog10Gallery4}, 
            {id: 5, image: images.blog10Gallery5},
            {id: 6, image: images.blog10Gallery6},
        ],
        tags: ['Team', 'Events', 'Social'],
        comments: [
            { 
                id: 1,
                image: images.blog10Comment1,
                name: 'Dayle Hadlee',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                replies: [
                    {
                        id: 1,
                        image: images.blog10Comment2,
                        name: 'Hayley Jensen',
                        date: 'june 1st, 2023',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
                    },
                ],
            }, 
            {
                id: 2,
                image: images.blog10Comment3,
                name: 'Jeremy Coney',
                date: 'june 1st, 2023',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ',
            },
        ]
    },
];

export default blogs;