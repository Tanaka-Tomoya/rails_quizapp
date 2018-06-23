class FourChoiceQuestionsController < ApplicationController
  before_action :set_four_choice_question, only: [:show, :update, :destroy]

  # GET /four_choice_questions
  # GET /four_choice_questions.json
  def index
    @four_choice_questions = FourChoiceQuestion.all
  end

  # GET /four_choice_questions/1
  # GET /four_choice_questions/1.json
  def show
  end

  # POST /four_choice_questions
  # POST /four_choice_questions.json
  def create
    @four_choice_question = FourChoiceQuestion.new(four_choice_question_params)

    if @four_choice_question.save
      render :show, status: :created, location: @four_choice_question
    else
      render json: @four_choice_question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /four_choice_questions/1
  # PATCH/PUT /four_choice_questions/1.json
  def update
    if @four_choice_question.update(four_choice_question_params)
      render :show, status: :ok, location: @four_choice_question
    else
      render json: @four_choice_question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /four_choice_questions/1
  # DELETE /four_choice_questions/1.json
  def destroy
    @four_choice_question.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_four_choice_question
      @four_choice_question = FourChoiceQuestion.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def four_choice_question_params
      params.require(:four_choice_question).permit(:title, :a, :b, :c, :d, :answer)
    end
end
