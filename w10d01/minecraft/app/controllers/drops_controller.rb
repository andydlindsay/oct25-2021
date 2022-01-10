class DropsController < ApplicationController
  def index
    @mob = Mob.find params[:mob_id]
    @drops = @mob.drops
  end
end
