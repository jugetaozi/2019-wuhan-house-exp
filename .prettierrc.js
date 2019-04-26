module.exports = {
  printWidth: 80, //设置prettier单行输出（不折行）的（最大）长度。
  semi: false, //在句末添加分号
  singleQuote: true, //使用单引号
  trailingComma: "es5", //尾逗号
  bracketSpacing: true, //括号空格
  jsxBracketSameLine: false, //jsx末尾
	arrowParens: "avoid", //尽量避免圆括号  " avoid " - 尽可能不添加圆括号，示例：x => x" always " - 总是添加圆括号，示例： (x) => x
  requirePragma: false, //按照注释格式化代码
  proseWrap: "preserve" //" always " - 当超出print width（上面有这个参数）时就折行" never " - 不折行" perserve " - 按照文件原样折行 （v1.9.0 +）
};
