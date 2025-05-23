# The purpose of this function is to take a number grade (1-100), defined by the variable grade, 
# and to return the appropriate letter grade (A, B, C, D, or F).
# 90 or higher gets an “A”
# 80 - 89 gets a “B”
# 70 - 79 gets a “C”
# 65 - 69 gets a “D”
# Anything below a 65 gets an “F”


def grade_converter(grade):
    if grade >= 90:
        return "A"
    elif grade >= 80 and grade <=89:
        return "B"
    elif grade >= 70 and grade <=79:
        return "C"
    elif grade >= 65 and grade <=69:
        return "D"
    else:
        return "F"
      
# This should print an "A"      
print grade_converter(92)

# This should print a "C"
print grade_converter(70)

# This should print an "F"
print grade_converter(61)
