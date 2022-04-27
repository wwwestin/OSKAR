class UserWithPatientsSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :patients
  
end
