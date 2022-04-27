class DevicesController < ApplicationController

    def index
        render json: Device.all
    end

    def show
        device = find_device
        render json: device, status: 200
    end

    def create
        device = @current_user.devices.create!(device_params)
        render json: device, status: 200
    end

    private

    def device_params
        params.permit(:ankle_angle, :sva, :brace, :footwear, :patient_id)
    end

    def find_device
        Device.find(params[:id])
    end
    
end
