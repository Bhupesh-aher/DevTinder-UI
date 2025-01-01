<!-- Body
    Navbar
    Route / ->    feed
    Route /login   -> login 
    Route /connections   -> connections 
    Route /profile -> profile




    

To achieve the same functionality using fetch() instead of axios, you would structure your request like this:

javascript
Copy code
const res = await fetch(BASE_URL + "/login", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    emailId,
    password,
  }),
  credentials: 'include', // This is equivalent to { withCredentials: true } in Axios
});
Explanation:
Method: The fetch() function defaults to GET, so you need to explicitly set the method to 'POST'.
Headers: The request body is expected to be in JSON format, so you set the 'Content-Type' header to 'application/json'.
Body: You need to stringify the emailId and password into a JSON string for the request body.
Credentials: The credentials: 'include' option ensures that cookies (and other credentials) are sent with the request, similar to the withCredentials: true in Axios.
Example of handling the response:
You can then handle the response like this:

javascript
Copy code
const res = await fetch(BASE_URL + "/login", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    emailId,
    password,
  }),
  credentials: 'include',
});

if (res.ok) {
  const data = await res.json();
  console.log(data);
} else {
  console.error('Login failed');
}
In this code:

res.ok checks if the status code is in the range 200-299, indicating a successful response.
If successful, it parses the response body as JSON with await res.json().

 -->
