class Patient < ApplicationRecord
    has_many :devices
    belongs_to :user
    
end
