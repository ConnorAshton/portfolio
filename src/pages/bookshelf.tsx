import * as React from 'react';
import { MainBodyHolder } from '../components/component-main-body-holder';
import { BookshelfIntro } from '../components/component-bookshelf-intro';
import { BookCard } from '../components/component-book-card';

const sprintBook = require('../assets/sprint-book.png');
const leanUXBook = require('../assets/lean-ux-book.png');
const leanStartupBook = require('../assets/lean-startup-book.png');
const dontMakeMeThinkBook = require('../assets/dont-make-me-think-book.png');
const designOfEverydayThingsBook = require('../assets/design-of-everyday-things-book.png');
const hippoBook = require('../assets/hippo-book.png');

const sprintDescription = `From three partners at Google Ventures, a unique five-day process for solving tough problems, proven at more than a hundred companies.

Entrepreneurs and leaders face big questions every day: What's the most important place to focus your effort, and how do you start? What will your idea look like in real life? How many meetings and discussions does it take before you can be sure you have the right solution?

Now there's a surefire way to answer these important questions: the sprint. Designer Jake Knapp created the five-day process at Google, where sprints were used on everything from Google Search to Google X. He joined Braden Kowitz and John Zeratsky at Google Ventures, and together they have completed more than a hundred sprints with companies in mobile, e-commerce, healthcare, finance, and more.`

const leanUXDescription = `The Lean UX approach to interaction design is tailor-made for today’s web-driven reality. In this insightful book, leading advocate Jeff Gothelf teaches you valuable Lean UX principles, tactics, and techniques from the ground up—how to rapidly experiment with design ideas, validate them with real users, and continually adjust your design based on what you learn.

Inspired by Lean and Agile development theories, Lean UX lets you focus on the actual experience being designed, rather than deliverables. This book shows you how to collaborate closely with other members of the product team, and gather feedback early and often. You’ll learn how to drive the design in short, iterative cycles to assess what works best for the business and the user. Lean UX shows you how to make this change—for the better`

const leanStartupDescription = `Most new businesses fail. But most of those failures are preventable.

The Lean Startup is a new approach to business that's being adopted around the world. It is changing the way companies are built and new products are launched.

The Lean Startup is about learning what your customers really want. It's about testing your vision continuously, adapting and adjusting before it's too late.

Now is the time to think Lean.`

const dontMakeMeThinkDescription = `Don't Make Me Think is a book about human–computer interaction and web usability. The book's premise is that a good software program or web site should let users accomplish their intended tasks as easily and directly as possible.

Krug points out that people are good at satisficing, or taking the first available solution to their problem, so design should take advantage of this. He frequently cites Amazon.com as an example of a well-designed web site that manages to allow high-quality interaction, even though the web site gets bigger and more complex every day.

Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on Steve Krug’s guide to help them understand the principles of intuitive navigation and information design.`

const hippoDescription = `Digital technology. It has crept into our lives, and so deeply has it penetrated us, that it has completely redesigned us. In the deep oceans and the high skies, it is now as elemental in our landscape as the wind and falling rain. It's not going to stop.

Due to the way civilisations progress, we are about to zip-line and observe more change in the next ten years, than of the last hundred. But how do we prevent this acceleration from eroding away our humanity? As technology becomes increasingly immaterial, ask this: does the technology we've created add more layers of confusion? When we strip away all the technology, what are we left with? The same thing we started with -- people.`

const designOfEverydayThingsDescription = `Even the smartest among us can feel inept as we fail to figure out which light switch or oven burner to turn on, or whether to push, pull, or slide a door. The fault, argues this ingenious,even liberating,book, lies not in ourselves, but in product design that ignores the needs of users and the principles of cognitive psychology. The problems range from ambiguous and hidden controls to arbitrary relationships between controls and functions, coupled with a lack of feedback or other assistance and unreasonable demands on memorization. The Design of Everyday Things shows that good, usable design is possible. The rules are simple: make things visible, exploit natural relationships that couple function and control, and make intelligent use of constraints. The goal: guide the user effortlessly to the right action on the right control at the right time.`

export default () => (
    <div>
        <MainBodyHolder>
            <BookshelfIntro />
            <BookCard title='Sprint' author='by Jake Knapp' description={sprintDescription} bookImage={sprintBook}></BookCard>
            <BookCard title='Lean UX' author='by Jeff Gothelf with Josh Seiden' description={leanUXDescription} bookImage={leanUXBook}></BookCard>
            <BookCard title='The Lean Startup' author='by Eric Ries' description={leanStartupDescription} bookImage={leanStartupBook}></BookCard>
            <BookCard title="Don't Make Me Think" author='by Steve Krug' description={dontMakeMeThinkDescription} bookImage={dontMakeMeThinkBook}></BookCard>
            <BookCard title='The Design of Everyday Things' author='by Don Norman' description={designOfEverydayThingsDescription} bookImage={designOfEverydayThingsBook}></BookCard>
            <BookCard title= 'Hippo: The Human Focused Digital Book' author='by Pete Trainor' description={hippoDescription} bookImage={hippoBook}></BookCard>
        </MainBodyHolder>
    </div>
)