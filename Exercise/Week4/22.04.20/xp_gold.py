# Exercise XP Gold

# Exercise 1

import random


def get_random_temp(season):
    if season == "winter":
        return random.randrange(-10, 10)
    elif season == "autumn":
        return random.randrange(10, 16)
    elif season == "spring":
        return random.randrange(16, 25)
    elif season == "summer":
        return random.randrange(25, 40)


def main():
    season = input("Choose a season (winter/spring/summer/autumn)")
    temp = float((get_random_temp(season)))
    print(f"The temperature right now is {temp} degrees Celcius")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 < temp < 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 < temp < 23:
        print("Chill, dont forget your sweat-shirt during the night")
    elif 23 < temp < 32:
        print("Summer is coming")
    else:
        print("it's too hot, drink 3L minimum per day")


main()
