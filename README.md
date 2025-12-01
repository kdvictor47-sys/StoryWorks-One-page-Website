# StoryWorks-One-page-Website
This is a web prototype for integrating concept into IBD's website, attribute to Centennial college's IMMT715 Dev tools course.

Our StoryWorks Concept:<br>
To build an internal adaptive AI-powered form for clients to input their information on first-hand, ensuring clients inputs' profession and accuracy, aligning with their core value and brand style, generating project brief for their desired service.
The website promotes it by showcasing our entire roadmap, illustrating the benefits and conducting propaganda about our marketing strategy.

Challenges:<br>
One challenge I faced was structuring the site as a marketing-focused, multi-page experience while still keeping the layout consistent across all three pages. I needed a shared header, navigation, and visual style, but each page had different content (home, features, contact/team). To solve this, I first sketched a simple structure (index.html, features.html, contact.html) and then built a reusable layout in HTML and CSS (same header/footer and container classes). After that, 
I only swapped out the main section content for each page, which kept everything visually consistent and easier to maintain.

Interactivity:<br>
<strong>**“Read more / Read less” toggle on the homepage**</strong><br/>
In the Problem/Solution section, I added a “Read more” button that reveals additional explanation about the problem. I selected the button (#toggle-problem-details) and the hidden text container (#problem-details).
When the button is clicked, the script toggles a .hidden class on the extra text to show or hide it. At the same time, it switches the button text between “Read more” and “Read less” so users know what will happen next.
This adds interactivity and keeps the homepage clean by hiding longer text until the user actually wants to see it.

<strong>**Smooth scrolling for internal navigation links**</strong><br/>
I also implemented smooth scrolling for links that jump to sections on the same page (like the “Why it matters” and “View key benefits” links on the homepage). I selected all links with the class .scroll-link.
When one of these links is clicked, the script checks if its href starts with # (an in-page anchor).
If it does, I prevent the default jump and use element.scrollIntoView({ behavior: "smooth" }) to scroll smoothly to that section.
This makes the navigation feel more polished and helps users visually follow how they move through the page.

Platform:<br>
Github is one of the most used CMS, and I am familiar with the usage of it. So I choose Github to post my codes for convenience and profession, while maintaining simplicity of changing my content.
