import path from 'path';
import fs from 'fs/promises';
import { build } from 'vite';
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const targets = [
  { 'input': 'src/HelloWorld.vue',       'name': 'hello-world',         'output': 'hello-world.umd.js' },
  { 'input': 'src/Yellow.vue',           'name': 'yellow',              'output': 'yellow.umd.js' },
  { 'input': 'src/Pink.vue',             'name': 'pink',                'output': 'pink.umd.js' },
  { 'input': 'src/Lime.vue',             'name': 'lime',                'output': 'lime.umd.js' },
];

async function buildTargets() {
  for (const target of targets) {
    await build({
      configFile: false,
      plugins: [vue()],
      build: {
        outDir: path.join(__dirname,'public'),
        emptyOutDir: false,
        lib: {
          entry: path.join(path.dirname(target.input), target.output),
          name: target.name,
          formats: [ 'umd' ],
          fileName: (format) => target.output,
        },
        cssCodeSplit: true,
        rollupOptions: {
          input: {
            //main: path.resolve(__dirname, "src/HelloWorld.vue")
            main: fileURLToPath(new URL(target.input, import.meta.url)),
          },
          external: ['vue'],
          output: {
            exports: "named",
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
    });
  }
}

async function makeComponentList() {
  const components =
    await fs.readdir('public')
     .then(dirs => dirs.filter(d => d.endsWith('.umd.js')))
     .then(dirs => dirs.map(dir => { return { name: dir.replace('.umd.js',''), file: dir }; }));
     
  const content = { components };
  await fs.writeFile('public/list.json', JSON.stringify(content,null,2)); 
}


await fs.rm('public', {recursive:true,force:true});
await buildTargets();
await makeComponentList();
