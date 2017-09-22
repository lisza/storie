class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_login
    unless current_user
      render json: ["Must be logged in to perform this action"], status: 401
    end
  end
end
