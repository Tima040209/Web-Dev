x = int(input())
i = 0
b = True
while  b:
    if(2**i == x):
        print("YES")
        b = False
    elif(2**i > x):
        print("NO")
        b = False
    else:i+=1