---
title: Live Reloading
description: Save time with Statics Live-reloading feature
nextTitle: 'TailwindCSS Integration'
nextURL: '/docs/features/tailwindcss'
prevTitle: 'Content'
prevURL: '/docs/features/content' 
---


<div class="flex items-start px-5 py-5 my-6 mt-1 leading-[18px] bg-neutral-950 border border-yellow-400 rounded-md">
   <img class="w-auto h-20 my-0 mr-5" src="/assets/images/icons/time.png" />
   <div>
      <h1 class="mb-0">Live Reloading</h1>
      <p class="my-1">See your site changes in real-time without having to refresh the page. Live-reloading reloads the page when you make any changes to your code.</p>
   </div>
</div>

Static uses the [live-reload npm package](https://www.npmjs.com/package/livereload-js) to detect changes to the code and files in your website and live reload the page. This creates an excellent developer experience and allows you to build your site much faster.

## Setup

Live reload is automatically injected into the page when your run `static dev`, you'll see a script at the bottom of the page called livereload.js and this is the script that's responsible for reloading the page. Your site will live-reload when any file is updated on your site.

## Configuration

Right now there are no configuration options with live-reload, it just works out of the box. But, if necessary we may add some additional configurations in the future. Right now it works with all the files in your site; however, there may be some edge-cases where you want to create custom rules. Be sure to check back for updated configuration options or if you would like to contribute code, make sure to open a PR in the [Github Repo](https://github.com/thedevdojo/static).

No more manually refreshing like a chump! Live-reload is here to help you save time and see your changes instantly 💪


