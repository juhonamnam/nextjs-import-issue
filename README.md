# Next.js Import Issue

A very odd import issue was found while I was working on a Next.js project.

This is a sample project aimed to regenerate the situation when the error occured.

<br>

Check out the source code in the directory `src/pages/index.tsx`.

There are two imports in the `index.tsx` file:

```typescript
import { AuthPage } from "src/components/authPage";
import { HomeView } from "src/components/homeView";
```

If you change the order of the two imports, you get a compile error.

<br>

The error message is shown in the following:

> Server Error
>
> ReferenceError: Cannot access 'BaseRepository' before initialization
> This error happened while generating the page. Any console logs will be displayed in the terminal window.

In this sample project, REST API request is made in a component called 'repository'. In 'repository' component, there is a parent class called `BaseRepository`, and its child classes.

For some reason, the parent class `BaseRepository` seems to be initialized AFTER its child class `CommonRepository` during the compilation, depending on the order of the two seemingly irrelevant imports.
