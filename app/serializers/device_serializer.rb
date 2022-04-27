class DeviceSerializer < ActiveModel::Serializer
  attributes :id, :ankle_angle, :sva, :type, :footwear
  
end
