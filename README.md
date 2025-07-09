# 3D-Innovation-and-Design-Concepts

## Setup
Run `./test/setup.sh` to install the Ruby gems needed to build the site.

## Testing
Run `./test/build.sh` to build the site using Jekyll. The script exits with a non-zero status if the build fails.

## Deployment
The site is automatically published from the `main` branch via the workflow in
`.github/workflows/jekyll.yml`. Ensure the repository's **Pages** settings are
configured to deploy from **GitHub Actions** so the workflow can update the
`gh-pages` branch used by GitHub Pages.
