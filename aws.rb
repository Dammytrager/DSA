# Write your code here
days = 0

arr = parcels
no_of_zeros = arr.filter { |item| item <= 0 }.length

while no_of_zeros < parcels.length
  min = arr.filter { |item| item > 0 }.min
  arr = arr.map { |item| item - min }
  no_of_zeros = arr.filter { |item| item <= 0 }.length
  days += 1
end

return days