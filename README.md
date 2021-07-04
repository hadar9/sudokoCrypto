# sudokoCrypto
this project was created for our advanced cryptography course.
the subject of the project is zero knowledge proof and we choose sudoko board in order to implement it.

https://user-images.githubusercontent.com/44959973/124393489-77d4b080-dd03-11eb-84f6-30f1a0e4b466.mp4

"In cryptography, a zero-knowledge proof or zero-knowledge protocol is a method by which one party (the prover) can prove to another party (the verifier) that they know a value x, without conveying any information apart from the fact that they know the value x. The essence of zero-knowledge proofs is that it is trivial to prove that one possesses knowledge of certain information by simply revealing it; the challenge is to prove such possession without revealing the information itself or any additional information.[1]"-taken from wikipedia.

for reading more about it use this link : https://en.wikipedia.org/wiki/Zero-knowledge_proof.

we took the client board from this site:
http://pi.math.cornell.edu/~mec/Summer2009/meerkamp/Site/Solving_any_Sudoku_I.html

instructions for running the app:

in the console of vs code write these commands:
1. in the root dir 
2.  npm install
3.cd client
4.npm install
5.cd ..
6. npm run dev

if its still not working and there this error :
> react-scripts start
> [1] > [1] 'react-scripts' is not recognized as an internal or external command

write these commands:
1. in the root dir 
2.cd client
3.npm install 'react-scripts'
4.cd ..
5.npm run dev
