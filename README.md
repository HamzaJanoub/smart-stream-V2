# Smart Stream V2

Smart Stream V2 is a web application that allows users to browse and manage video channels through a simple and interactive interface.

The application uses JavaScript and a remote API to retrieve and update channel data.

## Features

- Dynamic display of video channels from an API.
- Search channels by name.
- Filter channels by category.
- Add and remove channels from favorites.
- Manage a blacklist of channels.
- Play video streams.
- Update channel information through HTTP requests.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- MockAPI

## Project Structure

```text
Smart-Stream-V2/
│
├── index.html
├── carbon-20-6afa243d6cdbc590231380.png
│
├── data/
│   └── data.js
│
└── js/
    ├── app.js
    ├── search.js
    ├── favorite.js
    ├── blackliste.js
    └── stream.js
```


3. Open the project using Visual Studio Code.

4. Run `index.html` using Live Server.

## API Integration

The application uses MockAPI to retrieve and update channel information.

HTTP methods used:

- GET: Retrieve channel data from the API.
- PUT: Update channel information, including favorite status.

## JavaScript Concepts Applied

- JavaScript Modules (import / export).
- Asynchronous Functions (async / await).
- Fetch API and HTTP Methods.
- Error Handling (try / catch).
- DOM Manipulation.
- Event Handling (addEventListener).
- Event Delegation.
- Array Methods (find).
- JSON Data Handling (JSON.stringify).

## Current Limitations

- LocalStorage has not been implemented.
- Application data depends on API availability.
- Error handling and loading states can be improved.

## Future Improvements

- Implement LocalStorage for local data persistence.
- Improve responsive design.
- Add user notifications for successful and failed actions.
- Improve network error handling.
- Optimize application performance.

## Author

**Hamza Janoub**
