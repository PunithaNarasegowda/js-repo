- call stack is a mechanism for an interpreter (like javascript) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.
- when a function is invoked, a new frame is created and pushed onto the call stack. This frame contains information about the function, such as its parameters and local variables. When the function completes, its frame is popped off the stack, and control is returned to the previous frame.
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png) --> for result1
  -- 
  ![alt text](image-3.png)
  ![alt text](image-4.png) --> for result2