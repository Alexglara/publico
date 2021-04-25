new fullpage("#fullpage", {
   autoScrolling: true,
   navigation: true,
   onLeave: (origin, destination, direction) => {
      const section = destination.item;
      const title =  section.querySelector("h1");
      const tl = new TimelineMax({ delay: 0.5 });
      tl.fromTo(title,0.5, {y: "50", opacity: 0}, {y:0, opacity:1});

      if(destination.index === 1){
         const jackets = document.querySelectorAll(".jacket");
         const description = document.querySelector('.description');

         tl.fromTo(jackets, 0.7, { x: "100%" }, { x: "-70%" })
         .fromTo(jackets[0], 1, {opacity: 1}, {opacity: 1})
         .fromTo(jackets[1], 1, {opacity: 0}, {opacity: 1})
         .fromTo(jackets[2], 1, {opacity: 0}, {opacity: 1})
      }
   }
});