const Navbar = () => {
    return (
        <nav className='p-2 bg-yellow-500 w-full'>
            {/* Proper navbar in tailwind */}
            <div className='flex justify-between items-center'>
                <a href='/' className='text-2xl font-bold text-white hover:text-white'>EasyLease</a>
            </div>
        </nav>
    )
}

export default Navbar