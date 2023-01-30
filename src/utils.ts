type transparentFunction = <T>(...a: any[]) => T;

//@ts-ignore
const funCsole: {
  [k: string]: transparentFunction;
} = {};
for (const m in console) {
  if (Object.prototype.hasOwnProperty.call(console, m)) {
    //@ts-ignore
    const element = console[m];
    funCsole[m] = <T>(...args: any): T => {
      element(args);
      return args;
    };
  }
}

export { funCsole };
