import antfu from '@antfu/eslint-config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default antfu(
  {
    ignores: [
      '**/prisma/generated/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/bak/**',
      'tsconfig.json',
    ],
  },
  {
    files: ['**/*.js', '**/*.ts'],
    rules: {
      'node/prefer-global/process': ['error', 'never'],
      'no-console': 'off',
      'antfu/no-top-level-await': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  eslintConfigPrettier,
)
