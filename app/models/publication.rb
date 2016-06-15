class Publication < ActiveRecord::Base
	validates :title, presence: true, uniqueness: true
	validates :body, presence: true
	validates :has_image, presence: true
end
