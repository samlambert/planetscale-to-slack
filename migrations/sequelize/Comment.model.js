const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'post_id'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'comments',
    timestamps: true,
    underscored: true,
    indexes: [
      {
        name: 'idx_comments_on_post_id',
        fields: ['post_id']
      }
    ]
  });

  return Comment;
};