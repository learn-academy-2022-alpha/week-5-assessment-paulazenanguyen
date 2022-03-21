# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# create a method
# parameter that takes in array

def finder(array, letter)
 array.select do |value|
   if value.include?(letter)
     value
   end
 end
end


# p finder(beverages_array, letter_t)
# p finder(beverages_array, letter_o)
# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum(numbers)
  total = 0
  i = 0
  while i < numbers.count
    total += numbers[i]
    i += 1
  end
  total
end

p sum(nums_array1)
p sum(nums_array2)
# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# module Speed_Slowdown
# class Bike
#   def initialize(model
#     @wheels = 2
#     @model = model
#     @current_speed = 0
#   end
#
#   def bike_info
#     "#{@model} has #{@wheels} wheels and is going #{@current_speed} mph"
#   end
#
#   def pedal_faster.zoom_foom(number)
#     @current_speed +
#   end
# end
# end

class Bike
  def initialize(model)
    @wheels = 2
    @model = model
    @current_speed = 0
  end

  def bike_info
    "#{@model} has #{@wheels} wheels and is going #{@current_speed} mph"
  end

  def pedal_faster number
     @current_speed = @current_speed + number
  end

  def break_number number
    if @current_speed - number > 0
      @current_speed = @current_speed - number
    else @current_speed = 0
    end
  end
end

my_bicycle = Bike.new('Monster Truck')
p my_bicycle.bike_info
p my_bicycle.pedal_faster 10
p my_bicycle.pedal_faster 18
p my_bicycle.break_number 5
p my_bicycle.break_number 30
