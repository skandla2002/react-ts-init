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

### 프로젝트 생성:

npm create vite@latest my-project -- --template react-ts
cd my-project

### 필요한 의존성 설치:

npm install react@18 react-dom@18 axios zustand sass
npm install -D @types/react@18 @types/react-dom@18 typescript @types/node@18 vite @vitejs/plugin-react jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom

### 프로젝트 구조 생성:


my-project/    
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
  > 폴더 구조 의미
  1. services 폴더의 의미:
  services 폴더는 애플리케이션의 비즈니스 로직이나 외부 서비스와의 상호작용을 담당하는 코드를 포함합니다. 이는 주로 API 호출, 데이터 처리, 로컬 스토리지 관리 등의 기능을 담당합니다.
     1. storage 폴더의 역할:
  storage 폴더는 브라우저의 로컬 스토리지, 세션 스토리지, 또는 기타 클라이언트 측 저장소와 관련된 유틸리티 함수들을 포함합니다. 이 폴더의 파일들은 데이터를 저장하고 검색하는 방법을 추상화하여 애플리케이션의 다른 부분에서 일관된 방식으로 스토리지를 사용할 수 있게 합니다.
  2. styles 폴더
     1. variables 폴더: 이 폴더는 SCSS 변수, 믹스인, 함수 등 전역적으로 사용되는 스타일 정의를 포함합니다. 이를 통해 일관된 디자인 시스템을 유지하고 스타일 재사용성을 높일 수 있습니다.
     2. components 폴더: 이 폴더는 특정 컴포넌트에 관련된 스타일을 포함합니다. 각 컴포넌트마다 독립적인 SCSS 파일을 만들어 관리할 수 있습니다.
  ```
    SCSS 파일명 앞에 붙는 '_' (언더스코어)는 "partial"을 나타내는 관행입니다. 이에 대한 이유와 장점을 설명드리겠습니다:
    Partial의 의미:
    '_'로 시작하는 SCSS 파일은 "partial" 파일로 간주됩니다. Partial은 다른 SCSS 파일에 포함되기 위한 부분적인 스타일시트를 의미합니다.
    주요 이유:
      컴파일 방지: Sass 컴파일러는 '_'로 시작하는 파일을 독립적인 CSS 파일로 컴파일하지 않습니다. 이 파일들은 오직 다른 SCSS 파일에 import될 때만 사용됩니다.


      장점:
      a. 모듈화:

      스타일을 작은 단위로 나누어 관리할 수 있습니다.
      코드의 구조화와 재사용성이 향상됩니다.

      b. 성능 최적화:

      불필요한 CSS 파일 생성을 방지하여 빌드 과정을 최적화합니다.
      최종적으로 하나의 CSS 파일만 생성되므로 HTTP 요청 수를 줄일 수 있습니다.

      c. 가독성 향상:

      파일명을 통해 해당 파일이 독립적으로 사용되지 않고 다른 파일에 포함될 것임을 쉽게 알 수 있습니다.

      d. 네임스페이스 충돌 방지:

      partial 파일들은 독립적인 CSS로 컴파일되지 않으므로, 같은 이름의 파일이 여러 폴더에 존재해도 충돌이 발생하지 않습니다.

      e. 조직화:

      프로젝트의 구조를 더 명확하게 만들어 줍니다. 어떤 파일이 독립적이고 어떤 파일이 종속적인지 쉽게 구분할 수 있습니다.
  ```



Vite 설정 (vite.config.ts):

typescript
import { defineConfig } from 'vite';
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

json
{
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

javascript
module.exports = {
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

typescript
import '@testing-library/jest-dom';

Zustand 스토어 예시 (src/store/useStore.ts):

typescript
import create from 'zustand';

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

typescript
import React from 'react';
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

typescript
import axios from 'axios';

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

scss
@import '../variables/colors';
@import '../variables/typography';

body {
  font-family: $font-family;
  background-color: $background-color;
  color: $text-color;
}

Storybook 설정:

npx storybook@latest init

package.json 스크립트 추가:

json
{
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


## github에 소스 올리기
GitHub에 없는 로컬 Git 저장소를 GitHub에 올리는 과정을 단계별로 안내해 드리겠습니다.

1. GitHub에 새 저장소 생성:
   - GitHub 웹사이트에 로그인합니다.
   - 오른쪽 상단의 '+' 아이콘을 클릭하고 'New repository'를 선택합니다.
   - 저장소 이름을 입력하고 필요한 설정을 합니다.
   - 'README 파일 생성' 옵션은 체크하지 마세요.
   - 'Create repository'를 클릭합니다.

2. 로컬 Git 저장소 확인:
   - 터미널을 열고 로컬 Git 저장소가 있는 디렉토리로 이동합니다.
   ```
   cd /path/to/your/local/repository
   ```

3. 원격 저장소 추가:
   - GitHub에서 생성한 저장소의 URL을 복사합니다.
   - 다음 명령어로 원격 저장소를 추가합니다:
   ```
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```

4. 로컬 변경사항 커밋:
   - 모든 변경사항이 커밋되었는지 확인합니다:
   ```
   git status
   ```
   - 커밋되지 않은 변경사항이 있다면 커밋합니다:
   ```
   git add .
   git commit -m "Initial commit"
   ```

5. GitHub로 푸시:
   - 다음 명령어로 로컬 저장소를 GitHub에 푸시합니다:
   ```
   git push -u origin main
   ```
   (참고: 귀하의 기본 브랜치가 'master'인 경우 'main' 대신 'master'를 사용하세요)

6. 인증:
   - GitHub 계정으로 인증을 요청받을 수 있습니다. 요청에 따라 인증을 완료하세요.

7. 확인:
   - GitHub 웹사이트에서 저장소를 새로고침하여 파일들이 올라갔는지 확인합니다.

주의사항:
- 만약 로컬 저장소의 브랜치 이름이 GitHub의 기본 브랜치 이름과 다르다면, 푸시할 때 로컬 브랜치 이름을 명시해야 할 수 있습니다. 예:
  ```
  git push -u origin local-branch-name:main
  ```
- 대용량 파일이나 민감한 정보가 포함되어 있지 않은지 확인하세요.
- `.gitignore` 파일을 사용하여 불필요한 파일이 업로드되지 않도록 하세요.

이 과정을 따르면 로컬 Git 저장소를 GitHub에 성공적으로 올릴 수 있습니다.