const { Post } = require('../models');

const postData = [{
        title: 'I',
        content: 'comment post 1',
        user_id: 1

    },
    {
        title: 'II',
        content: 'comment post 2',
        user_id: 2
    },
    {
        title: 'III',
        content: 'comment post 3',
        user_id: 3
    },
    {
        title: 'IV',
        content: 'comment post 4',
        user_id: 4
    },
    {
        title: 'V',
        content: 'comment post 5',
        user_id: 5
    },
    {
        title: 'VI',
        content: 'comment post 6',
        user_id: 6
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;