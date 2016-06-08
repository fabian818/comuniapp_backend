class Question < ActiveRecord::Base
	validates :title, presence: true
	validates :answer, presence: true
end
