const Navbar = () => {
    return (
        <nav className='p-2 bg-yellow-500 w-full px-12'>
            {/* Proper navbar in tailwind */}
            <div className='flex justify-between items-center'>
                <a href='/' className='text-2xl font-bold text-white hover:text-white'>EasyLease</a>
                <div className='flex space-x-4'>
                    <a href='/tennant' className='text-white hover:text-white'>Tennant</a>
                    <a href='/landlord' className='text-white hover:text-white'>Landlord</a>
                    <a href='/listings' className='text-white hover:text-white'>Listings</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar