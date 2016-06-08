class CreatePublications < ActiveRecord::Migration
  def change
    create_table :publications do |t|
      t.string :title
      t.text :body
      t.string :image_url
      t.boolean :has_image

      t.timestamps null: false
    end
  end
end
