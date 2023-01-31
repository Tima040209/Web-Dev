#include <iostream>
using namespace std;

struct Node{
    int val;
    Node * next;
    Node * prev;
    Node(int val){
        this->val = val;
        next = NULL;
        prev = NULL;
    }
};

struct DoubleLinkedList{
    Node * head;
    Node * tail;
    DoubleLinkedList(){
        head = NULL;
        tail = NULL;
    }

    void push(int val){
        Node * n = new Node(val);
        if(head == NULL){
            head = n;
            tail = n;
        } else{
            tail->next = n;
            tail = n;
        }
    }

    void print(){
        Node * current = head;
        while(current != NULL){
            cout << current->val << " ";
            current = current->next;
        }
    }

    void add(int num, int index){
        Node * cur = head;
        Node * n = new Node(num);
        if(index == 0){
           n->next = head;
           head = n; 
        }
        int cnt = 1;
        while(cur != NULL){
            if(cnt == index){
                n->next = cur->next;
                cur->next = n;
                // if(n->next == NULL){
                    // tail = n;
                // }
            } else{
                cur = cur->next;
            }
            cnt++;
        }
    }
};


int main(){
    int n;
    cin >> n;
    DoubleLinkedList list;
    for(int i = 0; i < n; i++){
        int x;
        cin >> x;
        list.push(x);
    }
    int num, index;
    cin >> num >> index;
    list.add(num, index);
    list.print();
}