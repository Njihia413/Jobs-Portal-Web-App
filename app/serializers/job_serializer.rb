class JobSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :company_phone, 
  :company_website, :company_linkedin, :company_logo,
  :company_location, :title, :category_id, :salary_range,
  :job_type, :job_description, :location, :application_deadline,
  :experience, :qualification, :link_to_job, :user_id, :created_at
end
