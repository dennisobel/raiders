import { images } from '.'; 
 
const portfolio = [  
    {
        id: 1,
        image: images.portfolio1,
        title: 'Most Epic Match, NC-2',
        category: 'National Cup',
        date: '05-01-2024',
        tags: ['soccer', 'final', 'T20'], 
        paragraphs: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        gallery: [   
            {id: 1, image: images.portfolio1Gallery1},
            {id: 2, image: images.portfolio1Gallery2},
            {id: 3, image: images.portfolio1Gallery3},
            {id: 4, image: images.portfolio1Gallery4},
            {id: 5, image: images.portfolio1Gallery5},
            {id: 6, image: images.portfolio1Gallery6},
        ],
    },        
    {
        id: 2,
        image: images.portfolio2,
        title: 'Training Sessions',
        category: 'Champion Trophy',
        date: '12-02-2024',
        tags: ['soccer', 'final', 'T20'],
        paragraphs: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        gallery: [   
            {id: 1, image: images.portfolio2Gallery1},
            {id: 2, image: images.portfolio2Gallery2},
            {id: 3, image: images.portfolio2Gallery3},
            {id: 4, image: images.portfolio2Gallery4},
            {id: 5, image: images.portfolio2Gallery5},
            {id: 6, image: images.portfolio2Gallery6},
        ],
    }, 
    {
        id: 3,
        image: images.portfolio3,
        title: 'Top Scorer, PL-2',
        category: 'Premier League',
        date: '15-03-2024',
        tags: ['soccer', 'final', 'T20'],
        paragraphs: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        gallery: [   
            {id: 1, image: images.portfolio3Gallery1},
            {id: 2, image: images.portfolio3Gallery2},
            {id: 3, image: images.portfolio3Gallery3},
            {id: 4, image: images.portfolio3Gallery4},
            {id: 5, image: images.portfolio3Gallery5},
            {id: 6, image: images.portfolio3Gallery6},
        ],
    }, 
    {
        id: 4,
        image: images.portfolio4,
        title: 'Victory Celebration, 2021',
        category: 'National Cup',
        date: '04-04-2024',
        tags: ['soccer', 'final', 'T20'],
        paragraphs: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        gallery: [   
            {id: 1, image: images.portfolio4Gallery1},
            {id: 2, image: images.portfolio4Gallery2},
            {id: 3, image: images.portfolio4Gallery3},
            {id: 4, image: images.portfolio4Gallery4},
            {id: 5, image: images.portfolio4Gallery5},
            {id: 6, image: images.portfolio4Gallery6},
        ],
    }, 
    {
        id: 5,
        image: images.portfolio5,
        title: 'Team Launch, CT-1',
        category: 'Champion Trophy',
        date: '29-05-2024',
        tags: ['soccer', 'final', 'T20'],
        paragraphs: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        gallery: [   
            {id: 1, image: images.portfolio5Gallery1},
            {id: 2, image: images.portfolio5Gallery2},
            {id: 3, image: images.portfolio5Gallery3},
            {id: 4, image: images.portfolio5Gallery4},
            {id: 5, image: images.portfolio5Gallery5},
            {id: 6, image: images.portfolio5Gallery6},
        ],
    }, 
    {
        id: 6,
        image: images.portfolio6,
        title: 'Final Pre-match Practice',
        category: 'Premier League',
        date: '20-06-2024',
        tags: ['soccer', 'final', 'T20'],
        paragraphs: [
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Repudiandae Aut Eum Rem Praesentium Doloremque Quos Perferendis Ipsa Sed Placeat Fugiat Minima Tenetur Facilis, Similique, Esse Molestias Harum. Illo, Obcaecati?',
            'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto, Vel Facere Iste Nobis Exercitationem Dicta? Sapiente Repellendus Quis In Sequi, Repellat, Maiores Architecto Debitis Reiciendis Odio Impedit Omnis Distinctio Ullam.',
        ],
        gallery: [   
            {id: 1, image: images.portfolio6Gallery1},
            {id: 2, image: images.portfolio6Gallery2},
            {id: 3, image: images.portfolio6Gallery3},
            {id: 4, image: images.portfolio6Gallery4},
            {id: 5, image: images.portfolio6Gallery5},
            {id: 6, image: images.portfolio6Gallery6},
        ],
    }, 
];

export default portfolio;

