a = []
cnt = 0
for i in range(int(input())):
    a.append(int(input()))
for elem in a:
    if(elem >= 0):cnt+=1
print(cnt)