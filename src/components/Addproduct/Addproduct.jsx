import Navbar from "../Header/Navbar/Navbar";

const Addproduct = () => {
    const handleProducts = e => {
        e.preventDefault();
        const form = e.target;
        const image_url = form.image.value;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brand = form.brand.value;
        const description = form.st_description.value;
        const type = form.type.value;
        const productData = { image_url, name, price, brand, type, description, rating };


        fetch('https://cars-data-server-side.vercel.app/addproduct', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json)
            .then((data) => {
                console.log(data)
            })

        



    }
    return (
        <div className="">
            <div className="bg-blue-400">
                <Navbar></Navbar>
            </div>
            <div className="mt-12">

            <form onSubmit={handleProducts}>
                <div className="grid md:grid-cols-2 grid-cols-1 w-full md:gap-12 px-6 md:px-14">


                    <div className="w-full">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Image url</span>
                            </label>
                            <label className="input-group input-group-vertical">

                                <input type="text" name="image" placeholder="Image url of your product" className="input input-bordered focus:outline-none" />
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered focus:outline-none" />
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="number" name="price" placeholder="Product Price" className="input input-bordered focus:outline-none" />
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="rating" placeholder="Product Rating" className="input input-bordered focus:outline-none" />
                            </label>
                        </div>

                    </div>


                    <div className="w-full">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Brand Name</span>
                            </label>
                            <label className="input-group input-group-vertical">

                                <input type="text" name="brand" placeholder="Brand Name" className="input  input-bordered focus:outline-none" />
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Type</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <select name="type" id="">
                                    <option value="car">Car</option>
                                    <option value="computer">Computer</option>
                                    <option value="headphone">Headphone</option>
                                </select>

                            </label>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Short Description</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="st_description" placeholder="Short Description" className="input input-bordered focus:outline-none" />
                            </label>
                        </div>


                    </div>





                </div>
                <div className="px-14 mt-6">
                    <button type="submit" className="btn bg-blue-400 text-white w-full">Add Product</button>

                </div>
            </form>
            </div>

        </div>
    );
};

export default Addproduct;