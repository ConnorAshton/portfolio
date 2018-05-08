import * as React from 'react';

export const Title = 'Mattbot3000'

export const Subtitle = 'Internal tool to improve the ease of carrying out sentiment analysis.'

export const sh1 = 'Overview'

export const sh1body = `The Mattbot3000 was an idea myself and a colleague came up with to see how we could improve the process we currently had in place for carrying out sentiment analysis on our posts. A sentiment analysis is carried out to see how our audience reacts to a piece of content which we then use by feeding that data into the kind of content we publish going forward.`

export const sh2 = `Users &
Problem`

export const sh2body = `The sentiment analysis up to this point has been carried out by the data science department at the request of colleagues in content, sales, and various other departments. 

The problem is that this process is time-consuming and laborious for the data scientist tasked with carrying it out. It prevents them from working on the things they would like to be doing and areas they would like to spend more time focusing on. They normally get multiple requests a day.`

export const sh3 = `Design Process`

export const sh3body = `The first step was to truly understand the problem and learn exactly how a data scientist carries out a sentiment analysis by immersing myself in the process. 

This involved sitting side by side as they walked through exactly how it works. We went into detail on the purpose of it, what information they needed to pass in, the technicalities of how the script parses the data and then assigns different scores to each piece of data, what they expect to see after running the script, and how the findings are then sent back to the person who requested the analysis to be carried out.

Below shows the script and interface that the data scientist was using to generate these reports:`

export const wb1 = `After spending time going through this whole process I began to realise actually carrying out the sentiment analysis wasn’t too difficult, it just involved a little tweaking when setting up a report to be generated, the bulk of the complexity was the script that had already been written. I started to think of how we could make this so simple that we could pass it off to anybody in the business and they would be able to run a sentiment analysis themselves. This would mean that people could easily carry out an analysis of whatever they want, whenever they wanted and get the results immediately. It would also free up the data scientist to focus on other tasks.

It was clear that if we tried to get people to use the current interface they would think they have just stepped into the matrix and run a mile. Not to mention the initial “training” we would have to give each person on how to use it, what they could tweak, and how it all works. What happens if they change a piece of code they weren’t meant to and the whole script breaks? Yes, it sounded like a nightmare and we clearly needed a better solution.

That solution came in the form of a user-friendly interface that hides the complexity and instead shows an interface so simple that anybody could use it. The interface will allow them to tweak the things they are allowed to tweak and protect those they are not.

So now I knew how we could improve this experience and get other members of the business to carry out these analyses. The next step was to gather a list of user requirements:`

export const sh4 = `User Interface`

export const sh4body = `After sitting alongside data science and truly understanding the problem as well as their requirements I was confident to dive into creating the UI.

The aim was to keep the interface as simple as possible and make the experience more enjoyable and add a bit of personality. I wanted the end user to enjoy using the tool rather than seeing it as a chore.`

export const sh5 = `Outcome`

export const sh5body = `After creating the designs and ensuring they ticked all the right boxes as well as being easy enough for anyone to understand and use (tested prototype on various people) we went ahead and built it using React, MongoDB, and the Python script running in a docker container.

We are now looking to push it out to the wider business and continue iterating on it as the feedback starts coming in.`
