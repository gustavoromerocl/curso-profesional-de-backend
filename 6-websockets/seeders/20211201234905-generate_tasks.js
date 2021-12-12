'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    //Add seed commands here.
  
    await queryInterface.bulkInsert('tasks', [
      {id: 1, description: 'Grabar el curso de Backend',createdAt: new Date(), updatedAt: new Date()},
      {id: 2, description: 'Editar los vídeos del curso de Backend',createdAt: new Date(), updatedAt: new Date()},
      {id:3, description: 'Subir los vídeos',createdAt: new Date(), updatedAt: new Date()}
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    
    //Add commands to revert seed here.
  
    await queryInterface.bulkDelete('tasks', null, {});
    
  }
};
