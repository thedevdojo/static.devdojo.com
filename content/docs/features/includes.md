---
title: Static Includes
description: Learn how to use includes to create and re-use HTML code in your website
nextTitle: 'Collections'
nextURL: '/docs/features/collections'
prevTitle: 'Layouts'
prevURL: '/docs/features/layouts' 
---

<div class="flex items-start px-5 py-5 my-6 mt-1 leading-[18px] bg-neutral-950 border border-yellow-400 rounded-md">
   <img class="w-auto h-20 my-0 mr-5" src="/assets/images/icons/includes.png" />
   <div>
      <h1 class="mb-0">Includes</h1>
      <p class="my-1">Includes allow you to create reusable HTML code snippets and include them in multiple pages of your website.</p>
   </div>
</div>

To use includes, create HTML snippets inside of the **includes** directory. These snippets can then be included in your pages using the `<include src="name-of-file.html"></include>` tags.

## Creating Includes

Creating an include is as simple as adding a new file to the **includes** directory. let's say for instance that you created a new file located at `includes/message.html` with the following contents:

```
<p>This is a simple HTML paragraph</p>
```

It's as simple as that.

## Using Includes

Next, to use our new include we can utilize the `<include></include>` tags and reference that file, like so:

```html
<!DOCTYPE html>
<html lang="en">
<head>...</head>
<body>
    <include src="message.html"></include>
</body>
</html>
```

Even better we can utilize **layouts** and **includes** together to clean up our code and make it really easy to read:

```html
<layout src="main.html">
    <include src="message.html"></include>
</layout>
```

When this page is rendered, it will have an output like the following:

```html
<!DOCTYPE html>
<html lang="en">
<head>...</head>
<body>
    <include src="message.html"></include>
</body>
</html>
```

## Organizing Includes

It may be beneficial to group includes into separate folders. For instance, if there are includes that are only going to be used on the homepage, you can group that into a separate folder, like so:

```
📁 includes
├─ 📁 home
├──├─ 📄 hero.html
├──├─ 📄 testimonials.html
```

You can then use these includes by referencing `home/hero.html` inside of the `src` attribute, like so:

```
<layout src="main.html" title="Welcome to our website">
    <include src="home/hero.html"></include>
    <include src="home/testimonials.html"></include>
</layout>
```

> Organizing your includes will make it easier to find them when you want to make updates.

## Conclusion

Includes give us the ability to create HTML snippets in one place and use it in multiple places throughout our site. It will also allow us to make an edit in one place and have those changes replicated everywhere else throughout our website.