# AniFind
Authors: [DJ Echipare](https://github.com/djechi) [Alvin Truong](https://github.com/bnmpower1) [Daniel Kim](https://github.com/dkim515-gif) [Bryce Lu](https://github.com/schblu)

## Project Description
### Why is it important or interesting to you?
 - Anime is a diverse medium of animation from Japan that contains many different genres. Due to its sheer volume, it can be overwhelming for new viewers to find anime shows and movies they would enjoy watching. This project is interesting to us as it looks to solve this discovery problem. As such, creating a recommendation website dedicated to anime can help others explore this niche and gain insight about different anime that align with their tastes.

### What languages/tools/technologies do you plan to use? (This list may change over the course of the project)
- We will use Python with Flask for the backend API and Vite/React with TypeScript/TailwindCSS for the frontend user interface. GitHub will be used for version control along with VS Code as our development environment. For testing, we will use Pytest for the Python backend and Vitest for the frontend components. For analyzing memory usage within the Back-end, we will use tracemalloc.
- The backend API we will be using is Jikan API (4.0.0), an open-source REST API.
- API Documentation: https://docs.api.jikan.moe

### What will be the input/output of your project?
- **Input:** User loads the home page → **Output:** Display of "Highest Rated" and "Trending" anime lists
- **Input:** User loads the recommendation page → **Output:** Display recommendation title, description, and search bar/button
- **Input:** User types in search bar → **Output:** Auto-complete dropdown with matching anime titles
- **Input:** User submits search request → **Output:** Curated list of similar anime 

### What are the features that the project provides?
- Home page with two lists
  - Highest rated anime
  - Currently trending anime
- Recommendation page
  - Recommendation engine with search bar
  - Auto-complete suggestions as you type
  - Curated lists of similar anime based on user searches
- Anime cards showing images, titles, genres, and user ratings

## User Interface Specification
### Navigation Diagram
- Displays how the user will navigate through each webpage (Home, Recommendation, About), and the use of button interactions with the webpage.
<img width="1486" height="1180" alt="image" src="https://github.com/user-attachments/assets/cc9acf1f-9f22-44d3-8c8f-8f48cddafd6a" />


### Mock Screen Layouts
Figma Link: https://www.figma.com/design/hPtur90ZxpL8rufZbKKvje/AniFind?node-id=0-1&t=tYE6BlYcwI643Pk4-1

- General components
  - Header: Includes a menu at the top of the screen, allowing the user to travel from each webpage 
  - Footer: Includes a menu at the bottom of the screen, allowing the user to travel from each webpage 
  - Lists: include a column/row of "show cards" that display each anime image, title, genre, and rating
    
- Home Page
  - Header
  - Trending anime: list for trending anime 
  - Highest rated anime: list ordering anime by highest rating
  - Footer
<img width="580" height="1374" alt="image" src="https://github.com/user-attachments/assets/d3795875-dd5b-4873-9562-d650e6818715" />

- Recommendation Page
  - Header
  - Search bar: a search bar that allows user input and gives a drop-down of autocompleted suggestions based on available anime
  - Search button: a search button that is used to activate/generate a list of recommended anime based on the user's search input
  - Recommended anime: list filled with similar anime is generated after the user input is given
  - Footer
<img width="580" height="1374" alt="image" src="https://github.com/user-attachments/assets/5d7de869-2d35-434f-a865-c014955ba07f" />

- About Page
  - Header
  - Our Goal: Includes title and paragraph explaining the purpose of the website
  - Contributors: Includes title and paragraph displaying the contributors of the website
  - Footer
<img width="580" height="1374" alt="image" src="https://github.com/user-attachments/assets/def22cd5-381c-4d59-b514-edcf43bb1388" />
  
## Class Diagram
> <img width="1668" height="990" alt="image" src="https://github.com/user-attachments/assets/48d092fc-a3a2-4c9d-990d-5c5eb746c9c4" />
> One of the SOLID Principles that I applied was the Interface Segregation Principle, which involved creating a separate JSON file for recommendations. Previously, the recommendations were displayed on the home page, but they should have been on the recommendation page. This change helped me write better code because the logic for the recommendation was now in the correct Python file, which made it easier to distinguish which functions belong to each file.  Another SOLID Principle that I applied was the Single-Responsibility Principle, which involved creating separate Flask routes for the JSON files. This ensured that the flask routes had the correct JSON files and that those not needed for that specific route were excluded.
 
 ## Screenshots
 ### Home Page
- Header and Trending List
<img width="680" height="360" alt="image" src="https://github.com/user-attachments/assets/bac7a385-c3fd-4f9a-859f-401acd7158d7" />

- Highest Rating List
<img width="680" height="360" alt="image" src="https://github.com/user-attachments/assets/03b858ab-9213-46f9-87cc-11bd900ce0cd" />

- Footer
<img width="680" height="360" alt="image" src="https://github.com/user-attachments/assets/6512f939-8810-47a0-a9f5-6a8e7df0145b" />

 ### Recommendation Page
 - Default screen
<img width="680" height="360" alt="image" src="https://github.com/user-attachments/assets/265229bc-c6db-4def-87f7-9ba5307bd2d9" />
 
 - Search bar suggestions
<img width="680" height="360" alt="image" src="https://github.com/user-attachments/assets/b7abccb0-e330-446d-97d0-ccfa4d1c6cf7" />
   
 - Hovering/clicking suggestions
<img width="680" height="360" alt="image" src="https://github.com/user-attachments/assets/820232b8-f2f6-49a0-bcb2-fff7fa1d9647" />

 - Clicking search button
<img width="680" height="360" alt="image" src="https://github.com/user-attachments/assets/e81b86c9-a23e-4a5e-a9f4-c6ba1978cd1e" />

 - Loading screen
<img width="680" height="360" alt="image" src="https://github.com/user-attachments/assets/7a1f6919-5d71-4054-8392-fd41a021a325" />
   
 - Rendered List
<img width="680" height="360" alt="image" src="https://github.com/user-attachments/assets/1cafc07f-0462-4cc7-88dd-038bd591fb76" />

 ### About Page
 <img width="680" height="360" alt="image" src="https://github.com/user-attachments/assets/8d7f0b0e-1efd-4b8a-a793-20f4c9ec9801" />

 ## Installation/Usage

 ### Downloads (For Front-End)
- https://nodejs.org/en
- https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

 ### Step-By-Step Guide to demo program
 1) Open your terminal and enter a suitable directory using the cd command
 2) Type in git clone --recursive within the terminal
 3) Launch the back-end API server locally (open a separate terminal): 
 ### Linux/Mac
 * cd flask-server 
 * python3 -m venv venv
 * source venv/bin/activate
 * pip3 install Flask
 * pip3 install requests
 * pip3 install flask-cors
 * python3 server.py
 
 ### Windows
 * cd flask-server
 * python -m venv venv
 * venv\Scripts\activate
 * pip install Flask
 * pip install requests
 * pip install flask-cors
 * python server.py

 4) Launch the front-end web application locally (open a separate terminal):
 * cd front-end
 * npm install
 * npm run dev
 * ctr + click local host link 

 ## Testing
 ### Front End Testing
Front-end components within Vite/React were tested by using Vitest. Components that were tested include the Home Page trending/rating lists,
Recommendation Search Bar, About Page titles, and the Anime Card.

#### Test commands (Front-end)
- cd front-end 
- npm test (runs test)

### Back End Testing
Back-end testing was performed using pytest and unittest.mock. The components tested were the homepage, the recommendation page, the recommendation query, and the Jikan API. 

#### Unit Test Packages
- Windows
- pip install pytest
- pip install pytest-mock

- Linux/Mac
- pip3 install pytest
- pip install pytest-mock

#### Test commands (Back-end)
- cd flask-server
- pytest -v test/ (runs test)
- pytest -v -s test/ (runs test and prints the result)
