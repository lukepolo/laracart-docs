# LaraCart Documentation

This is the documentation site for LaraCart, built with VitePress.

## Development

To run the documentation site locally:

```bash
# Install dependencies
yarn install

# Start the development server
yarn docs:dev
```

## Building for Production

To build the documentation site for production:

```bash
yarn docs:build
```

To preview the production build:

```bash
yarn docs:preview
```

## Project Structure

- `.vitepress/` - Contains the VitePress configuration and documentation files
  - `config.js` - VitePress configuration
  - `guide/` - Guide documentation
  - `api/` - API documentation
- `package.json` - Project dependencies and scripts
