def swap_casw(s):
    t=""
    for i in s:
        if("A" <= i <= "Z"):
            t+=(i.lower())
        elif("a" <=i <="z"):
            t+=(i.upper())
        else:t+=i
    print(t)
s = input()
swap_casw(s)
