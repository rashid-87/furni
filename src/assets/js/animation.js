
const ti = gsap.timeline({ defaults: { duration: 1 }, repeat: -1, repeatDelay: 10 });
ti.from(".screen__title", { opacity: 0, y: 30 }).from(".screen__button", {
  opacity: 0,
  y: 30,
});

const il = gsap.timeline({ defaults: { duration: 3 }, repeat: -1, repeatDelay: 10 });
il.from(".screen__images", { opacity: 0, x: -50 });

let tlStep = gsap.timeline({ defaults: { duration: 1 }, repeat: -1, repeatDelay: 1 });
 document.querySelectorAll('.product__row').forEach(step => {
        tlStep = tlStep
          .to(step, { y: -15 } , '-=1')
          .to(step, { y: 0, ease: "bounce.out" });
      });

const img = gsap.timeline({ defaults: { duration: 1.5 }, repeat: -1, repeatDelay: 10 });
img
.from(".info__img", { opacity: 0, y: -30 })
.from(".info__wrapp", {opacity: 0,x: -30,})
.from(".info__choose", {opacity: 0,y: -30,});

const foto = gsap.timeline({ defaults: { duration: 1 }, repeat: -1, repeatDelay: 5 });
foto
.from(".interion__img", { opacity: 0, y: -30 })
.from(".interion__foto", {opacity: 0, x: -30,})
.from(".interion__fotoses", {opacity: 0, x: -30,})
.from(".interion__wrapp", {opacity: 0, y: -30,});

let blog = gsap.timeline({ defaults: { duration: 1 }, repeat: -1, repeatDelay: 1 });
 document.querySelectorAll('.blog__row').forEach(step => {
        blog = blog
          .to(step, { opacity: 0.5, y: 15 } , '-=1')
          .to(step, { opacity: 1, y: 0, ease: "bounce.out" });
      });
