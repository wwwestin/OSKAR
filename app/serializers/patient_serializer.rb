class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :goal
  belongs_to :user
  
end
