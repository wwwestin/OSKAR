class AddMmtToPatients < ActiveRecord::Migration[6.1]
  def change
    add_column :patients, :mmt, :string
  end
end
