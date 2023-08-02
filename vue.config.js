const { defineConfig } = require("@vue/cli-service");

// Element Plus 组件和样式的按需导入
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

// Icon图标自动导入
const Icons = require("unplugin-icons/webpack");
const IconsResolver = require("unplugin-icons/resolver");

// 导出配置
module.exports = defineConfig({
  // transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          // 自动注册图标组件, 使用示例: <icon-ep-add-location />
          IconsResolver({
            // prefix: "icon", // 配置icon图标前缀
            prefix: false, // 使用示例: <ep-add-location />或<EpAddLocation />
            enabledCollections: ["ep"], // 指定图标集ID
          }),
        ],
      }),
      // 自动下载图标
      Icons({
        autoInstall: true,
      }),
    ],
  },
});
