a = []
b =False
for i in range(int(input())):
    a.append(int(input()))
for i in range(1,len(a)):
    if(a[i] >= 0 and a[i-1] >= 0):
        b = True
        break
    elif(a[i]<0 and a[i-1]<0):
        b = True
        break
if(b):print("YES")
else:print("NO")