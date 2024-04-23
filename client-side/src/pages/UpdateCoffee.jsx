import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffee = { name, chef, supplier, taste, category, details, photo };

    fetch(`https://server-site-phi.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          form.reset();
          Swal.fire({
            title: "Success!",
            text: "Successfully Updated!",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleUpdate} className="w-4/5 mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 rounded-md">
        <div>
          <p>Name:</p>
          <input className="py-2 px-4 w-full" type="text" name="name" defaultValue={name} />
        </div>

        <div>
          <p>Chef:</p>
          <input className="py-2 px-4 w-full" type="text" name="chef" defaultValue={chef} />
        </div>

        <div>
          <p>Supplier:</p>
          <input className="py-2 px-4 w-full" type="text" name="supplier" defaultValue={supplier} />
        </div>

        <div>
          <p>Taste:</p>
          <input className="py-2 px-4 w-full" type="text" name="taste" defaultValue={taste} />
        </div>

        <div>
          <p>Category:</p>
          <input className="py-2 px-4 w-full" type="text" name="category" defaultValue={category} />
        </div>

        <div>
          <p>Details:</p>
          <input className="py-2 px-4 w-full" type="text" name="details" defaultValue={details} />
        </div>

        <div className="lg:col-span-2">
          <p>Photo:</p>
          <input className="py-2 px-4 w-full " type="text" name="photo" defaultValue={photo} />
        </div>

        <div className="lg:col-span-2">
          <input className="py-2 px-4 w-full bg-[#D2B48C]" type="submit" value="Add Coffee" />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
