#include <iostream>
using namespace std;
int min(int a,int b,int c,int d){
    int min = 1000000;
    if(a < min)min = a;
    if(b < min )min = b;
    if(c < min) min = c;
    if(d < min)min =d;
    return min;
}
int main(){
    int a,b,c,d;
    cin >> a >> b >> c >> d;
    cout << min(a,b,c,d);
}