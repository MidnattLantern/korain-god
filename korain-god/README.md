Setting up
---

- Bash:
```zsh
npm create vite@latest korain-god -- --template react-ts
```

- Enter the directory that contains the package.json file. You can check if you are currently with:
```zsh
ls
```

- This app was developed with Node version 20.9.0, if there are issues running `npm run dev`it could be compaitibility issues. To downgrade to a version compatible with 20.9.0, run:
```zsh
npm install vite@5.2.8 --save-dev
```

- Finally, run:
```zsh
npm install
```

- To debug and test the app, run
```zsh
npm run dev
```