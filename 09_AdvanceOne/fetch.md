![alt text](<callstack.png>)
# fetch priority
- when a fetch request is made the browser checks for the priority of the request if its high priority it will be added to the fetch queue otherwise it will be added to the normal queue
- once the fetch queue is empty the normal queue tasks are executed
![alt text](<fetchworking.png>)
## fetch internal working
- the window object has a fetch method which is used to make network requests
- when the fetch method is called it creates a new Request object with the provided URL and options
-the fulfill request method is called to process the request and return a Response object
- the fulfill request method checks the priority of the request and adds it to the appropriate queue (fetch queue or normal queue)
- the request is then processed and a Response object is created and returned to the caller
-even in case of 404 error the network request is considered successful and a Response object is returned with the status code 404
- if there is a network error the promise is rejected with a TypeError
