import esbuild from 'esbuild';
import mdx from "@mdx-js/esbuild"

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: true,
    target : ["chrome58"],
    outfile: 'dist/index.js',
    plugins : [mdx()]
  })
  
  .catch(() => process.exit(1));