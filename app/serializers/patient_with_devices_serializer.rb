class PatientWithDevicesSerializer < ActiveModel::Serializer
  attributes :id, :name, :goal

  has_many :devices
  
end
