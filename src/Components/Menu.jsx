import Pizza from "./Pizza";
import pizzaData from "../data/data";

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>The Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p> The Best Pizzas We Offer</p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, we're still working on our menu</p>
      )}
    </main>
  );
}

export default Menu;
