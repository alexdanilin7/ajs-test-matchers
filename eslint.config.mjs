import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        test: 'readonly',       
        expect: 'readonly',     
        describe: 'readonly',    
        beforeAll: 'readonly',   
        afterAll: 'readonly'     
      }
    },
    ignores: [
      '**/node_modules/**',     
      '**/dist/**'             
 
    ]
  }
];