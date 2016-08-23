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
		puts params
		@publication = Publication.new(title: params[:title],
			body: params[:body], image_url: params[:image_url], has_image: params[:has_image])
		@publication.save
		puts @publication.errors.messages
	end

	def update
		@publication = Publication.find(params[:publication_id])
		render json: @publication.update(title: params[:title], body: params[:body], image_url: params[:image_url], has_image: params[:has_image])
		# puts @publication.errors.messages
	end	

	def destroy
		begin
			@publication = Publication.find(params[:publication_id]).destroy
			if @publication.destroyed?
				render json: true
			else
				render json: false
			end
		rescue
			render json: false
		end
	end
end

