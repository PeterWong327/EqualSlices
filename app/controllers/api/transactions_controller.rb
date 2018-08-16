class Api::TransactionsController < ApplicationController
  before_action :require_login


  def create

  end

  def index

  end

  def show

  end

  def update
    
  end

  def transaction_params
    params.require(:transaction).permit(:balance_to_pay, :bill_id, :bill_recipient_id)
  end
end
