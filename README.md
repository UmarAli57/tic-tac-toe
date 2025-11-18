# Tic Tac Toe Game

A classic Tic Tac Toe game built with vanilla JavaScript, featuring a clean interface and dark mode support.

## Features

- **Two Player Mode** - Play with a friend on the same device
- **Dark/Light Theme** - Toggle between themes with persistent storage
- **Winner Detection** - Automatic detection of wins and draws
- **Clean UI** - Responsive design using Bootstrap
- **Game Controls** - Reset current game or start a new one

## How to Play

1. Open `index.html` in your browser
2. Players take turns clicking empty cells
3. First player to get three in a row (horizontal, vertical, or diagonal) wins
4. Click "Reset" to clear the board or "New Game" to start fresh

## Technologies Used

- HTML5
- CSS3 (Custom styling with CSS variables)
- JavaScript (ES6)
- Bootstrap 5

## Project Structure

```
├── index.html      # Main HTML file
├── style.css       # Custom styles
├── script.js       # Game logic
└── bootstrap/      # Bootstrap files (This folder isn't the part of this repo, you can manually add bootstrap folder 
                                       or using bootstrap cdn link in index.html file)
```

## Game Logic

The game uses an array-based approach to check winning patterns. It tracks player turns, detects wins across 8 possible patterns, and handles draw conditions when all cells are filled.

## Setup

No installation required. Just clone the repository and open `index.html` in any modern web browser.

```bash
git clone https://github.com/UmarAli57/tic-tac-toe.git
cd tic-tac-toe
```

## Author

**Umar Ali**  
Email: umar.pwu786@gmail.com

## License

MIT License - feel free to use this project for learning purposes.