import path from 'path';
import { generateDeclarations } from './docgen-script';

const getComponentPath = (componentPath: string) =>
  path.join(process.cwd(), 'package/src', componentPath);

generateDeclarations({
  componentsPaths: [getComponentPath('TestComponent.tsx')],
  tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
  outputPath: path.join(process.cwd(), 'docs'),
});
