import events from './events';
import portfolio from './portfolio';
import players from './players';
import fixtures from './fixtures';
import blogs from './blogs'; 
import products from './products';


const navbar = [  
    {
        id: 1,
        mainLink : {link: '/', title: 'home'},
        subLink: [],
    },
    {
        id: 2,
        mainLink : {link: '#', title: 'about'},
        subLink: [
            {id: 1, link: '/About-us', title: 'about us'},
            // {id: 2, link: '/Testimonials', title: 'testimonials'}, 
            {id: 3, link: '/Faqs', title: 'faqs'},
        ],
    },
    {
        id: 3,
        mainLink : {link: '/Portfolio', title: 'Portfolio'},
        subLink: [
            // {id: 1, link: '/Point-Table', title: 'Point Table'},
            // {id: 2, link: '/Events', title: 'Upcoming Events'},
            // {id: 3, link: '/Events/EventSingle', title: 'Event Single', state: events[0]},
            // {id: 4, link: '/Portfolio', title: 'Portfolio'},
            // {id: 5, link: '/Portfolio/PortfolioSingle', title: 'Portfolio Single', state: portfolio[0]},
            // {id: 6, link: '/Login', title: 'login'},
            // {id: 7, link: '/Register', title: 'register'},
            // {id: 8, link: '/Forgot-pwd', title: 'forgot Password'},
        ],
    },
    {
        id: 4,
        mainLink : {link: '/Team/Management', title: 'Team'},
        subLink: [
            // {id: 1, link: '/Team', title: 'Team'},
            // {id: 2, link: '/Team/Management', title: 'Management'}, 
            // {id: 3, link: '/Team/Players', title: 'Players'},
            // {id: 4, link: '/Team/Players/PlayersSingle', title: 'Player Single', state: players[0]},  
        ],
    }, 
    // {
    //     id: 5, 
    //     mainLink : {link: '#', title: 'Fixture'},
    //     subLink: [
    //         {id: 1, link: '/Fixtures', title: 'Fixture'},
    //         {id: 2, link: '/Fixtures/FixtureSingle', title: 'Fixture Single', state: fixtures[0]}, 
    //     ],
    // }, 
    {
        id: 6,
        mainLink : {link: '/Blog-list', title: 'blog'},
        subLink: [
            // {id: 1, link: '/Blog-grid', title: 'blog grid'},
            // {id: 2, link: '/Blog-list', title: 'blog list'},
            // {id: 3, link: '/Blogs/Blog-Single', title: 'blog single', state: blogs[0]},
        ],
    },
    // {
    //     id: 7,
    //     mainLink : {link: '#', title: 'shop'},
    //     subLink: [
    //         {id: 1, link: '/Shop-grid', title: 'shop grid'},
    //         {id: 2, link: '/Shop-list', title: 'shop list'},
    //         {id: 3, link: '/Shop/Product-Single', title: 'product single', state: products[0]},
    //         {id: 4, link: '/Cart', title: 'cart'},
    //         {id: 5, link: '/Checkout', title: 'checkout'},
    //     ],
    // },
    {
        id: 8,
        mainLink : {link: '/Contact-us', title: 'contact'},
        subLink: [],
    },
];

export default navbar;