class PatientWithDevicesSerializer < ActiveModel::Serializer
  attributes :id, :name, :goal, :mmt

  has_many :devices
  
end
