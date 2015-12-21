class User < ActiveRecord::Base
  attr_reader :password
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true

  after_initialize :ensure_session_token

  has_many :follows,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: "Follow"

  has_many :followees,
  through: :follows,
  source: :followee

  has_many :followers,
  through: :follows,
  source: :follower

  has_many :posts,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: "Post"


  def self.find_latest(id)
    user = self.find(id)
    return user.posts.last
  end


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
