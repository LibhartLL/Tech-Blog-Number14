const { User } = require('../models');

const userData = [{
        username: 'Brooke',
        password: 'psswrd1'

    },
    {
        username: 'Dave',
        password: 'psswrd2'
    },
    {
        username: 'Emily',
        password: 'psswrd3'
    },
    {
        username: 'Lizzy',
        password: 'psswrd4'
    },
    {
        username: 'Bobby',
        password: 'psswrd5'
    },
    {
        username: 'Chuck',
        password: 'psswrd6'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;