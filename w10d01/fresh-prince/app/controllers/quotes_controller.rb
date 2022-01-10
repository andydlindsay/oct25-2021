class QuotesController < ApplicationController
  def index
    # GET /actors/2/quotes
    @actor = Actor.find params[:actor_id] # 2
    @quotes = @actor.quotes
    # @something_else = 'hello world'
    # render json: {
    #   quotes: @quotes,
    #   message: @something_else
    # }
  end
end
