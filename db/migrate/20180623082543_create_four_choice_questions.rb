class CreateFourChoiceQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :four_choice_questions do |t|
      t.text :title
      t.text :a
      t.text :b
      t.text :c
      t.text :d
      t.string :answer

      t.timestamps
    end
  end
end
