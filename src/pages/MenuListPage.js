import MenuListItemCard from "../components/MenuListItemCard/MenuListItemCard";
function MenuListPage() {
  const items = [
    {
      id: 1,
      title: "burritos",
      category: "mains",
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "The fan favourite! Enjoy the freshest ingredients inside a beautifully made tortilla.",
      ingredients: [
        "Flour tortilla",
        "Fluffy white or brown rice",
        "Succulent meat or veggies of your choice",
        "Australian Jack cheese",
        "Black beans",
        "Pico de Gallo (a fresh-chopped tomato salsa)",
        "House-blend salsa",
      ],
    },
    {
      id: 2,
      title: "bowls",
      category: "mains",
      image:
        "https://images.pexels.com/photos/8696479/pexels-photo-8696479.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Want the delicious Mexican flavours of our burrito but feel like something without the tortilla? Try your favourite burrito in a bowl!",
      ingredients: [
        "Fluffy white or brown rice",
        "Succulent meat or veggies of your choice",
        "Australian Jack cheese",
        "Black beans",
        "House-made corn chips",
        "Pico de Gallo (a fresh-chopped tomato salsa)",
        "House-blend salsa",
      ],
    },
    {
      id: 3,
      title: "enchiladas",
      category: "mains",
      image:
        "https://images.pexels.com/photos/9213936/pexels-photo-9213936.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Engorge in a crowd favorite, Enchiladas. Perfect as a snack or to share!",
      ingredients: [
        "Cheese",
        "Ground Beef",
        "Chicken",
        "Chilli Sauce",
        "Sour Cream",
        "Rice",
        "Beans",
      ],
    },
    {
      id: 4,
      title: "quesadillas",
      category: "mains",
      image:
        "https://images.pexels.com/photos/4955210/pexels-photo-4955210.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Quesadillas and perfect for every occasion! The perfect finger food!",
      ingredients: [
        "Spinach",
        "Fajita Beef",
        "Fajita Chicken",
        "Tomatoes",
        "Sour Cream",
        "Guacamole",
        "Rice",
        "Onions",
      ],
    },
    {
      id: 5,
      title: "Coca Cola",
      category: "Drinks",
      image:
        "https://images.pexels.com/photos/39720/pexels-photo-39720.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "The refreshing taste of the iconic Coca Cola.",
    },
    {
      id: 6,
      title: "Nachos",
      category: "Appetizers",
      image:
        "https://images.pexels.com/photos/1108775/pexels-photo-1108775.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Our Nachos are topped with fresh cheese and has your choice of meaty goodness",
      ingredients: [
        "Corn Chips",
        "Beef",
        "Chicken",
        "Sour Cream",
        "Cheese",
        "Guacamole",
      ],
    },
  ];
  return (
    <section className="menulist__section">
      <ul>
        {items.map((item) => {
          return <MenuListItemCard item={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
}
export default MenuListPage;
