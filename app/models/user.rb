class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
  has_many :addresses, dependent: :destroy
  # validates :user_name, presence: true
  # validates :user_name, uniqueness: true
  # validates :user_name, length: { in: 2..20 }

  # validates :email, format: { with: /\A.*@.*\.com\z/ }
  # This is a suggestion for a very easy validation (only .com works), but for now I didn't put it
  # there, so that we can easy sign in -> only one @-sign ist necessary and one letter or
  # number before and behind...

  # validates :password, length: { in: 3..20}
  # This doesn't work, it still needs 6 characters, maybe it has something to do with devise...
end
