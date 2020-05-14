// Big Difference from nodejs

// 1. There is no node_modules folder which encapsulates all the third party npm packages

//2. Instead you import from a url as shown below
import { serve } from 'https://deno.land/std@0.50.0/http/server.ts';

//we can create our server using the above imported serve object and passing it a configuration object
const server = serve({ port: 3000 });

// another set of new features deno
// embraces modern JavaScript features like
// promises or async iterables

// what are async iterables
// it's essentially a for loop
// that allows you to go through an
// infinite array,you could say an infinite
// array of incoming data and events
//it looks like this

//it will infinitly loop over until the source of data in this case server says  - "I'm done i will not send you anymore data" which obviously never happen here
for await (const req of server) {
  console.log('Incoming request');
  req.respond({ body: 'Message from Deno! ' });
}
// the above syntax uses top level await,your ide will show red swiggly lines and show you some warning but deno supports this type of syntax -  top level await

// if you run this with command  - deno run SimpleWebServer.ts

// the first thing you notice it will download whatever is stored at that URL - `https://deno.land/std@0.50.0/http/server.ts`
// and it caches it locally so that it does not re-download these packages whenver you rerun this deno script
// so essentially this is a replacement for npm install without all the disadvantages of npm install like a huge node_modules folder
// and then give you an error
// error: Uncaught PermissionDenied: network access to "0.0.0.0:8000", run again with the --allow-net flag

// Deno is a   secure runtime
// for javascript in typescript

//With Deno you control which permissions you give to your scripts when you execute them and by default there are no permissions
//here we need network access
//so to run the above script with proper permissions we need to add flags,

// deno run --allow-net SimpleWebServer.ts
// the above script will still not be able to write to filesystem as we have not given it permission to do so but it now have access to all the network related OS things
