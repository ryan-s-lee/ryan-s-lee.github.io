import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo';
const Hobbies = () => {
    return (
    <Layout>
      <h3>Hobbies</h3>
      <p>
        Cooking! It saves me money. I can make my food taste good and
        make it healthy. If food tastes bad I can improve it next time. I can 
        make whatever I want, and shape it to my tastes or attempt to make it
        as authentic as I can (especially if I have friends or family who 
        know regional cuisine!) I can also get <i>faster</i>; if I want a meal 
        in 30 minutes I can whip up a basic chicken-rice-vegetable dish
        instead of heading to a burger place.
      </p>
      <p>
        Running! I should do this more often lol. It makes me tired in 20-30 minutes
        compared to spending an hour at the gym, though I still need to go to the
        gym to actually break muscle fibers. I can do it
        anywhere. It's good for my heart. I guess it can help me get places 
        faster, if I'm willing to
        look weird running all over the place.
      </p>
      <p>
        Does lifestyle management count? I guess cooking falls into this category.
        I love figuring out if I can do some daily task faster (see cooking),
        easier, or in parallel with other tasks. I guess that's related to me
        study computer science! Concerning making tasks easier, a good example 
        is figuring out how to discover my classwork for the day. In the past
        I would have to type out course websites or click through a course 
        management system every time I wanted to figure out what to do. I fixed
        that by using <a href="https://obsidian.md/">Obsidian</a> to build a 
        wiki page with links to relevant course sites, so I didn't have to worry
        about forgetting to check a certain site and cut down on the clicking around.
        Also, I got a bike specifically to cut down on commute time to and 
        between classes, though it's also fun in its own right.
      </p>
      <p>
        Another "hobby" is (informally) studying and spending on ergonomic
        stuff. Before college I didn't know that constantly shuffling around in
        my too-high desk and short-backed chair, banging my legs against the 
        desk stabilizer plank or whatever it's called, and craning my neck and 
        leaning over to 
        look at my low, tiny laptop screen for hours straight was eating into 
        my energy. Thus I ended up lying on my bed a lot instead of learning 
        new things like I wanted to. After getting into college, I got myself 
        a standing desk and a Steelcase Leap off of Facebook Marketplace; and 
        a monitor and monitor stand. With each addition my productivity went up
        what felt like 20%, scaling multiplicatively. It was kind of incredible
        how well I could work after getting the whole setup. It was more a
        pleasure than a pain. Next up is a trackball mouse!
      </p>
      <h3>Old Hobbies</h3>
      <p>
      League of Legends used to be a hobby haha. I was 
      half-decent at it, and its real-time team nature forced me to engage with
      it mentally even if I had run out of energy, not to mention it was 
      addicting. But I've finally figured out how to
      break from it. It mainly boiled down to two things: learning all the minutiae of 
      managing my energy, and finally learning to learn.
      </p>
      <p>
      On top of the lifestyle management and ergonomics, I figured out a few 
      tricks to get myself to sleep better (making myself colder, extra pillows,
      less light in the room, tire myself both physically and mentally during 
      the day so that
      I really feel the need to rest). With the extra energy, I had plenty of mental 
      energy to actually learn things, instead of only having the energy to play
      LoL. 
      </p>
      
      <p>
      But even if I had energy, I could end up wasting it by spinning my 
      gears on tough concepts I would never understand without learning to learn
      properly. First, I learned that some things are best introduced with a 
      video showing examples of how a concept or tool is used. Then, I learned 
      to read textbooks, which was actually a matter of pacing: if I found that
      I was glazing over some pieces of the text, I would take a 20 minute break
      during which I would lie in bed and try to empty my brain as best I could, 
      or pace/stand doing the same thing if I wasn't feeling like lying down. 
    </p>
    <p>
      Finally, I learned through experience and college courses what the "basic" 
      concepts were. I recall that in high school, due to all the craze over tech, I 
      went straight to neural networks, tensorflow, 
      OS design, and how to use an Arduino. I spent countless hours trying and 
      failing to learn these high-level concepts, and countless more recovering 
      mental energy after doing so. In college, I discovered that I first
      had to learn discrete math, set theory, what an HTTP request really is,
      the formal definition of a language, the definition of computation 
      and what a computer really was (everything's represented with a tape of 
      characters, and we just happened to pick 1s and 0s for convenience!),
      computer architecture, 
      how voltage worked, data structures, all sorts of basics. From there, learning specific 
      languages like Python, C, and HTML came easier, because I knew what they
      were for (e.g. HTML represents <i>information</i>; it's not just a way to
      decorate web pages, which is what CSS is for, and even that is just 
      information for the browser renderer). And from there libraries come easier.
      And with that came the power to build actual projects and practice using 
      all kinds of tools in a constructive way. Even the Arduino has become less
      daunting, even though I wasn't focusing on studying hardware. With that kind
      of power, I gravitated toward actually using it and growing my abilities, 
      because that kind of activity had finally become fruitful. From there, 
      quitting League came naturally.
      <br/>
      <br/>
      In a weird way, LoL pushed me toward a lot of the hobbies I have today.
      So I can't say it was a total waste of time. It was also a huge part of 
      my life in middle and high school, giving me escape from long nights of 
      homework. But I've definitely outgrown it, and I'm glad that I have the 
      time and energy to do other things that matter more to me.
      </p>
    </Layout>
    )
}

export const Head = () => <Seo title="Hobbies" />
export default Hobbies;