class Api::FriendingsController < ApplicationController
  before_action :require_login

  def index
    @friendings = Friending.all
    # @friending = Friending.new(friending_params)
    # friender_id = current_user.id
    # if @friending.save
    #
    # else
    # end
  end

  def create
    @friending = Friending.new(friending_params)
    @friending.friendee_id = params[:friendee_id]
    @friending.friender_id = current_user.id
    if @friending.save
      render "api/friendings/show"
    else
      render json: @friending.errors.full_messages, status: 400
    end
  end

  def show
    @friending = Friending.find(params[:friendee_id])
  end

  def destroy
    @friending = Friending.find(params[:friendee_id])
    @friending.destroy
    render "api/friendings/show"
  end

  def friending_params
    params.require(:friending).permit(:friender_id, :friendee_id)
  end

end
