class Api::BillsController < ApplicationController
  before_action :require_login

  def create
    @bill = Bill.make_bill(bill_params, id)

    # if @bill
    #
    # else
    # end
  end

  def show
  end

  def index
  end


  def update
  end

  def destroy
  end

  def bill_params
    params.require(:bill).permit(:balance, :description, :biller_id)
  end

end
