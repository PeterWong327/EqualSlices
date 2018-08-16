class Api::BillsController < ApplicationController
  before_action :require_login

  def create
    @bill = Bill.new(bill_params)

    # if @bill.save
    #
    # else
    # end
  end

  def show
  end

  def index
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def bill_params
    params.require(:bill).permit(:balance, :description, :biller_id)
  end

end
