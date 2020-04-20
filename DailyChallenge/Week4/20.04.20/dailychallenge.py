# Daily Challenge
birthday_day = input("what is your birthday (DD)")
birthday_month = input("Birthday month (MM)")
birthday_year = int(input("Birthday year(YYYY)"))
age = 2020 - birthday_year
print(birthday_day + "/" + birthday_month + "/" + str(birthday_year))
if age >= 10:
    candle_age = int(str(age)[1])
else:
    candle_age = age
candle = "i" * candle_age
space = " " * int(6 + (10 - candle_age) / 2)
space_cake = " " * 17
_ = "_" * 11
v = "^" * 17
s = "~" * 19
cake = "     " + _ + " \n" + "    |:H:a:p:p:y:|\n  __|" + _ + "|__\n |" + v + "|\n |:B:i:r:t:h:d:a:y:|\n |" + space_cake + "|\n " + s
if birthday_year % 4 == 0:
    print("You born in a leap year")
    print((f"\n{space}{candle}\n" + cake) * 2)
else:
    print(f"\n{space}{candle}\n" + cake)