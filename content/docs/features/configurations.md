---
title: Configurations
description: Check out the configuration options for your site
nextTitle: 'Github Action'
nextURL: '/docs/features/github-action'
prevTitle: 'TailwindCSS'
prevURL: '/docs/features/tailwindcss'  
---

<div class="flex items-start px-5 py-5 mb-12 md:mb-5 mt-1 md:translate-y-0 translate-y-5 leading-[18px] bg-neutral-950 border border-yellow-400 rounded-md">
   <img class="hidden w-auto h-12 my-0 mr-5 md:h-20 md:block" src="/assets/images/icons/configurations.png" />
   <div>
      <h1 class="mb-0 text-base md:text-3xl">Configurations</h1>
      <p class="my-1">There are a few configurations that you can use to develop your site. More options coming soon.</p>
   </div>
</div>

Inside the root of your directory is where you can create a `static.json` configuration file. When you are running `static dev` this configuration will be loaded with each request.

## Custom Headers

If you wish to add custom headers in your requests, you can include the "headers" key inside of your `static.json` file, like so

```json
{
    "headers" : {
        "Cache-Control" : "public, max-age=31536000",
        "Access-Control-Allow-Origin" : "*",
        "Authorization" : "Bearer 1234567890"
    }
}
```

# Custom Build Directory and URL

You can customize the directory your site will build to and you may also specify the website URL.

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

> Notice that if you specify the `build.url`, you will also need to specify the `dev.url`.

The `directory` path is the folder your site will be generated when running `static build`. The `url` can be used inside your HTML files in order to specify an absolute path.

```
<script src="{ url('/assets/js/main.js') }"></script>
```

This is the **url** helper method. Learn <a href="/docs/features/helpers">more about helpers here</a>.



# Pagination

If you want to control the pagination logic of a loop list on your page, you can add a `paginationList` key to your `static.json` file, as shown below.

```json
{
    "paginationList" : [
        {
            "route": "/posts",
            "iteratorKey":"posts-loop",
            "pageSize": 2
        }
    ]
}
```

+ `route` specifies the page where pagination logic needs to be added.
+ `iteratorKey` determines which `<Foreach>` structure on the route page is assigned pagination logic.The `iteratorKey` must be manually specified within the `<Foreach>` tags.
+ `pageSize` determines how many items to display per page. 

For instance, if the `count` is 10 and `pageSize` is 5, it will generate 2 sub-pages. The first sub-page displays items 1-5, and the second displays items 6-10.



In addition, you need to understand how to switch between pages to change the currently displayed items. Please refer to **Collections/Pagination** for more information.