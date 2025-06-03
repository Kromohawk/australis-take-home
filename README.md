# 🐱‍🏍 Pokédex Challenge — React + Vite + TypeScript

Welcome to the Pokédex Take-Home Challenge! This is a short coding assignment meant to assess your ability to work with APIs, manage state, and build UI components in React with TypeScript.

---

## 🚀 Getting Started

Follow these steps to get the project running locally:

1. **Fork this repository** to your own GitHub account.
2. **Clone your forked repo** to your local machine:

   ```bash
   git clone https://github.com/kromohawk/australis-take-hom.git
   cd pokedex-challenge
   npm install
   npm install

   ```

3. **Open** http://localhost:5173 in your browser to view the app.

# 🎯 Your Task

Build a simple **Pokédex** where users can:

## 🔍 1. Search for Pokémon

Use the [PokéAPI](https://pokeapi.co/).

**Example endpoint:**
https://pokeapi.co/api/v2/pokemon/pikachu

Allow the user to type a name and fetch matching Pokémon info:

- Name
- Image (sprite)
- Types

## ⭐ 2. Save Favorite Pokémon

After viewing search results, the user should be able to **save** a Pokémon.

- Display saved Pokémon in a **Favorites** list.
- Use `localStorage` to persist favorites across page reloads.

## ❌ 3. Remove from Favorites

Allow users to **remove** Pokémon from their favorites list.

---

## 💡 Bonus (Optional)

If you have extra time, consider adding:

- A note field for each saved Pokémon.
- A clean and responsive layout.
- Prevention of duplicate Pokémon being saved.
- A loading spinner while fetching data.
- Error handling (e.g., "Pokémon not found" message).

---

## 📝 Submission Instructions

1. Push all your changes to your forked repository.
2. Make sure the app runs using:

   ```bash
   npm install && npm run dev

   ```

3. Share the link to your repo with us
