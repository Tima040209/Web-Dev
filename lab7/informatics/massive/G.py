a = []
for i in range(int(input())):
    a.append(0)
i = len(a)-1
while i >= 0:
    a[i]=int(input())
    i-=1
for elem in a:
    print(elem)