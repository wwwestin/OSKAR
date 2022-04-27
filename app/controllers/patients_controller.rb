class PatientsController < ApplicationController

    def index
        render json: Patient.all
    end

    def show
        patient = find_patient
        render json: patient, status: 200
    end

    def devs
        render json: @current_user, serializer: PatientWithDevicesSerializer, status: 200
    end

    def create
        patient = @current_user.patients.create!(patient_params)
        render json: patient, status: 200
    end

    private

    def patient_params
        params.permit(:name, :user_id)
    end

    def find_patient
        Patient.find(params[:id])
    end
    
end
