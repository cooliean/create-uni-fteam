import { green, red } from 'kolorist'
import type { TemplateList } from './type'

export const templateList: TemplateList[] = [
  {
    title: `base${green('(推荐)')}`,
    description: `${red('(基础模板)')}`,
    value: {
      type: 'base',
      branch: 'main',
      url: {
        gitee: 'https://gitee.com/cooliean/uni-fteam.git',
        github: 'https://github.com/cooliean/uni-fteam.git',
      },
    },
  },
]
