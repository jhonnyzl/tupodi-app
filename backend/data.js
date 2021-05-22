import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Jhonny',
          email: 'admin@gmail.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
          isSeller: true,
          seller: {
          name: 'Puma',
          logo: '/images/logo1.png',
          description: 'best seller',
          rating: 4.5,
          numReviews: 120,
          },
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

            name: 'xxxxxx',
            category: 'Alvarado',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Bella',
            rating: 3.5,
            numReviews: 15,
            description: 'high quality product',
            
        }
    ],
};
export default data;