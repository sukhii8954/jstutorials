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

int getlength(char name[])
{

  int count = 0;
  for (int i = 0; name[i] != '\0'; i++)
  {
    count++;
  }
  return count;
}
int main()
{
  char name[20];
  cin >> name;

  cout << "The length of the string is " << getlength(name);
  //   vector<int> arr = {2,1,2,3,3,3,3};
  //    int ans =findmajor(arr);
  //    cout<<ans;
  return 0;
}