Skip the fluff and see for yourself - [Portfolio](https://damisaas.com/founder) :point_left:


# *Features* Rundown :bullseye:

- Retrieval Augmented Generation
- Dynamic Image Generation
- Seamless Scroll
- Theme
- AI Usage


## RAG (Retrieval Augmented Generation) Chatbot :thought_balloon:

The main feature of my portfolio is the chatbot at the bottom right. It is run on Cloudflare Workers AI models and access documents that I personally uploaded to answer interview questions.

![Chatbot](/src/assets/demo/chatbot.png)

The entire three stage process of uploading documents, generating embeddings, and querying the data is handled through two pages functions with invocation routes of '/founder/api/embeddings' and '/founder/api/question'. **To work with my existing domain, this repository is actually a submodule and the functions provided here are exact replicas of the ones built to Cloudflare in my domain repo.**

### Listed AI Models in Use

Embeddings Model - ['@cf/baai/bge-base-en-v1.5'](https://developers.cloudflare.com/workers-ai/models/bge-base-en-v1.5/)

Text Generation Model - ['@cf/meta/llama-3-8b-instruct'](https://developers.cloudflare.com/workers-ai/models/llama-3-8b-instruct/)


## Image Generation :framed_picture:

The image rendered in the "Experience" section of my portfolio is generated on each page load based on a randomly selected job title from my experiences and a randomly selected artstyle.

Some results are amazing, some are subpar. Hopefully, recruiters don't see the bad ones:

![Generated Image](/src/assets/demo/imageGen.png)

Image Generation Model- ['@cf/black-forest-labs/flux-2-klein-4b'](https://developers.cloudflare.com/workers-ai/models/flux-2-klein-4b/)

## Seamless Scroll :ok_hand:

I was inspired by a [video](https://www.youtube.com/watch?v=4yBxb5RQxPs) I watched on YouTube to create a scrollable page..., *but with no scroll*. As the user navigates through the page, the distance that they scroll is tracked through a **'wheel'** event listener and conditional renders a section of the page.

> The amount of time I spent iterating on and debugging this feature should be studied :confounded:

## Theme :eyes:

I've learned over my journey that the best tips for web design is to just *keep things simple*. I want to go over three things:

1. Sections
2. Color Scheme
3. Card Component

### Sections

There are six sections in this page **('Home', 'Education', 'Experience', 'Projects', 'Extracurriculars', and 'Skills')**. To *keep things simple*, each section is made up of two sides: one side text to read, and the other, media to look at. The sides alternate throughout the page.

### Color Scheme :sparkles:

The two colors I used for highlighting text were a pink gradient and a blue gradient. **Simple.** Dark mode was configured through Tailwind variants which made it really easy to decide both aesthethics per component.

### Card Component :blue_heart:

One of the things I am most proud of is the card component of my site. It is used in three sections and consists of a title, a caption, and a timeframe; however, it can expand to show more information.

![Card Component](/src/assets/demo/card.png)

## AI Usage :smirk:

The only AI tool I used in the process of building was **Google Antigravity**. I used it only two days out all my build days, but it was extremely helpful in layout the groundwork for some of my components. All of the prompts that I used during my building process are list in the PROMPTS.md file.