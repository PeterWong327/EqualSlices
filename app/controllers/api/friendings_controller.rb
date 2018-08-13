class Api::FriendingsController < ApplicationController
  before_action :require_login

  def index
    @friendings = Friending.where(friender_id: current_user.id)
    render "api/friendings/index"
    # @friending = Friending.new(friending_params)
    # friender_id = current_user.id
    # if @friending.save
    #
    # else
    # end
  end

  def create
    @friending = Friending.new(friending_params)
    # @friending.friendee_id = params[:friendee_id]
    @friending.friender_id = current_user.id
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

  def friending_params
    params.require(:friending).permit(:friender_id, :friendee_id)
  end

end
