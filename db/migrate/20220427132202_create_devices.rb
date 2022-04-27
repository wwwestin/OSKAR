class CreateDevices < ActiveRecord::Migration[6.1]
  def change
    create_table :devices do |t|
      t.belongs_to :patient, null: false, foreign_key: true
      t.integer :ankle_angle
      t.string  :sva
      t.string  :type
      t.string  :footwear

      t.timestamps
    end
  end
end
