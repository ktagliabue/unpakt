class AddUserToClosets < ActiveRecord::Migration[5.0]
  def change
    add_column :closets, :user_id, :integer
    add_index :closets, :user_id
  end
end
