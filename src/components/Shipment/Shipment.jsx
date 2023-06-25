import React from "react";

const Shipment = () => {
  const handleShipment = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    console.log(name, email, address, phone);
  };

  return (
    <div>
      <h1 className="text-center text-5xl text-blue-500  my-9">
        Add your information
      </h1>

      <div className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleShipment}>
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Your name
              </label>
              <input
                type="text"
                required
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none "
              />
            </div>
            <div className="mb-5">
              <label for="email" className="mb-3 block font-medium ">
                Email Address
              </label>
              <input
                value={user.email}
                type="email"
                name="email"
                id="email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none"
                readOnly
                autoComplete="off"
              />
            </div>
            <div className="mb-5">
              <label
                for="address"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Address
              </label>
              <input
                required
                type="text"
                name="address"
                id="address"
                placeholder="Enter your Address"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone
              </label>
              <input
                required
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your Phone"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
