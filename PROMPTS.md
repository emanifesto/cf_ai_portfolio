# My Prompts

This file keeps track of the prompts used to build this portfolio.

## 1. Initial Setup & Debugging
> Using the current design pattern and my resume (Resume.pdf), create four more components of Experience, Projects, Extracurriculars, and Skills. Following the Left and Right alternating pattern. All images will be provide by me later so you can just return an empty fragment for now for those. When the boilerplate is finished I will get into per section details.

## 2. Dark Mode & Layout Cleanup
> Add a dark mode switch at the bottom left, the main container will toggle between a dark blue and an offwhite. I think the current layout for text is ugly, get rid of the rounded box and let the text rest directly on top of the background, white text for dark background, black for white.

## 3. Accordion Cards (Initial)
> For experience, projects, and extracurriculars, each entry should start out shrunk. Make a nice rectanglular card with only the job title, company, and time of work. The card should be clickable and will expand to show tthe list items, when clicked again it will shrink back down. No two cards of one component should be able to be expanded at the same time.

## 4. Accordion Cards (Fixes)
> The cards don't expand on click. Also there should be no overflow past the 100vh from container to container, essentially expanding one card should also hide the rest. Add a grayscale svg of two arrows pointing away from each other diagonally for shrunk cards and they point at each other for expanded cards.

## 5. Prompt Tracking
> Create PROMPTS.md file and keep it updated with my prompts
> 
> Fill in PROMPTS.md file and keep it updated with my prompts

## 6. Question Endpoint (RAG)
> Append all the prompts I run to PROMPTS.md. This app uses cloudflare functions for backend functionality. Analyze embeddings.ts and use you reasoning to fix the possible buggy code in question.ts.

## 7. Popup Chatbot
> Based on the '/api/question' endpoint, create a popup chatbot component that will placeholder text of 'Ask me interview questions'

## 8. Mobile Responsiveness
> Refactor to optimize this app for mobile. First, change the InnerContainer to be flex-row-reverse normally, but flex after sm breakpoint. After that most UI changes on the rest of my components should be done through sm breakpoints in the css. This should work for everything except nav.tsx which might require a little more special work.

