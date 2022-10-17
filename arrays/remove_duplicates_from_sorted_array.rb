# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    hash = {}

    nums.length.times do |index|
        num = nums[index]
        if hash.key?(num)
            nums[index] = '_'
        else
            hash[num] = true
        end
    end

    return nums
end

remove_duplicates([1,1,2])