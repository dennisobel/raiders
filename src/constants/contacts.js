import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const contacts = [  
    { 
        id: 1, 
        icon: <FaPhone />,
        title: 'contact',
        content: [ '+111-222-333', '+123-456-789,'],
    },
    {
        id: 2,
        icon: <FaEnvelope />,
        title: 'email',
        content: [ 'abc@gmail.com', 'xyz@gmail.com'],
    },
    {
        id: 3,
        icon: <FaMapMarkerAlt />,
        title: 'address',
        content: ['awasi, kenya'],
    },
 
];

export default contacts;