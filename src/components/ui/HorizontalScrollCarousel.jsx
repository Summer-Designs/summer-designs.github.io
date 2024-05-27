import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative h-[150vh] lg:h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 ml-4 lg:ml-16">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="bg-[#491926] rounded-3xl group relative h-[450px] w-[400px] overflow-hidden">
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <div className="p-8 body-text">{card.testimonial}</div>
        <div className="p-4 body-text text-white/50 text-center">{card.name}</div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    id: 1,
    testimonial:
      'We got our wedding invited made by them.They captured our vision perfectly and delivered stunning designs that exceeded our expectations.Our guests were blown away by the elegance and attention to detail. Thank you for making our special day even more memorable!',
    name: 'Shruti Shah',
  },
  {
    id: 2,
    testimonial:
      'Superb service one can ever expect. The developers are very professional, expert in their domain. I have got my logo designed by them, my visiting cards, many of my advertisements and other stuffs. They are very hard working and very dedicated. Wishing them a great success.',
    name: 'Kunal Ambasta',
  },
  {
    id: 3,
    testimonial:
      'Thanks a lot sir for making my day through your designing . It is the best work till date i have seen. I could have rated you more if there were more stars. 🙌 Hats off to your work.',
    name: 'Amisha Sood',
  },
  {
    id: 4,
    testimonial:
      'The website design is stunning and aligns perfectly. Thank you so much The Summer Designs for being very responsive and keeping us updated at every phase. I highly recommend this platform to anyone looking for a creative and reliable professional.',
    name: 'Tina Jadav',
  },
  {
    id: 5,
    testimonial:
      'Thoroughly loved the logo designed by them. It really captured the essence and true meaning behind our brand. Thank you to the team!',
    name: 'Kalagee',
  },
  {
    id: 6,
    testimonial:
      'Working with summer design was a game-changer for our social media strategy. Their creativity, attention to detail, and strategic approach resulted in a significant boost in engagement and brand visibility. Highly recommend their services!',
    name: 'Rajvi Patel',
  },
];
