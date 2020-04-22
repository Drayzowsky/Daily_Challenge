# Daily Challenge

my_message = input("enter string: ")
s = int(input("enter shift number: "))
crypt = input("Do you want to encrypt your message ? (Yes/No)")


def encrypt(string, shift):
    cipher = ''
    for char in string:
        if char == ' ':
            cipher = cipher + char
        elif char.isupper():
            cipher = cipher + chr((ord(char) + shift - 34) % 26 + 65)
        else:
            cipher = cipher + chr((ord(char) + shift - 45) % 26 + 97)

    return cipher


if crypt == 'Yes':
    print("after encryption: ", encrypt(my_message, s))
else:
    print("original: ", my_message)
