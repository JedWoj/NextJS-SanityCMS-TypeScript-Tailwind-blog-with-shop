const Pagination = ({ page, setPage, quantity }: { page: number, setPage: (page: number) => void, quantity: number }) => {

    const pageHandler = (type: string) => {
        type === '+' ? setPage(page + 1) : setPage(page - 1);
    }

    return (
        <section className='flex text-white text-lg m-6'>
            {page > 0 && <div onClick={pageHandler.bind(null, '-')} className='gradient rounded px-4 py-2 xl:w-1/12 text-center cursor-pointer mr-auto'>
                Previous
            </div>}
            {page < (quantity / 6) - 1 && <div onClick={pageHandler.bind(null, '+')} className='gradient rounded px-4 py-2 w-1/6 xl:w-1/12 text-center cursor-pointer ml-auto'>
                Next
            </div>}
        </section>
    )
}

export default Pagination;