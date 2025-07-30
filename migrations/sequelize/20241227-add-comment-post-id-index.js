module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('comments', ['post_id'], {
      name: 'idx_comments_on_post_id'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('comments', 'idx_comments_on_post_id');
  }
};