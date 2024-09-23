# fros-packages-openwrt
fros packages for openwrt master

开启fros插件编译配置
可以通过make menuconfig选择，也可以以命令行方式添加：
```
echo "CONFIG_PACKAGE_fros=y" >>.config
echo "CONFIG_PACKAGE_fros_files=y" >>.config
echo "CONFIG_PACKAGE_luci-app-fros=y" >>.config
make defconfig
```
