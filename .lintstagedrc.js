const getFileNames = filenames => filenames.map(f => `"${f}"`).join(' ')

export default {
  '*.{js,jsx,ts,tsx,cjs,esm}': filenames =>
    `pnpm eslint --fix ${getFileNames(filenames)}`,
  '**/.storybook/*.{js,jsx,ts,tsx}': filenames =>
    `pnpm prettier --write ${getFileNames(filenames)}`,
  '*.{json,css,scss,md,html,yml,yaml,graphql,gql}': filenames =>
    `pnpm prettier --write ${getFileNames(filenames)}`
}
