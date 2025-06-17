# CS601 - Assignment 2: Drag-and-Drop Matching Game

## 📄 Project Description
This interactive web application allows users to drag and drop items into the appropriate category (Fruits or Vegetables). The data is loaded asynchronously from a remote JSON source using the Fetch API. As users sort the items correctly, the interface responds dynamically, and a final congratulatory message appears when all items are correctly matched.

---

## 📁 Project Structure
```
CS601_HW2_HernandezPena/
├── index.html                → Main HTML form interface
├── css/
│   └── main.css              → Styling for game layout, json items, drop areas, matched containers, and congratulatory message
├── js/
│   └── main.js               → JavaScript logic for fetching data, DOM manipulation, drag-and-drop API, and alert messages
├── data/
│   └── items.json            → JSON contains a sample of the fetched data at execution
└── README.md                 → Project overview and instructions
```

---

## 💡 Features
- Fetches categorized data (fruits and vegetables) from a remote JSON source.
- Displays items dynamically using DOM manipulation.
- Allows drag-and-drop interaction using the HTML5 Drag and Drop API.
- Provides visual feedback for correct and incorrect drops (alert message).
- Displays a final congratulatory message upon completion of the game.

---

## 🧠 Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- HTML5 Drag and Drop API
- DragStart, DragOver, and Drop events

---

## 🧪 How to Run
1. **Start a Local Server**: Since Fetch will not work from the file system (`file://`), open the project using a local server. You can use:

   - **VS Code + Live Server Extension** (Recommended)
   - or run `npx http-server` from the terminal in the project directory

2. Open the browser at `http://localhost:<PORT>` and test the drag-and-drop functionality.

3. Drag each item into the appropriate category box (Fruits or Vegetables).

4. Once all items are correctly sorted, a congratulatory message will appear.

---

## 🔎 JSON Source
The JSON file is served via a CORS-friendly proxy:
```
https://api.allorigins.win/raw?url=https://gist.githubusercontent.com/joelhdzp/90a661312a32971f03bdab81fd334648/raw/08872946cba4e77a8b28e10eb85d388a899f2d7b/items.json
```

---

## 🌐 GitHub Repository
This project's live repository may be found on GitHub at:
   ```
   https://github.com/joelhdzp/CS601_HW2_HernandezPena
   ```

---

## 📌 Author
**Joel Hernandez Pena**  
MET CS601 – Web Application Development  
Boston University