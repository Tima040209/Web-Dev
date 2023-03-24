def is_leap(year):
    if(year % 4 == 0 and year % 400 == 0):print("True")
    else : print("False")
year =int(input())
is_leap(year)