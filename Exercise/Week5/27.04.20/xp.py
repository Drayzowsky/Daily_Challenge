# Exercise XP


# Exercise 1

class Familly:
    members = [
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}]
    last_name = "Smith"

    def __init__(self, name, age, gender, is_child):
        self.name = name
        self.age = age
        self.gender = gender
        self.is_child = is_child

    def born(self):
        new_member = {"name": self.name, "age": self.age, "gender": self.gender, "is_child": self.is_child}
        Familly.members.append(new_member)
        print("Congratulation !")

    def is_18(self):
        for i in range(len(Familly.members)):
            if Familly.members[i].get("age") > 18:
                print(Familly.members[i].get("name"))
                print(True)
            else:
                print(Familly.members[i].get("name"))
                print(False)


child1 = Familly("Tom", 2, "Male", True)

child1.born()
child1.is_18()


