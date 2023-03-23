#include <iostream>
using namespace std;
int min(int a,int b){
    int res = 1;
    for(int i = 0; i <= b;i++){
        if(i==0)res =1;
        else res*=a;
    }
    return res;
}
int main(){
    int a,b;
    cin >> a >> b;
    cout << min(a,b);
}