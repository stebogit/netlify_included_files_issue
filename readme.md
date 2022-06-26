# Issue

This repo shows an unexpected import issue, where only `.json` (or, I guess, `.js`) files are imported in the built 
bundle, and only if they are imported via Node (`require`).

# Description

According to the [CLI docs](https://docs.netlify.com/configure-builds/file-based-configuration/#functions) and 
[this article](https://www.netlify.com/blog/2021/08/12/how-to-include-files-in-netlify-serverless-functions/#tldr) the 
`included_files` directive should tell the build command to include _"any type of file in your serverless functions"_.
Even the docs have the example of importing `.md` files.

However, it seems only json files seem to be imported in the budle and even nmore only if the code inscludes such files.

Run `netlify dev` then go to `http://localhost:8888/.netlify/functions/test` and see
```
Hello from txt, and from JSON
```

Then run `netlify build` and check the resulting `.netlify/functions/test.zip` file: no `.md` or `.txt` file is 
included, and of the two `.json` files only the one `require`d is imported.
