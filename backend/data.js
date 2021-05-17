import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Jhonny',
          email: 'admin@gmail.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'Jhonny',
          email: 'colmenaresjhonny24@gmail.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products: [
        {
            _id: '1',
            name: 'Geysaneth Gonzalez',
            category: 'Alvarado',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Bella',
            rating: 1,
            numReviews: 10,
            description: 'high quality product',

        },
        {
            _id: '2',
            name: 'Geysaneth Gonzalez',
            category: 'Alvarado',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Bella',
            rating: 3.5,
            numReviews: 15,
            description: 'high quality product',
            
        },
        {
            _id: '3',
            name: 'Geysaneth Gonzalez',
            category: 'Alvarado',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Bella',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
            
        },
        {
            _id: '4',
            name: 'Geysaneth Gonzalez',
            category: 'Alvarado',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Bella',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
            
        },
        {
            _id: '5',
            name: 'Geysaneth Gonzalez',
            category: 'Alvarado',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Bella',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
            
        },
        {
            _id: '6',
            name: 'Geysaneth Gonzalez',
            category: 'Alvarado',
            image: '/images/p1.jpg',
            price: 999,
            countInStock: 5,
            brand: 'Bella',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
            
        },
    ],
};
export default data;