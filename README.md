## 간단 Yarn PnP, Next.js 세팅 방법

### Install

```shell
npx create-next-app@latest # nextjs install
# node_modules, package-lock.json 삭제
corepack enable # 코어팩 활성화
yarn set version stable # Yarn v4 세팅
yarn install
```

### .gitignore 추가

```
.gitignore
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/version
```

## type script error 해결

```shell
yarn dlx @yarnpkg/sdks vscode
```

1. 임의의 .ts or .tsx 페이지 오픈.
2. ctrl(cmd)+shift+p
3. Typescript version 선택 (Select TypeScript Version)
4. 작업영역 버전 사용 선택 (Use Workspace Version)
