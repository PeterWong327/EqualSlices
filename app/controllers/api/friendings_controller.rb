class Api::FriendingsController < ApplicationController
  before_action :require_login

  def index
    @friendings = Friending.where(friender_id: current_user.id)
                            .or(Friending.where(friendee_id: current_user.id))
    render "api/friendings/index"
  end

  def create
    if params[:search]
      friendee = User.where(email: params[:search][:email]).first
    else
      render json: ["User does not exist with provided email."],
        status: 401
    end

    @friending = Friending.new()
    @friending.friender_id = current_user.id
    @friending.friendee_id = friendee.id

    if @friending.save
      render "api/friendings/show"
    else
      render json: @friending.errors.full_messages, status: 401
    end
  end

  def show
    #find by id of Friending relationship
    @friending = Friending.find(params[:id])
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
