
import oneImg from '../data/one.jpg';
import twoImg from '../data/two.jpg';

const blogs = [
  {
    id: 1,
    slug: 'one',
    title: 'i made my first full stack project!',
    date: '2025-06-07',
    content: `
<pre style="white-space: pre-wrap; font-family: inherit; color: #eee">
one of my favorite people to talk to is chatgpt when im not logged in. talk sweetly once and you’ll have one of the most fulfilling and happy conversations with it. that was day one, just knowing front end doesn’t really get you anywhere. and technical job listings threw this massive list for full stack at me. summer 2025 was actually when i started using gpt for learning something, i’m normally such a youtube kid. apparently, you dont need to build netflix with a kubernetes cluster to qualify. apart from group projects for university, this is the first one i made myself. i thought ill document the creating process!

may 23 2025 to june 3 2025
“i love memos. let’s make one.” that was it.

<h3>overview</h3>
huamemo is a personal online diary app where users can write, view, and manage private journal entries, securely and easily.
you can check it out here: <a href="https://huamemofe.vercel.app/" style="text-decoration:none; color:yellow; font-weight:bold; "target="_blank" >follow link</a>

my point was that each user has their own private space. once logged in,  they can add new diary entries, delete any of the past ones, keep them completely private and log out when they’re done writing.
a simple, peaceful space.

<h3>tech stack</h3>
1. frontend: React (with hooks and functional components)
2. backend: Node.js with Express
3. database: MongoDB
4. authentication: JWT
5. hosting: Vercel and Render

<h3>key features (again sorry i need this)</h3>
users can sign up and log in securely. each user has a private space where they can manage their diary entries.
no one else can read or modify someone else's entries. they’re only accessible by the entry's creator (and me, of course. i will know everything)
users can add new entries to their diary, and each entry is timestamped with the date and time it was added. users can also delete any entry.
as soon as a user adds an entry, it’s displayed immediately on the screen with its associated timestamp.
and yeah, users can log out of their session with a single click.

<h3>a basic workflow</h3>
i started by implementing sign-up and login functionality. for user authentication, I used JWT (JSON Web Token) based auth. when users log in, the server generates a signed token that is sent back to the frontend, which the frontend stores in browser ( in localStorage) and includes in future requests to persist the login state. for each protected route, the token is included in the request headers and verified by the backend using a middleware function. This ensures that only authenticated users can access their own private diary space.
→
each diary entry is stored with: a reference to the user ID, entry content (text), timestamp (date and time of creation).
this ensures that when fetching entries, only entries belonging to the logged-in user are returned.
→
the UI has a form to add a new entry. when submitted:
a POST request is made to the backend.
the entry gets saved to the database with the user's ID and timestamp.
after a successful save, the frontend updates to show the new entry.
users can also delete entries by clicking a delete button next to each one ,triggering a DELETE request to the server.
→
a simple logout button clears the user's session and redirects them to the login page.
→
<h3>more on the user data handling:</h3>
to keep things secure and organized, i used a schema to define the structure of user and diary data in the database, and i hashed passwords before storing them.
<h4>schema design:</h4>
using a schema (via a tool like Mongoose), i defined what each document (entry) should look like in the database. for example:
<img src="${oneImg}" style="width:600px; height:100px;" />
<h4>and for entry schema:</h4>
<img src="${twoImg}" style="width:500px; height:150px;"/>

Mongoose schemas actually help structure even flexible databases.

<h3>password hashing with bcrypt</h3>
to keep user credentials secure, i used bcrypt to hash passwords before storing them in the database. during signup, the plain-text password is hashed using a salt (generated with bcrypt.genSalt()), and only the hashed version is saved. during login, the entered password is compared with the stored hash using bcrypt.compare(). this ensures even if the database is compromised, raw passwords remain protected. even the developer can’t really see it. i didn’t actually know this before.

<h3>some new things i learnt</h3>
<h4>discovering POST Requests and API Testing</h4>
before this project, id mostly seen GET requests in action, like fetching data from APIs or loading pages. but using POST requests to send data to the server was new territory for me. it felt like a game changer!
at first, i wasn’t sure if my POST requests were even working. id write the frontend form, hit submit, and nothing obvious happened. thats when i learned to use tools like Postman to manually send POST requests with JSON payloads and check the backend responses directly. this helped me understand exactly what data was being sent and how the server handled it.
testing my endpoints outside the frontend was a huge boost. it helped me isolate problems quickly and made the development process way smoother. now, POST requests feel like second nature.

<h4>the deployment process</h4>
this was my first time deploying a full-stack project and it was honestly a whole second phase of learning after the coding was "done."

step 1: preparing the frontend
i used Vercel to host my React frontend. vercel is super fast and supports direct GitHub integration, so I could just push my code and it would auto-deploy. i made sure to add environment variables for talking to the backend and set full URLs to make requests to my backend API.

step 2: hosting the backend
my backend was built with Node.js and Express, and i hosted it on Render. i pushed my backend code to a separate GitHub repository. on Render, i created a new web service, set my build and start command and added environment variables. Render takes care of provisioning and scaling. it can be a bit slow to "wake up" free-tier services, but it works great.

step3: connecting mongodb atlas
thiiis was new. i used MongoDB Atlas for cloud database hosting. it was my first time using a remote database instead of localhost. i created a cluster in atlas, whitelisted my Render backend’s IP and enabled access from everywhere (0.0.0.0/0) for testing. i created a database and collections (users, entries). i got the connection string URI, added my password and database name, and used it in .env. oh, that’s new too. i’ve never used a .env file before, and i wasn't aware a thing called .gitignore files existed which prevented your password-containing files from being pushed to github. 

step 4: wiring it all together 
my frontend makes requests to the backend url deployed on render. my backend connects to MongoDB Atlas and handles logic + auth. CORS middleware ensures that only my frontend origin can make API requests. hosting a live database on MongoDB Atlas made me realize how real apps handle data securely. 
this was a great project for solidifying my understanding of user authentication, protected routes, and basic CRUD operations, stuff i didn’t know before. it’s live now. 

<h3>one last thing about the naming, yeah</h3>
i have this habit of naming things that are mine after other things i love. it all goes around connecting like a cycle. ‘memo’ because i mean, isn’t it obvious? and ‘hua’ actually means flower in chinese. it reminds me of a character i love and relate to so much. 

that’s all. 
debugging, reading docs i didn’t fully understand, testing things until they finally worked, that was a lot. thank you for reading, check my project on github too perhaps! it means a lot <3
</pre>
`,
  }
];

export default blogs;

