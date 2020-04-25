# Daily Challenge


def reverse_bits(num, bit_size):
    binary = bin(num)
    reverse_bin = binary[:1:-1]
    reverse = reverse_bin + (bit_size - len(reverse_bin)) * "0"
    print(int(reverse, 2))


number = int(input("choose a number"))

reverse_bits(number, 32)
