import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
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

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "Success!",
            text: "Successfully Added!",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-gray-200 p-3 lg:px-10 lg:py-14 container mx-auto">
      <div>
        <h2 className="text-3xl lg:text-5xl text-center font-bold">Add New Coffee</h2>
        <p className="lg:w-2/3 lg:mx-auto mt-2 text-center">
          It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
      </div>

      <form onSubmit={handleAddCoffee} className="w-4/5 mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 rounded-md">
        <div>
          <p>Name:</p>
          <input className="py-2 px-4 w-full" type="text" name="name" placeholder="Enter Coffee Name" />
        </div>

        <div>
          <p>Chef:</p>
          <input className="py-2 px-4 w-full" type="text" name="chef" placeholder="Enter coffee chef" />
        </div>

        <div>
          <p>Supplier:</p>
          <input className="py-2 px-4 w-full" type="text" name="supplier" placeholder="Enter coffee supplier" />
        </div>

        <div>
          <p>Taste:</p>
          <input className="py-2 px-4 w-full" type="text" name="taste" placeholder="Enter coffee taste" />
        </div>

        <div>
          <p>Category:</p>
          <input className="py-2 px-4 w-full" type="text" name="category" placeholder="Enter coffee category" />
        </div>

        <div>
          <p>Details:</p>
          <input className="py-2 px-4 w-full" type="text" name="details" placeholder="Enter coffee details" />
        </div>

        <div className="lg:col-span-2">
          <p>Photo:</p>
          <input className="py-2 px-4 w-full " type="text" name="photo" placeholder="Enter photo URL" />
        </div>

        <div className="lg:col-span-2">
          <p>Name:</p>
          <input className="py-2 px-4 w-full bg-[#D2B48C]" type="submit" value="Add Coffee" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
