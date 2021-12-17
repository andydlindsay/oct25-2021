class Car
  def initialize make, model, year
    @make = make
    @model = model
    @year = year
  end

  # attr_reader :model
  # attr_writer :model

  attr_accessor :year, :make, :model

  # def make
  #   @make
  # end
  # def make= new_make
  #   @make = new_make
  # end
end

my_car = Car.new 'Toyota', 'Tercel', 1986
p my_car
p my_car.make()
my_car.make=('Ford')
p my_car

p my_car.model
my_car.model = 'F150'
p my_car

p my_car.year
my_car.year = 2011
p my_car
