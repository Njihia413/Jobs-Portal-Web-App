class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :company_name
      t.string :company_phone
      t.string :company_website
      t.string :company_linkedin
      t.string :company_logo
      t.string :company_location
      t.string :title
      t.integer :category_id
      t.string :salary_range
      t.string :job_type
      t.string :job_description
      t.string :location
      t.string :application_deadline
      t.string :experience
      t.string :qualification
      t.string :link_to_job
      t.integer :user_id

      t.timestamps
    end
  end
end
