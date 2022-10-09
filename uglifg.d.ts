declare module 'rollup-plugin-uglify' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  export default function uglify(userOptions?: {}): {
    name: string;
    renderStart(): void;
    renderChunk(code: unknown): unknown;
    generateBundle(): void;
    renderError(): void;
  };
}
