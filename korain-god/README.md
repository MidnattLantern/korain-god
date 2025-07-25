Live link: https://midnattlantern.github.io/korain-god/ 


Setting up
===

1. Bash:
```zsh
npm create vite@latest korain-god -- --template react-ts
```

2. Enter the directory that contains the package.json file. You can check if you are currently with:
```zsh
ls
```

3. This app was developed with Node version 20.9.0, if there are issues running `npm run dev`it could be compaitibility issues. To downgrade to a version compatible with 20.9.0, run:
```zsh
npm install vite@5.2.8 --save-dev
```

4. Finally, run:
```zsh
npm install
```

5. To debug and test the app, run
```zsh
npm run dev
```


Deployment
===

1. Install Github Pages
```zsh
npm install --save-dev gh-pages
```

2. Edit vite.config.ts by including base: '/repo-name/':
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/korain-god/',
  plugins: [react()],
})
```

3. Edit package.json to include predeploy and deploy:
```json
"scripts": {
    "...": "...",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
}
```

4. When the app is ready, run:
```zsh
npm run deploy
```

Routing (hash):
===

1. Install React Router:
```zsh
npm install react-router-dom
```

2. This is a static project, so wrap Main.tsx to feature hash router:
```ts
import { HashRouter } from 'react-router-dom'
// ...
<HashRouter>
  <App />
</HashRouter>
```

3. Inside App.tsx, wrap content within
```tsx
import { Routes, Route } from 'react-router-dom'
// ...
<Routes>
  <Route path="/" element={<h1>Home element</h1>} />
  <Route path="/about" element={<h1>About element</h1>} />
  <Route path="/etc" element={<h1>Etc element</h1>} />
</Routes>
```

4. Use the Route <Link> anywhere instead to navigate around the app:
```ts
import { Link } from 'react-router-dom'
// ...
<Link to="/about">About</Link>
```