import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"

// Category images
import nigerianImg from "../assets/food 38.jpg"
import continentalImg from "../assets/food 37.jpg"
import fusionImg from "../assets/food3.jpg"
import dessertsImg from "../assets/des1.jpg"
import drinksImg from "../assets/drink2.jpg"

// Types
type MenuItem = {
  name: string
  description: string
  price: string
  accompaniments?: string[]
}

type MenuCategory = {
  title: string
  items: MenuItem[]
}

type Tab = {
  id: string
  label: string
  image: string
  categories: MenuCategory[]
}

const tabs: Tab[] = [
  {
    id: "nigerian",
    label: "Nigerian",
    image: nigerianImg,
    categories: [
      {
        title: "Soups & Stews",
        items: [
          { name: "Egusi Soup", description: "Rich, earthy egusi cooked with assorted meat and crayfish", price: "₦4,500", accompaniments: ["Pounded Yam", "Eba", "Semo", "Amala", "Fufu", "Wheat"] },
          { name: "Ogbono Soup", description: "Silky draw soup with ogbono seeds, assorted meat and leafy greens", price: "₦4,500", accompaniments: ["Pounded Yam", "Eba", "Semo", "Amala", "Fufu", "Wheat"] },
          { name: "Afang Soup", description: "A classic Efik delicacy with afang leaves, waterleaf and assorted seafood", price: "₦5,500", accompaniments: ["Pounded Yam", "Eba", "Semo", "Fufu"] },
          { name: "Bitterleaf Soup", description: "Traditional Igbo soup with washed bitterleaf, cocoyam and assorted meat", price: "₦4,500", accompaniments: ["Pounded Yam", "Eba", "Fufu"] },
          { name: "Oha Soup", description: "Delicate Igbo soup made with oha leaves and cocoyam thickener", price: "₦5,000", accompaniments: ["Pounded Yam", "Eba", "Fufu"] },
          { name: "Edikaikong", description: "Nutrient-rich Cross River soup with pumpkin leaves, waterleaf and periwinkle", price: "₦5,500", accompaniments: ["Pounded Yam", "Eba", "Semo", "Fufu"] },
          { name: "Pepper Soup (Catfish)", description: "Aromatic and spicy catfish pepper soup with native spices", price: "₦5,000" },
          { name: "Pepper Soup (Goat Meat)", description: "Bold and peppery goat meat pepper soup with uziza leaves", price: "₦5,500" },
        ]
      },
      {
        title: "Rice Dishes",
        items: [
          { name: "Party Jollof Rice", description: "Smoky, tomato-based party jollof with your choice of protein", price: "₦4,000" },
          { name: "Ofada Rice & Ayamase", description: "Local Ofada rice served with spicy green pepper stew", price: "₦4,500" },
          { name: "Fried Rice", description: "Nigerian-style fried rice with mixed vegetables and choice of protein", price: "₦3,500" },
          { name: "Coconut Rice", description: "Fragrant rice cooked in coconut milk with bay leaves", price: "₦4,000" },
          { name: "Native Rice", description: "Hearty palm oil rice with locust beans and smoked fish", price: "₦4,000" },
        ]
      },
      {
        title: "Grills & Specials",
        items: [
          { name: "Suya (Beef)", description: "Spiced skewered beef grilled over open flame with suya spice", price: "₦3,500" },
          { name: "Suya (Chicken)", description: "Tender chicken skewers marinated in suya spice blend", price: "₦3,500" },
          { name: "Asun", description: "Spicy smoked goat meat with fresh peppers and onions", price: "₦5,000" },
          { name: "Nkwobi", description: "Spiced cow foot in palm oil sauce — an Igbo delicacy", price: "₦5,500" },
          { name: "Isi Ewu", description: "Spiced goat head in traditional sauce", price: "₦6,000" },
          { name: "Peppered Snail", description: "Giant African land snails in rich pepper sauce", price: "₦6,500" },
          { name: "Peppered Gizzard", description: "Crispy gizzard tossed in spicy pepper sauce", price: "₦3,000" },
          { name: "Gizdodo", description: "Gizzard and plantain in a rich pepper sauce", price: "₦3,500" },
        ]
      },
      {
        title: "Small Chops",
        items: [
          { name: "Puff Puff", description: "Soft, golden fried dough balls — a Nigerian classic", price: "₦1,500" },
          { name: "Samosa", description: "Crispy pastry parcels filled with spiced minced meat", price: "₦2,000" },
          { name: "Spring Rolls", description: "Crispy rolls filled with seasoned vegetables and chicken", price: "₦2,000" },
          { name: "Mini Moi Moi", description: "Steamed bean pudding with egg and fish", price: "₦1,500" },
        ]
      },
    ]
  },
  {
    id: "continental",
    label: "Continental",
    image: continentalImg,
    categories: [
      {
        title: "Starters",
        items: [
          { name: "Soup of the Day", description: "Ask your server for today's freshly prepared soup", price: "₦3,500" },
          { name: "Bruschetta", description: "Toasted sourdough with tomatoes, basil and balsamic glaze", price: "₦3,000" },
          { name: "Caesar Salad", description: "Crisp romaine, parmesan, croutons and house Caesar dressing", price: "₦4,000" },
          { name: "Prawn Cocktail", description: "Chilled prawns with Marie Rose sauce and iceberg lettuce", price: "₦5,500" },
          { name: "French Onion Soup", description: "Classic caramelised onion soup with Gruyère crouton", price: "₦4,000" },
          { name: "Garlic Bread", description: "Toasted baguette with herb butter", price: "₦2,000" },
        ]
      },
      {
        title: "Mains",
        items: [
          { name: "Fish & Chips", description: "Beer-battered cod with chunky chips, mushy peas and tartare sauce", price: "₦8,500" },
          { name: "Grilled Salmon", description: "Atlantic salmon with lemon butter, capers and seasonal vegetables", price: "₦12,000" },
          { name: "Ribeye Steak", description: "300g ribeye with peppercorn sauce, fries and grilled tomato", price: "₦18,000" },
          { name: "Chicken Alfredo", description: "Fettuccine in creamy Alfredo sauce with grilled chicken", price: "₦7,500" },
          { name: "Spaghetti Bolognese", description: "Slow-cooked beef ragù with spaghetti and parmesan", price: "₦7,000" },
          { name: "Grilled Chicken", description: "Herb-marinated chicken breast with roasted vegetables", price: "₦8,000" },
          { name: "Beef Lasagne", description: "Layered pasta with beef ragù and béchamel", price: "₦7,500" },
          { name: "Prawn Linguine", description: "Linguine with king prawns, cherry tomatoes and white wine", price: "₦9,500" },
          { name: "Lamb Chops", description: "Rosemary-marinated lamb chops with mint jus and mash", price: "₦16,000" },
        ]
      },
      {
        title: "Sides",
        items: [
          { name: "Chunky Fries", description: "Thick-cut fries with sea salt", price: "₦1,500" },
          { name: "Mashed Potato", description: "Buttery smooth mashed potato", price: "₦1,500" },
          { name: "Steamed Vegetables", description: "Seasonal vegetables with herb butter", price: "₦1,500" },
          { name: "Onion Rings", description: "Crispy battered onion rings", price: "₦1,500" },
          { name: "Garden Salad", description: "Mixed leaves with house vinaigrette", price: "₦2,000" },
        ]
      },
    ]
  },
  {
    id: "fusion",
    label: "Fusion",
    image: fusionImg,
    categories: [
      {
        title: "Chef's Crossroads",
        items: [
          { name: "Oríta Jollof Risotto", description: "Slow-cooked jollof rice reimagined as Italian risotto, finished with truffle oil and parmesan", price: "₦18,500" },
          { name: "Suya Rack of Lamb", description: "French-trimmed rack of lamb marinated in suya spice with caramelised plantain purée", price: "₦32,000" },
          { name: "Egusi Velouté", description: "Our egusi soup — rich, earthy, deeply spiced — finished with a touch of cream and artisan bread", price: "₦8,500" },
          { name: "Ofada Arancini", description: "Crispy Ofada rice balls stuffed with smoked fish and served with ayamase dipping sauce", price: "₦7,500" },
          { name: "Pepper Soup Bouillabaisse", description: "Nigerian pepper soup spices meet the classic French seafood stew", price: "₦14,000" },
          { name: "Asun Tacos", description: "Spicy asun in soft corn tortillas with zobo salsa and pickled onions", price: "₦9,000" },
          { name: "Moi Moi Soufflé", description: "Elevated bean pudding soufflé with smoked salmon and crème fraîche", price: "₦8,000" },
          { name: "Chin Chin Crusted Chicken", description: "Pan-fried chicken breast with a chin chin crumb crust and honey mustard", price: "₦12,000" },
        ]
      },
    ]
  },
  {
    id: "desserts",
    label: "Desserts",
    image: dessertsImg,
    categories: [
      {
        title: "Nigerian Inspired",
        items: [
          { name: "Puff Puff Ice Cream Sundae", description: "Warm puff puff with vanilla ice cream, chocolate sauce and sprinkles", price: "₦4,500" },
          { name: "Chin Chin Parfait", description: "Layers of cream, chin chin crumble and caramel", price: "₦4,000" },
          { name: "Zobo Sorbet", description: "Refreshing hibiscus sorbet with a hint of ginger", price: "₦3,500" },
          { name: "Coconut Candy Panna Cotta", description: "Silky panna cotta with coconut candy crumble", price: "₦4,500" },
          { name: "Baked Chin Chin Cheesecake", description: "New York cheesecake with a chin chin base and zobo coulis", price: "₦5,000" },
        ]
      },
      {
        title: "Continental Classics",
        items: [
          { name: "Crème Brûlée", description: "Classic vanilla custard with caramelised sugar crust", price: "₦5,000" },
          { name: "Chocolate Fondant", description: "Warm chocolate cake with molten centre and vanilla ice cream", price: "₦5,500" },
          { name: "Tiramisu", description: "Classic Italian dessert with mascarpone and espresso", price: "₦4,500" },
          { name: "New York Cheesecake", description: "Dense, creamy cheesecake with berry compote", price: "₦4,500" },
          { name: "Sticky Toffee Pudding", description: "Warm date pudding with toffee sauce and clotted cream", price: "₦4,500" },
          { name: "Lemon Tart", description: "Sharp lemon curd in a buttery pastry shell", price: "₦4,000" },
          { name: "Profiteroles", description: "Choux pastry with cream and warm chocolate sauce", price: "₦4,000" },
          { name: "Apple Crumble", description: "Warm spiced apple with oat crumble and custard", price: "₦4,000" },
          { name: "Waffles", description: "Belgian waffles with berry compote and whipped cream", price: "₦4,500" },
          { name: "Ice Cream Selection", description: "Three scoops of your choice — ask for today's flavours", price: "₦3,000" },
        ]
      },
    ]
  },
  {
    id: "drinks",
    label: "Drinks",
    image: drinksImg,
    categories: [
      {
        title: "Nigerian Drinks",
        items: [
          { name: "Chapman", description: "Classic Nigerian party drink with Fanta, Grenadine and cucumber", price: "₦2,500" },
          { name: "Zobo (Classic)", description: "Chilled hibiscus drink with cloves and ginger", price: "₦2,000" },
          { name: "Zobo (Ginger)", description: "Extra ginger zobo with a spicy kick", price: "₦2,000" },
          { name: "Palm Wine", description: "Fresh tapped palm wine — ask for availability", price: "₦3,000" },
          { name: "Kunu", description: "Chilled millet drink with ginger and pepper", price: "₦2,000" },
          { name: "Zobo Lemonade", description: "House zobo blended with fresh lemon", price: "₦2,500" },
        ]
      },
      {
        title: "Cocktails & Wine",
        items: [
          { name: "House Red Wine", description: "Ask your server for today's selection", price: "₦8,000" },
          { name: "House White Wine", description: "Ask your server for today's selection", price: "₦8,000" },
          { name: "Prosecco", description: "Chilled Italian sparkling wine", price: "₦10,000" },
          { name: "Mojito", description: "Rum, mint, lime, sugar and soda", price: "₦5,500" },
          { name: "Passion Fruit Martini", description: "Vodka, passion fruit liqueur and vanilla", price: "₦6,000" },
          { name: "Cosmopolitan", description: "Vodka, triple sec, cranberry and lime", price: "₦5,500" },
          { name: "Gin & Tonic", description: "Premium gin with tonic and your choice of garnish", price: "₦5,000" },
          { name: "Virgin Mojito", description: "Mint, lime, sugar and soda — no alcohol", price: "₦3,500" },
        ]
      },
      {
        title: "Hot Drinks",
        items: [
          { name: "Espresso", description: "Double shot of premium espresso", price: "₦2,000" },
          { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "₦2,500" },
          { name: "Latte", description: "Espresso with steamed milk", price: "₦2,500" },
          { name: "Nigerian Spiced Tea", description: "Black tea with ginger, cloves and cinnamon", price: "₦2,000" },
          { name: "Hibiscus Tea", description: "Hot zobo tea with honey", price: "₦2,000" },
          { name: "Hot Chocolate", description: "Rich Belgian chocolate with steamed milk", price: "₦2,500" },
        ]
      },
    ]
  },
]

