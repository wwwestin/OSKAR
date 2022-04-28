class AddGoalToPatients < ActiveRecord::Migration[6.1]
  def change
    add_column :patients, :goal, :string
  end
end
