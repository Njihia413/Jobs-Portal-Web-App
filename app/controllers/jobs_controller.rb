class JobsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        jobs = Job.all
        render json: jobs
    end

    def show
        job = find_job
        render json: job
    end

    def create
        job = Job.create!(job_params)
        render json: job, status: :created
    end

    def update
        job = find_job
        job.update!(job_params)
        render json: job
    end

    def destroy
        job = find_job
        job.destroy
        head :no_content
    end

    private
    def job_params
        params.permit(:company_name, :company_phone, :company_website, :company_linkedin, 
        :company_logo, :company_location, :title, :category_id, :salary_range, :job_type,
        :job_description, :location, :application_deadline, :experience, :qualification, 
        :link_to_job, :user_id, :created_at)
    end

    def find_job
        job = Job.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Job not found" }, status: :not_found
    end
end
