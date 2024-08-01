# status-site

Simple webpage for showing infrastructure status. Meant to be hosted with GitHub pages.

## API

The site pulls all of its data at runtime from [status-checker](https://github.com/MatthewCash/status-checker), and refreshes every 30 seconds.

## Building

To build the site for static hosting (recommend), run these commands

```sh
npm install # Install dependencies
npm run build # Build site
```

The output site will be in the `build/` directory
