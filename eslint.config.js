import js from '@eslint/js'
import {defineConfig} from 'eslint/config'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig({
  plugins: {
    '@stylistic': stylistic
  },
  files: ['**/*.{js,ts}'],
  extends: [
    js.configs.recommended, 
    tseslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic
  ],
  rules: {
    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': ['error', 'never']
  },

})