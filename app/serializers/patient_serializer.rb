class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :goal, :mmt
  belongs_to :user
  
end
