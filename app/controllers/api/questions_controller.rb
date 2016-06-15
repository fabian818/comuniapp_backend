class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
  end

  def show
    begin
      @question = Question.find(params[:question_id])
    rescue
      render json: {question: {}}
    end 
  end

  def create
    puts 'estoy en create'
    @question = Question.new(title: params[:title],
      answer: params[:answer])
    @question.save
    puts @question.errors.messages
  end

  def update
    @question = Question.find(params[:question_id])
    render json: @question.update(title: params[:title], answer: params[:answer])
  end

  def destroy
    @question = Question.find(params[:question_id])
    @question.destroy
    render json: true
    puts @question.errors.messages
  end
end
