class Api::BillsController < ApplicationController
  before_action :require_login

  def create
    biller_id = current_user.id
    #Bill.new(bill_params) after putting recipient id in bills table
    @bill = Bill.new(bill_params)
    # @bill = Bill.make_bill(bill_params, recipient_id)
    if @bill.save
      render "api/bills/show"
    else
      render json: @bill.errors.full_messages, status: 401
    end
  end

  def show
    @bill = Bill.find(params[:id])
    render "api/bills/show"
  end

  def index
    @bills = Bill.where(biller_id: current_user.id)
    render "api/bills/index"
  end

  def update
    @bill = current_user.bills.find(params[:id])
    if @bill.update_attributes(bill_params)
      render "api/bills/show"
    else
      render json: @bill.errors.full_messages, status: 401
    end
  end

  def destroy
    @bill = Bill.find(params[:id])
    @bill.destroy
    render "api/bills/show"
  end

# add recipient_id
  def bill_params
      params.require(:bill).permit(:biller_id, :bill_recipient_id, :description, :balance, :date)
  end

end
