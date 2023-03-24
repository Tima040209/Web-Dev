s = input()
x = int(input())
if(len(s)==4) :    
    if(s[0]==s[2] and s[1]==s[3]):
        if(x==1):{
            print("YES")
        }
        else : print("NO")
    else:
        if(x!=1):print("YES")
        else : print("NO")
else : 
    if(x==1):print("NO")
    else:print("YES")
