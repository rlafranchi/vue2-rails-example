class Employee < ApplicationRecord
  validates :name, :email, :presence => true, :uniqueness => true
  validates_format_of :email, :with => /@/
end
