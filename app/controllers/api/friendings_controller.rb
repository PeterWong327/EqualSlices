class Api::FriendingsController < ApplicationController
  before_action :require_login

  def index
    @friendings = Friending.where(friender_id: current_user.id)
                            .or(Friending.where(friendee_id: current_user.id))
    render "api/friendings/index"
  end

# 1. Checks if a user has the email inputted.
# 2. If user exists, try to save. If saves, renders friends.
  def create
    friendee = User.where(email: params[:search][:email]).first
    if friendee
      @friending = Friending.new()
      @friending.friender_id = current_user.id
      @friending.friendee_id = friendee.id

      if @friending.save
        render "api/friendings/show"
      else
        render json: @friending.errors.full_messages, status: 401
      end

    else
      render json: ["Please enter a valid email address."],
        status: 401
    end
  end

  def show
    #find by id of Friending relationship
    if !Friending.find_by(params[:friendee_id]).nil?
      @friending = Friending.find_by(params[:friendee_id])
    elsif !Friending.find_by(params[:friender_id]).nil?
      @friending = Friending.find_by(params[:friender_id])
    end
    render "api/friendings/show"
  end

  def destroy
    @friending = Friending.find(params[:id])
    @friending.destroy
    #redirect in frontend
  end

  # def friending_params
  #   params.require(:search).permit(:username)
  # end

end
