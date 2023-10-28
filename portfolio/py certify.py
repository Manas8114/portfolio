import math

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

# Number of queries
q = int(input())
results = []

for _ in range(q):
    query = input().split()
    shape = query[0]

    if shape == 'rectangle':
        length, width = map(float, query[1:])
        rect = Rectangle(length, width)
        results.append(rect.area())
    elif shape == 'circle':
        radius = float(query[1])
        circ = Circle(radius)
        results.append(circ.area())

# Print the results with exactly 2 decimal points
for result in results:
    print(format(result, ".2f"))