// Expandable menu item component
const MenuItem = ({ item }: { item: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => item.accompaniments && setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between py-4 text-left gap-4 ${item.accompaniments ? "cursor-pointer" : "cursor-default"}`}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h4 className="text-text-primary font-heading text-lg">{item.name}</h4>
            {item.accompaniments && (
              <span className="text-accent text-xs uppercase tracking-widest border border-accent/30 px-2 py-0.5">
                + swallow
              </span>
            )}
          </div>
          <p className="text-text-muted text-sm">{item.description}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-accent font-semibold">{item.price}</span>
          {item.accompaniments && (
            <ChevronDown
              className={`text-accent w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          )}
        </div>
      </button>

      {/* Accompaniments dropdown */}
      <AnimatePresence>
        {isOpen && item.accompaniments && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-4 border-l border-accent/30 ml-2 mb-4">
              <p className="text-text-muted text-xs uppercase tracking-widest mb-3">
                Choose your swallow:
              </p>
              <div className="flex flex-wrap gap-2">
                {item.accompaniments.map((acc) => (
                  <span
                    key={acc}
                    className="text-text-muted text-xs border border-border px-3 py-1 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                  >
                    {acc}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Menu = () => {
  const [activeTab, setActiveTab] = useState("nigerian")

  const currentTab = tabs.find(t => t.id === activeTab)!

  return (
    <div className="bg-primary min-h-screen pt-24">

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 text-center">
        <p className="text-accent text-xs uppercase tracking-widest mb-4">What We Serve</p>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent" />
          <div className="w-2 h-2 border border-accent rotate-45" />
          <div className="w-8 h-px bg-accent" />
        </div>
        <h1 className="font-heading text-5xl md:text-7xl text-text-primary mb-4">Our Menu</h1>
        <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
          Two culinary worlds, one extraordinary menu. Every dish is crafted with precision, passion and a deep respect for both traditions.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-y border-border sticky top-20 z-40 bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? "border-accent text-accent"
                    : "border-transparent text-text-muted hover:text-text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category hero image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-75 overflow-hidden"
        >
          <img
            src={currentTab.image}
            alt={currentTab.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl text-text-primary"
            >
              {currentTab.label}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Menu content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-16"
          >
            {currentTab.categories.map((category) => (
              <div key={category.title}>
                {/* Category heading */}
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-heading text-2xl text-accent whitespace-nowrap">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
                  {category.items.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  )
}

export default Menu