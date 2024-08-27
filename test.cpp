#include <bits/stdc++.h>
using namespace std;

//  int findmajor(vector<int> arr){
//        int  n = arr.size();
//              int count =0;
//             int mjelement = 0;
//        for( int i =0; i<n; i++){
//           if(count==0){
//             mjelement=arr[i];
// }
//    count+= ( arr[i]==mjelement ) ? 1 : -1;
// }
//           count =0;
//  for( int i =0; i<n; i++){
//       if(arr[i]==mjelement){
//         count++;
// }
// }
//    if( count > floor(n/2)) {
//     return mjelement;
// }
// else{
//         return -1;
// }
// }

// int getlength(char name[])
// {

//   int count = 0;
//   for (int i = 0; name[i] != '\0'; i++)
//   {
//     count++;
//   }
//   return count;
// }


    int totalFruits(vector<int> &arr) {
          
          int i =0, j=0;
          int maxlen = 0; 
          unordered_map<int ,int> freq;
              
              int n = arr.size();
           while(j< n){
               freq[arr[j]]++;
                  
                  if(freq.size()>2){    
                        freq[arr[i]]--;
                          if(freq[arr[i]]==0){
                            freq.erase(arr[i]);
                          } 
                          i++;
                   }
                    else if(freq.size()<=2){
                         maxlen = max(maxlen,j-i+1); 
                  }   
                   j++; 
           }
      return maxlen;
    }

int main()
{
   vector<int> arr;
    int n ;
    cout<< "enter size of array: "; 
    cin >> n;
   cout<<"Enter the elements in arr: ";
   for(int i = 0 ; i< n; i++ ){
      cin >> arr[i];
   }

   int ans = totalFruits(arr);
   cout <<ans ;

  return 0;
}