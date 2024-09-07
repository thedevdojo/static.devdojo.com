---
title: Static Helpers
description: Helper methods
nextTitle: 'Live-Reloading'
nextURL: '/docs/features/live-reloading'
prevTitle: 'Collections'
prevURL: '/docs/features/collections'
---

<div class="flex items-start px-5 py-5 mb-12 md:mb-5 mt-1 md:translate-y-0 translate-y-5 leading-[18px] bg-neutral-950 border border-yellow-400 rounded-md">
   <img class="hidden w-auto h-12 my-0 mr-5 md:h-20 md:block" src="/assets/images/icons/helpers.png" />
   <div>
      <h1 class="mb-0 text-base md:text-3xl">Helpers</h1>
      <p class="my-1">Learn about some of the static helper methods you have available</p>
   </div>
</div>

## URL Helper

It's totally fine to use relative paths in your site. As an example, you may have the following image:

```html
<img src="/path-to-image.png" />
```

But there may be times when you want to use an absolute URL path. In that case you can use the `{url()}` helper method.

```html
<img src="{url('/path-to-image.png')}" />
```

This image will resolve to **http://localhost:3000/path-to-image.png** when running `static dev`. To sepecify the `static build` URL, be sure to add the following to your `static.json` file:

```json
{
    "dev" : {
        "url" : "http://localhost:3000"
    },
    "build" : {
        "url" : "https://websitename.com/cool",
        "directory" : "/directory/to/build/path"
    }
 }
 ```

 Learn more about the **static.json** file from the <a href="/docs/features/configurations">Configurations</a>.