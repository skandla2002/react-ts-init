# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
- 
##  claude 와 함께

프로젝트 생성:

npm create vite@latest my-project -- --template react-ts
cd my-project

필요한 의존성 설치:

npm install react@18 react-dom@18 axios zustand sass
npm install -D @types/react@18 @types/react-dom@18 typescript @types/node@18 vite @vitejs/plugin-react jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom

프로젝트 구조 생성:

Copymy-project/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── feature/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   │   ├── api/
│   │   └── storage/
│   ├── store/
│   ├── styles/
│   │   ├── base/
│   │   ├── components/
│   │   └── variables/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── tests/
├── .storybook/
├── stories/
├── vite.config.ts
├── tsconfig.json
├── jest.config.js
└── package.json

Vite 설정 (vite.config.ts):

typescriptCopyimport { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables/index.scss";`,
      },
    },
  },
});

TypeScript 설정 (tsconfig.json):

jsonCopy{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"],
      "@components/*": ["components/*"],
      "@hooks/*": ["hooks/*"],
      "@pages/*": ["pages/*"],
      "@services/*": ["services/*"],
      "@store/*": ["store/*"],
      "@styles/*": ["styles/*"],
      "@utils/*": ["utils/*"]
    }
  },
  "include": ["src", "tests"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

Jest 설정 (jest.config.js):

javascriptCopymodule.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
};

Jest 설정 파일 (tests/setupTests.ts):

typescriptCopyimport '@testing-library/jest-dom';

Zustand 스토어 예시 (src/store/useStore.ts):

typescriptCopyimport create from 'zustand';

interface AppState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

컴포넌트 예시 (src/components/common/Counter.tsx):

typescriptCopyimport React from 'react';
import { useStore } from '@/store/useStore';

const Counter: React.FC = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

API 서비스 예시 (src/services/api/exampleApi.ts):

typescriptCopyimport axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const fetchData = async () => {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

스타일 예시 (src/styles/base/global.scss):

scssCopy@import '../variables/colors';
@import '../variables/typography';

body {
  font-family: $font-family;
  background-color: $background-color;
  color: $text-color;
}

Storybook 설정:

npx storybook@latest init

package.json 스크립트 추가:

jsonCopy{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
이 설정으로 React 18, Node.js 18, SCSS, Vite, Storybook, TypeScript, Axios, Zustand, 그리고 Jest를 포함한 프로젝트 구조가 준비됩니다.
프로젝트를 시작하려면:

npm install로 의존성을 설치합니다.
npm run dev로 개발 서버를 실행합니다.
npm test로 Jest 테스트를 실행합니다.
npm run storybook으로 Storybook을 실행합니다.

이 구조는 확장성이 좋고 유지보수가 용이하며, 대규모 애플리케이션 개발에 적합합니다. 프로젝트의 요구사항에 따라 필요한 부분을 조정하시면 됩니다.
