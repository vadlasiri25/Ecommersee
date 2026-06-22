import { FiStar } from 'react-icons/fi';

const reviews = [
  { id: 1, name: 'Priya Sharma', rating: 5, review: 'Absolutely love the quality of the dresses. The delivery was super fast and the packaging was premium.', date: '2 days ago', avatar: 'https://picsum.photos/seed/user1/100/100' },
  { id: 2, name: 'Rahul Verma', rating: 4, review: 'Great collection of sneakers. Found exactly what I was looking for. Will definitely shop again.', date: '1 week ago', avatar: 'https://picsum.photos/seed/user2/100/100' },
  { id: 3, name: 'Ananya Patel', rating: 5, review: 'The ethnic wear section is amazing. The fabric is so soft and the fit is perfect!', date: '2 weeks ago', avatar: 'https://picsum.photos/seed/user3/100/100' },
  { id: 4, name: 'Vikram Singh', rating: 5, review: 'Best fashion app out there. The UI is so smooth and the product recommendations are spot on.', date: '1 month ago', avatar: 'https://picsum.photos/seed/user4/100/100' },
];

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-surface-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-black tracking-tight uppercase mb-4">
            💬 What Our Customers Say
          </h2>
          <p className="text-white/60">Don't just take our word for it</p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory px-2">
          {reviews.map((review) => (
            <div key={review.id} className="min-w-[300px] md:min-w-[400px] snap-center glass-dark rounded-2xl p-6 md:p-8 relative">
              <div className="text-6xl text-white/10 absolute top-4 right-4 font-serif">"</div>
              
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/20" />
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <div className="flex text-warning text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={i < review.rating ? "fill-warning" : "text-white/20"} />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-4">"{review.review}"</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
