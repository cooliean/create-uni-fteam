# ✨ create-uni-fteam

> 感谢 [create-unibest](https://github.com/feige996/unibest) 
> 
> 项目由来：因为有一些组件库是私有的，所以需要一个命令行工具来快速创建项目，主要是为了方便自己，如果有侵犯权问题，请联系我

## 🛠️ 开发

- npm run build，得到 `package/cli/index.cjs`
- 在控制台中执行 `cd package/cli && npm link`，就能在本地执行 `bin` 中设定的指令了
- 查看全局软连 `npm ls -g`
- 删除本项目的软连 `npm un create-uni-fteam -g`

## 🛠️ 使用

```bash
# 直接创建项目，项目名为 my-v3-uni-project
pnpm create uni-ft my-v3-uni-project
# 【注意】如果无法创建项目，可以是有缓存，可以加上 `@latest` 
pnpm create uni-ft@latest my-v3-uni-project

# 查看帮助
pnpm create uni-ft --help

# 设置文件名
pnpm create uni-ft --name my-v3-uni-project
```
