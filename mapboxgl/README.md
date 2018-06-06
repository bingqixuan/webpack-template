# Mapbox-GL webpack template


```bash
npm install
```
编译
```bash
npm run start
```

备注：如果想用调试的话，需要修改node_modules/mapbox-gl/package.json，将"main"字段的值改为"dist/mapbox-gl-dev.js"，然后再执行一次编译
这样的话虽然可调，可是都合并到一个文件中，没有按文件分类。如果通过script标签引入"dist/mapbox-gl.js"，则是有文件分类的调试。