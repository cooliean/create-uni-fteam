import { green, red } from 'kolorist'
import type { TemplateList } from './type'

export const templateList: TemplateList[] = [
  {
    defaultProjectName: 'uni-ft',
    extra: `${green('(基础模板)')}`,
    branch: 'main',
    url: {
      gitee: 'https://gitee.com/cooliean/uni-ft.git',
      github: 'https://github.com/cooliean/uni-ft.git',
    },
    runCode: 'pnpm dev:h5'
  }
]
