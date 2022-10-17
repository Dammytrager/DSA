##
def append_and_delete(s, t, k)
  s_arr = s.split('')
  t_arr = t.split('')

  zipped = s_arr.length > t_arr.length ? custom_zip(s_arr, t_arr) : custom_zip(t_arr ,s_arr)

  required = zipped.flatten.sum

  return k >= required ? 'Yes' : 'No'
end

def custom_zip(primary, secondary)
  result = []
  changed = false

  primary.each_with_index do |item, index|
    if index + 1 <= secondary.length
      if item == secondary[index] && !changed
        arr = [0, 0]
      else
        arr = [1, 1]
        changed = true
      end
    else
      arr = [1, 0]
    end
    result << arr
  end

  return result
end

s = 'aba'
t = 'aba'
k = 7

puts append_and_delete(s, t, k)