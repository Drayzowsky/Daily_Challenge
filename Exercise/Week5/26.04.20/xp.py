# Exercise XP


# Exercise 1

class Cat:
    species = "mammal"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    # Function that find the oldest cat
    def oldest_cat(self, *cats):
        ages = [x.age for x in cats]
        oldest = max(ages)
        print(f"The oldest cat is {oldest} years old")


# Instantiate the Cat object with 3 cats
cat1 = Cat("Fifi", 7)
cat2 = Cat("Chat", 3)
cat3 = Cat("Bob", 5)

# Printing the oldest cat
Cat.oldest_cat(cat1, cat1, cat2, cat3)


# Exercise 2

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def talk(self):
        print("WOUAAFF")

    def jump(self):
        height = self.height * 2
        print(height)


Davids_dog = Dog("Rex", 50)

print(Davids_dog.name)
print(Davids_dog.height)
Davids_dog.jump()

Sarahs_dog = Dog("Teacup", 20)

print(Sarahs_dog.name)
print(Sarahs_dog.height)
Sarahs_dog.jump()

if Davids_dog.height > Sarahs_dog.height:
    Davids_dog.winner = True
    print(f"The winner is {Davids_dog.name}")
else:
    Sarahs_dog.winner = True
    print(f"The winner is {Sarahs_dog.name}")
