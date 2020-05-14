// Deno supports typescript by default and that's one huge difference from nodejs
// Typescript compiler is built into deno,so there is no need to setup different pipeline for ts to js compilation

// run this file with command deno run HelloWorld.ts

let message: string;

message = 'Hello World from Deno.ts !';

console.log(message);
