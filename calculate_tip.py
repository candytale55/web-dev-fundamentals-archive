# tip() takes two parameters named total and percentage. This function should return the amount you should tip given a total and the percentage you want to tip.

def tip(total, percentage):
  return total * (percentage / 100) 

# tests tip function:
print(tip(10, 25))
# should print 2.5
print(tip(0, 100))
# should print 0.0

print(tip(1000, (4/5)))
print(4/5)
print(1000 * 4/5 /100)
# ?????

print(tip(40, 100))
# should print 40.0
