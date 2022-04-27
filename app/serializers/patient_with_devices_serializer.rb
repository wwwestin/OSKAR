class PatientWithDevicesSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :devices
  
end
