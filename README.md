# Next.js Import Issue

A very odd import issue was found while I was working on a Next.js project.

This repository is simply to regenerate the situation when the error occured, and does not contain any project logic.

<br>

Check out the source code in the directory `src/pages/index.tsx`.

There are two imports in the `index.tsx` file:

```typescript
import { AuthPage } from "src/components/authPage";
import { HomeView } from "src/components/homeView";
```

If you change the order of the two imports, you get a compile error.
