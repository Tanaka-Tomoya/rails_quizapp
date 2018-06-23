require 'test_helper'

class FourChoiceQuestionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @four_choice_question = four_choice_questions(:one)
  end

  test "should get index" do
    get four_choice_questions_url, as: :json
    assert_response :success
  end

  test "should create four_choice_question" do
    assert_difference('FourChoiceQuestion.count') do
      post four_choice_questions_url, params: { four_choice_question: { a: @four_choice_question.a, answer: @four_choice_question.answer, b: @four_choice_question.b, c: @four_choice_question.c, d: @four_choice_question.d, title: @four_choice_question.title } }, as: :json
    end

    assert_response 201
  end

  test "should show four_choice_question" do
    get four_choice_question_url(@four_choice_question), as: :json
    assert_response :success
  end

  test "should update four_choice_question" do
    patch four_choice_question_url(@four_choice_question), params: { four_choice_question: { a: @four_choice_question.a, answer: @four_choice_question.answer, b: @four_choice_question.b, c: @four_choice_question.c, d: @four_choice_question.d, title: @four_choice_question.title } }, as: :json
    assert_response 200
  end

  test "should destroy four_choice_question" do
    assert_difference('FourChoiceQuestion.count', -1) do
      delete four_choice_question_url(@four_choice_question), as: :json
    end

    assert_response 204
  end
end
