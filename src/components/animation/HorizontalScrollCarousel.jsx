import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 ml-16">
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
    <div key={card.id} className="bg-[#491926] rounded-3xl group relative h-[500px] w-[450px] overflow-hidden">
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <div className="p-8 h5">{card.testimonial}</div>
        <div className="p-4 body-text text-white/40 text-center">{card.name}</div>
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
      'Superb service one can ever expect. The developers are very professional, expert in their domain. I have got my logo designed by them, my visiting cards, many of my advertisements and other stuffs. They are very hard working and very dedicated. Wishing them a great success.',
    name: 'Kunal Ambasta',
  },
  {
    id: 4,
    testimonial:
      'Superb service one can ever expect. The developers are very professional, expert in their domain. I have got my logo designed by them, my visiting cards, many of my advertisements and other stuffs. They are very hard working and very dedicated. Wishing them a great success.',
    name: 'Kunal Ambasta',
  },
  {
    id: 5,
    testimonial:
      'Superb service one can ever expect. The developers are very professional, expert in their domain. I have got my logo designed by them, my visiting cards, many of my advertisements and other stuffs. They are very hard working and very dedicated. Wishing them a great success.',
    name: 'Kunal Ambasta',
  },
];
