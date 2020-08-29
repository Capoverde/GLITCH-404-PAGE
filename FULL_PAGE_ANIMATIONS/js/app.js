// $(function () {
//   console.log('#############################');
//   console.log('######## jQuery 3.3.1 #######');
//   console.log('#############################');
// });

new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  dragAndMove: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector('h1');
    const tl = new TimelineMax({delay:0.5});
    tl.fromTo(title, 02, { y: '50', opacity: 0 }, {y: 0, opacity: 1 });
  }
});