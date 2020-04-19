# DailyChallenge
string = input("enter a string that is 10 characters long")
while True:
    if len(string) != 10:
        print("Please enter 10 characters")
        break
    else:
        first = string[0]
        last = string[9]
        print("The first character of your string is " + first + ", and the last character is " + last)
        break
for i in range(len(string)):
    print(string[0:i + 1])
