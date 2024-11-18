const esbuild = require("esbuild");

esbuild.context({
  entryPoints: ['index.ts'], // Entry point of your application
  bundle: true,
  outdir: './dist', // Output directory
  platform: 'browser',
  format: 'esm',
  target: ['es6'],
}).then(ctx => {
  ctx.watch().then(() => {
    console.log('Watching for changes...');
  }).catch(error => {
    console.error('Failed to start watch mode:', error);
  });
}).catch(error => {
  console.error('Build failed:', error);
  process.exit(1);
});