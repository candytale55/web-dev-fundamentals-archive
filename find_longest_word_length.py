def find_longest_word_length(string):
  longest = ""
  stringArray = string.split()
  for word in stringArray:
    if len(word) > len(longest):
      longest = word
  return longest, len(longest)


find = find_longest_word_length

# TESTS
print find("The quick brown fox jumped over the lazy dog") # ('jumped', 6)
print find("May the force be with you") # ('force', 5)
print find("Google do a barrel roll") # ('Google', 6)
print find("Anita lava la tina") # ('Anita', 5)
print find("What is the average airspeed velocity of an unladen swallow")  # ('airspeed', 8)
print find("What if we try a super-long word such as otorhinolaryngology") # ('otorhinolaryngology', 19)
