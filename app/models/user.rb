class User < ActiveRecord::Base
	validates :email, presence: true, uniqueness: true
	validates :name, presence: true

	def self.from_access_token_facebook(oauth_access_token)
		@graph = Koala::Facebook::API.new(oauth_access_token)
		profile = @graph.get_object("me?fields=name,email, first_name, last_name")
		email = profile["email"]
		first_name = profile["first_name"]
		last_name = profile["last_name"]
		name = first_name + last_name
		return User.where(email: email).last if User.where(email: email).exists?
		return nil if email.nil?
		where(email: email).first_or_create do |user|
			user.name = name
			user.email = email
		end
	end
end
