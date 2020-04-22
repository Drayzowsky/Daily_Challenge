# Daily Challenge

matrix = [["7", " ", "3"],
          ["T", "s", "i"],
          ["h", "%", "x"],
          ["i", " ", "#"],
          ["s", "M", " "],
          ["$", "a", " "],
          ["#", "t", "%"],
          ["i", "r", "!"]
          ]
print(matrix)
column = []
counter = 0

while counter < 3:
    for row in matrix:
        column.append(row[counter])
    counter += 1

message = []

for i in column:
    if 65 <= ord(i) <= 90 or 97 <= ord(i) <= 122:
        message.append(i)
    elif i == " " or 49 <= ord(i) <= 57:
       continue
    else:
        i = " "
        message.append(i)
print(message)
