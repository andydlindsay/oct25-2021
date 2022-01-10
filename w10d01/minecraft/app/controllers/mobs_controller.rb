class MobsController < ApplicationController
  def index
    @mobs = Mob.all
  end
end
