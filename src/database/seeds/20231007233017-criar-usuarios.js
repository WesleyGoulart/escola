const bcryprtjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Wesley5',
        email: 'wesley5@goulart.com',
        password_hash: await bcryprtjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Wesley6',
        email: 'wesley6@goulart.com',
        password_hash: await bcryprtjs.hash('789123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Wesley7',
        email: 'wesley7@goulart.com',
        password_hash: await bcryprtjs.hash('456789', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
