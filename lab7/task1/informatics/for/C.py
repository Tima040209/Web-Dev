x = int(input())
y = int(input())
for i in range(x,y):
    for r in range(i) :
        if(r**2==i):
            print(i)
            break