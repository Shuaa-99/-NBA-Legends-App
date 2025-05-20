# 🏀 NBA Legends App

A simple React application to browse and sort a list of NBA players based on various statistics like points, rebounds, assists, and All-Star appearances.

## 🚀 Features

- 🔍 **Search**: Filter players by name using the search bar.
- 📊 **Sorting**: Sort the player list by Points, Rebounds, Assists, or All-Star appearances.
- 📦 **Modular components**: Clean separation using components like `PlayerCard`, `SearchBar`, and `CardContainer`.

## 🖼️ Data & Images

- Player data and image URLs are imported from a local file:  
  `src/helper/data.js`
- Images are hosted via external URLs (e.g., `https://randomuser.me/api/...` or similar).

## 📁 Project Structure
```
NBA-Legends/
├── src/
│ ├── assets/ # NBA logo and other static assets
│ ├── components/
│ │ ├── CardContainer.jsx
│ │ ├── PlayerCard.jsx
│ │ ├── SearchBar.jsx
│ │ └── CardContainer.scss
│ ├── helper/
│ │ └── data.js # Player data
│ └── App.js
└── README.md
```
##  Built With

- React 
- Bootstrap 5 (React-Bootstrap)
- Material UI (Search field)
- SCSS
