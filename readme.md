# Components UI-Kit

### [Ссылка на storybook](https://dimazzz.github.io/react-ui-kit/)

## Типизирование темы

Документация по темизации [styled-components](https://styled-components.com/docs/api#typescript)

### Тема по умолчанию:

```typescript
interface Theme {
    palette: Palette,
    commonTypography: CommonTypography,
    typography: TypographyTheme,
    shape: Shape,
    shadow: Shadows,
    breakpoints: Breakpoints,
}
```

### Определение темы по умолчанию:

```typescript
import 'styled-components';
import { Theme } from 'uikit';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
```

### Кастомизация темы:

```typescript
import { Theme, Palette } from 'uikit';
import 'styled-components';

interface CustomPalette extends Palette {
    customColor: string;
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
        palette: CustomPalette;
        customThemeProp: string;
    }
}
```

## Создание объекта темы

Для создания темы, необходимо вызывать функцию `createTheme` и передать ей объект переопределяющий значения темы.
Значения для переопределения дефолтной темы все опциональны. Затем этот объект передается в `ThemeProvider` компонент импортируемый из библиотеки

```typescript jsx
import React, { FC, ReactNode, useMemo } from 'react';
import { ThemeProvider, createTheme } from 'uikit';

interface Props {
    children: ReactNode;
}

const AppThemeProvider: FC<Props> = ({ children }) => {
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    primary: 'red',
                    secondary: 'blue',
                    customColor: 'gray',
                },
            }),
        []
    );

    return <ThemeProvider theme={theme}>You can use styled components with theme</ThemeProvider>;
};

export default AppThemeProvider;
```

### TODO LIST

-   ~~checkbox~~
-   radio
-   switch
-   table
-   tooltip
-   select

---

-   ~~add ESLint~~
-   ~~storybook fonts~~
-   add Tests
-   add readme description
-   ~~website with storybook~~
