def title_case(string):
  sentence = string.split()
  new_sentence = ""
  for word in sentence:
    new_sentence += word.capitalize() + " "
  return new_sentence

print(title_case("I'm a little tea pot"))
# I'm A Little Tea Pot 






