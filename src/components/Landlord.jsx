import Navbar from "./Navbar"

const Landlord = () => {
    return (<>
        <Navbar />
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <h2 className="font-semibold text-xl text-gray-600">Landlord Information Listing</h2>
                    <p className="text-gray-500 mb-6">Please provide information about the rental units.</p>

                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-2 gap-y-2 text-sm grid-cols-1 lg:grid-cols-1">
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">Personal Details</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-3">
                                        <label className="text-left" htmlFor="full_name">Full Name</label>
                                        <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                    </div>


                                    <div className="md:col-span-3">
                                        <label htmlFor="address">Address / Street</label>
                                        <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="city">City</label>
                                        <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="state">State / province</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="zipcode">Phone Number</label>
                                        <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>
                                    <div className="md:col-span-1">
                                        <label htmlFor="zipcode">Zip Code</label>
                                        <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>
                                    <div className="md:col-span-full flex gap-2 w-full">

                                        <div className="md:col-span-1">
                                            <label htmlFor="zipcode">Picture of ID (Issued by Government)</label>
                                            <div className="w-[200px] relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
                                                <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
                                                <div className="text-center">
                                                    <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="" />

                                                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                                                        <label htmlFor="file-upload" className="relative cursor-pointer">
                                                            <span>Drag and drop</span>
                                                            <span className="text-indigo-600">{" or browse "}</span>
                                                            <span>to upload</span>
                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                        </label>
                                                    </h3>
                                                    <p className="mt-1 text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="md:col-span-1">
                                            <label htmlFor="zipcode">Proof of Ownership of Property</label>
                                            <div className="w-[200px] relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
                                                <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
                                                <div className="text-center">
                                                    <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="" />

                                                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                                                        <label htmlFor="file-upload" className="relative cursor-pointer">
                                                            <span>Drag and drop</span>
                                                            <span className="text-indigo-600"> {" or browse "}</span>
                                                            <span>to upload</span>
                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                        </label>
                                                    </h3>
                                                    <p className="mt-1 text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-1">
                                            <label htmlFor="zipcode">Picture you want to upload of your house</label>
                                            <div className="w-[200px] relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
                                                <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
                                                <div className="text-center">
                                                    <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="" />

                                                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                                                        <label htmlFor="file-upload" className="relative cursor-pointer">
                                                            <span>Drag and drop</span>
                                                            <span className="text-indigo-600"> {" or browse "}</span>
                                                            <span>to upload</span>
                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                        </label>
                                                    </h3>
                                                    <p className="mt-1 text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-full text-right">
                                        <div className="inline-flex items-end">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right">
                    <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white" />
                </a>
            </div>
        </div>

    </>
    )
}

export default Landlord