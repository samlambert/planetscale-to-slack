class AddIndexToCommentsPostId < ActiveRecord::Migration[7.0]
  def up
    add_index :comments, :post_id, name: 'idx_comments_on_post_id'
  end

  def down
    remove_index :comments, :post_id, name: 'idx_comments_on_post_id'
  end
end