interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  emoji: string;
  description: string;
}

const categories = ["Coffee", "Tea", "Brewing", "Treats"];

const products: Product[] = [
  {
    id: 1,
    name: "Altai Morning",
    category: "Coffee",
    price: 5800,
    emoji: "☕",
    description: "Coffee with notes of cocoa and apricot.",
  },
  {
    id: 2,
    name: "Silk Road Blend",
    category: "Coffee",
    price: 6400,
    emoji: "🫘",
    description: "A balanced blend with caramel sweetness.",
  },
  {
    id: 3,
    name: "Mountain Decaf",
    category: "Coffee",
    price: 6900,
    emoji: "🌙",
    description: "Decaf coffee with chocolate notes.",
  },
  {
    id: 4,
    name: "Steppe Thyme",
    category: "Tea",
    price: 3200,
    emoji: "🌿",
    description: "Black tea with wild steppe thyme.",
  },
  {
    id: 5,
    name: "Apricot Oolong",
    category: "Tea",
    price: 3900,
    emoji: "🍑",
    description: "Light oolong with dried apricot.",
  },
  {
    id: 6,
    name: "Nomad Chai",
    category: "Tea",
    price: 3600,
    emoji: "🫖",
    description: "Spiced tea with cardamom and cinnamon.",
  },
  {
    id: 7,
    name: "Glass V60",
    category: "Brewing",
    price: 12500,
    emoji: "💧",
    description: "A simple brewer for pour-over coffee.",
  },
  {
    id: 8,
    name: "Travel Press",
    category: "Brewing",
    price: 14800,
    emoji: "🥤",
    description: "A compact coffee press for travel.",
  },
  {
    id: 9,
    name: "Honey Baursak",
    category: "Treats",
    price: 2400,
    emoji: "🍯",
    description: "Crispy baursak with mountain honey.",
  },
  {
    id: 10,
    name: "Dark Chocolate",
    category: "Treats",
    price: 2900,
    emoji: "🍫",
    description: "Dark chocolate with a pinch of salt.",
  },
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <a className="logo" href="#top">
          Steppe &amp; Steam
        </a>

        <nav className="navigation">
          <a href="#catalog">Catalog</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="label">Coffee atelier in Petropavl</p>
          <h1>Simple goods for a better coffee break.</h1>
          <p>
            Fresh coffee, fragrant tea, and useful brewing tools for your
            everyday routine.
          </p>
          <a className="primary-button" href="#catalog">
            View catalog
          </a>
        </section>

        <section className="stats" aria-label="Store information">
          <div>
            <strong>10</strong>
            <span>Products</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Categories</span>
          </div>
          <div>
            <strong>48h</strong>
            <span>Delivery</span>
          </div>
        </section>

        <section className="catalog-section" id="catalog">
          <div className="section-title">
            <p className="label">Catalog</p>
            <h2>Choose your favorite</h2>
          </div>

          <div className="shop-layout">
            <aside className="filters">
              <h3>Categories</h3>
              <ul>
                {categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </aside>

            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">{product.emoji}</div>
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <strong className="product-price">
                    {product.price.toLocaleString("en-US")} ₸
                  </strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <p className="label">About us</p>
          <h2>Made for calm everyday moments.</h2>
          <p>
            Steppe &amp; Steam is a small Petropavl store. We select coffee, tea,
            and brewing tools that are simple to use and easy to enjoy.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <strong>Steppe &amp; Steam</strong>
        <span>© 2026 by whynicky</span>
      </footer>
    </>
  );
}
