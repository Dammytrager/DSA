def dup_array(given_array):
    A = {}
    for element in given_array:
         if A[element]:
            return element
         else:
            A[element] = true










def dun_dup(arr):
    output = 0
    for item in arr:
        if arr.count(item) > 1:
            output = item
            break

    return output

arr1 = [1,2,3,4,5,2,9]
arr2 = [1,2,3,4,5,30,9,7,7]
print(dup_array(arr2))
