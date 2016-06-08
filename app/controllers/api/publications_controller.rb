class Api::PublicationsController < ApplicationController
	def index
		@publications = Publication.all
	end

	def show
		begin
			@publication = Publication.find(params[:publication_id])
		rescue
			render json: {publication: {}}
		end		
	end

    def                                
    end
end
