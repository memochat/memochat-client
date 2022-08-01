const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
const componentPath = process.argv[3] + '/' + process.argv[2];

console.log(`✨ ComponentName: ${componentName}`);
console.log(`✨ Path: ${componentPath}`);

componentPath.split('/').forEach((dir, index, splits) => {
  const currParent = splits.slice(0, index).join('/');
  const dirPath = path.resolve(currParent, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
});

const data: { path: string; contents: string }[] = [
  {
    path: `${componentPath}/index.ts`,
    contents: `export { default } from './${componentName}';
export type { ${componentName}Props } from './${componentName}.types';
`,
  },
  {
    path: `${componentPath}/${componentName}.tsx`,
    contents: `import { ${componentName}Props } from './${componentName}.types';
import * as S from './${componentName}.styles';
    
const ${componentName} = ({}: ${componentName}Props) => {
  return <S.Wrapper>${componentName}</S.Wrapper>;
};
    
export default ${componentName};
`,
  },
  {
    path: `${componentPath}/${componentName}.types.ts`,
    contents: `export interface ${componentName}Props {}
`,
  },
  {
    path: `${componentPath}/${componentName}.styles.ts`,
    contents: `import styled from '@emotion/styled';

export const Wrapper = styled.div\`\`;
`,
  },
  {
    path: `${componentPath}/${componentName}.stories.tsx`,
    contents: `import { ComponentMeta, StoryObj } from '@storybook/react';

import ${componentName} from '.';

export default {
  component: ${componentName},
  args: {},
  argTypes: {},
} as ComponentMeta<typeof ${componentName}>;

export const Default: StoryObj<typeof ${componentName}> = {};
`,
  },
];

const writeToFile = (filePath: string, contents: string) => {
  fs.open(filePath, 'r', function (fileExists, _) {
    if (fileExists) {
      fs.writeFile(filePath, contents, (err) => {
        if (err) console.error(err);
        console.log(`- create ${filePath}`);
      });
    } else {
      console.log('File already exists!');
    }
  });
};

data.map((v) => writeToFile(v.path, v.contents));
