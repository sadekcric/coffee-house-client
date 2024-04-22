import Swal from "sweetalert2";

const Coffee = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, chef, taste, photo } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const filteredCoffee = coffees.filter((cf) => cf._id !== _id);
              setCoffees(filteredCoffee);
            }
          });
      }
    });
  };
  return (
    <div className="p-10 bg-gray-200">
      <div className="  bg-base-100 shadow-xl flex justify-between items-center">
        <div className="w-1/3">
          <img src={photo} alt="Shoes" className="rounded-xl w-full" />
        </div>

        <div className="card-body items-center text-center">
          <div className="flex justify-between items-center w-full">
            <p>{name}</p>
            <button>view</button>
          </div>
          <div className="flex justify-between items-center w-full">
            <p>{chef}</p>
            <button>Edit</button>
          </div>
          <div className="flex justify-between items-center w-full">
            <p>{taste}</p>
            <button onClick={() => handleDelete(_id)}>X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
