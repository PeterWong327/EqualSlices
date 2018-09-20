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
    if friendee && Friending.where(friendee_id: current_user.id, friender_id: friendee.id).empty? && Friending.where(friendee_id: friendee.id , friender_id: current_user.id).empty?
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

    # @friending = Friending.where(friendee_id: current_user.id, friender_id: params[:id])[0]
    #
    # Friending.where(friendee_id: params[:id] , friender_id: current_user.id)[0] unless @friending

    if Friending.find_by(friendee_id:params[:id],friender_id:current_user.id)
      @friending = Friending.find_by(friendee_id:params[:id],friender_id:current_user.id)
    elsif Friending.find_by(friendee_id:current_user.id,friender_id:params[:id])
      @friending = Friending.find_by(friendee_id:current_user.id,friender_id:params[:id])
    end

    # @friending = Friending.find(params[:id])
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
