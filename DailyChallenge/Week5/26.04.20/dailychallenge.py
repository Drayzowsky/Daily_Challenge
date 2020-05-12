# Daily Challenge


from itertools import combinations


# Exercise 1:

class Subset:
    def __init__(self, nums):
        self.input = nums

    def find_subsets(self):
        for i in range(4):
            subsets = combinations(self.input, i)
            print(list(subsets))


input1 = Subset([4, 5, 6])

input1.find_subsets()


# Exercise 2:

class Subset:
    def __init__(self, nums):
        self.input = nums

    def find_sum_zero(self):
        sumzero = combinations(self.input, 3)
        return list(filter(lambda x: sum(x) == 0, sumzero))


input2 = Subset([-25, -10, -7, -3, 2, 4, 8, 10])

print(input2.find_sum_zero())
