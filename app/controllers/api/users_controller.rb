class Api::UsersController < ApplicationController

  # get me all the index i am trying to search for
  def index
    if params[:search]
      @users = User.where(email: params[:search][:email])
    end
    render json: @users
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      # render "/api/users/:id"
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
