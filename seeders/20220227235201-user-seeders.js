'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    async up(queryInterface, Sequelize) {


        await queryInterface.bulkInsert('users', [{
                name: 'Dayat',
                profession: 'Full Stack Developer',
                role: 'admin',
                email: 'dayat@mail.com',
                password: await bcrypt.hash('123456', 10),
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: 'Dany',
                profession: 'Front End Developer',
                role: 'student',
                email: 'dany@mail.com',
                password: await bcrypt.hash('123456', 10),
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
    }
};