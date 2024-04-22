import { useLoaderData } from "react-router-dom";
import Coffee from "../pages/Coffee";
import { useState } from "react";

const Root = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <div>
        <h3 className="text-5xl text-center font-bold mb-24 mt-10">Coffee Collection</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee} setCoffees={setCoffees} coffees={coffees} />
        ))}
      </div>
    </div>
  );
};

export default Root;
