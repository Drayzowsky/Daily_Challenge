# Mini Project Tic Tac Toe

board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]


def display_board():
    print("+" + "-" * 5 + "+")
    print("|" + board[0] + "|" + board[1] + "|" + board[2] + "|")
    print("+" + "-" * 5 + "+")
    print("|" + board[3] + "|" + board[4] + "|" + board[5] + "|")
    print("+" + "-" * 5 + "+")
    print("|" + board[6] + "|" + board[7] + "|" + board[8] + "|")
    print("+" + "-" * 5 + "+")


def check_win():
    if board[0] == board[1] == board[2] or board[3] == board[4] == board[5] or board[6] == board[7] == board[8]:
        print("You win the game")
    elif board[0] == board[3] == board[6] or board[1] == board[4] == board[7] or board[2] == board[5] == board[8]:
        print("You win the game")
    elif board[0] == board[4] == board[8] or board[2] == board[4] == board[6]:
        print("You win the game")


def player_input():
    for i in range(10):
        player = input("Choose a player (X/O)")
        position = int(input("Choose a position"))
        if player == "X":
            board[position - 1] = player
        elif player == "O":
            board[position - 1] = player
        print(display_board())

        check_win()


def play_the_game():
    print("Welcome to the game Tic Tac Toe, Enjoy !")
    display_board()
    player_input()


play_the_game()
