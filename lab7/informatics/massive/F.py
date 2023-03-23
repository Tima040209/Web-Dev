a = []
cnt = 0
for i in range(int(input())):
    a.append(int(input()))
for i in range(1,len(a)-1):
    if(a[i-1] < a[i] > a[i+1]):cnt+=1
print(cnt)