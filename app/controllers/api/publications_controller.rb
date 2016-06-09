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

	def create
		puts 'estoy en create'
		@publication = Publication.new(title: params[:title],
			body: params[:body], image_url: params[:image_url], has_image: params[:has_image], created_at: params[:created_at])
		@publication.save
		puts @publication.errors.messages
	end

	def update
		@publication = Publication.find(params[:publication_id])
		@publication.update(title: params[:title], body: params[:body], image_url: params[:image_url], has_image: params[:has_image])
		puts @publication.errors.messages
	end	

	def destroy
		@publication = Publication.find(params[:publication_id])
		@publication.destroy
		render json: true
		puts @publication.errors.messages
	end

end

