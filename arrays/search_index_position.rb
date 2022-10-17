# @param {Integer[]} nums
# @param {Integer} target
# @param {Integer[]} nums
# @return {Integer}
def search_insert(nums, target, range_arr = nil)
  range_arr ||= (0...nums.length).to_a
  return range_arr[0] if nums.length == 0

  if nums.length == 1
    return range_arr.last if nums[0] == target
    return range_arr.last + 1 if target > nums[0]
    return [range_arr.last - 1, 0].max if target < nums[0]
  end

  mid = nums.length / 2
  if target == nums[mid]
    return range_arr[range_arr.length / 2]
  elsif target < nums[mid]
    return search_insert(nums[0...mid], target, (0...mid).to_a)
  else
    return search_insert(nums[(mid + 1)..nums.length], target, ((mid + 1)..nums.length).to_a)
  end
end

nums = [1,3, 5, 6]
target = 7

puts search_insert(nums, target)