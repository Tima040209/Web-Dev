#include <iostream>
using namespace std;
int min(int a,int b){
    if((a==0 and b ==1) or (a==1 and b ==0)){
        return 1;
    }
    else return 0;
}
int main(){
    int a,b;
    cin >> a >> b ;
    cout << min(a,b);
}