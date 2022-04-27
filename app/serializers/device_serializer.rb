class DeviceSerializer < ActiveModel::Serializer
  attributes :id, :ankle_angle, :sva, :brace, :footwear
  
end
