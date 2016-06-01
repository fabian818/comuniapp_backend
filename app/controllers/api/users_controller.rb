class Api::UsersController < ApplicationController
	def facebook
		user = User.from_access_token_facebook(params[:token])
		data = {
			user_data: user
		}
		render json: data
	end
end
