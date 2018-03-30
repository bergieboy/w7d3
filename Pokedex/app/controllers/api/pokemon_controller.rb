class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all.includes(:items)
    render :index
  end

  def show
    @poke = Pokemon.find(params[:id])
    # @items = @pokemon.items
    # render json: @poke #@items]
    render :show
  end
end
