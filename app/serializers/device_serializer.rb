class DeviceSerializer < ActiveModel::Serializer
  attributes :id, :ankle_angle, :sva, :brace, :footwear
  belongs_to :patient
  
end
