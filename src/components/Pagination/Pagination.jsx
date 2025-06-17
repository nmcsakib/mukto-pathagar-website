
const Pagination = ({length, page, setPage}) => {
    // console.log(length);
   

    const paginationTotalPages = Math.ceil(length / 8);

    console.log(paginationTotalPages, (page -1) * 8, ((page -1) * 8 +8));

    const handlePreviousPagination = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        }
    };

    const handleNextPagination = () => {
        if (page < paginationTotalPages) {
           
            setPage((prev) => prev + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
       
        setPage(pageNumber);
    };



    const renderPageNumbersForPagination = () => {
        const pageNumbers = [];
        const startPage = Math.max(2, page - 1);
        const endPage = Math.min(
            paginationTotalPages - 1,
            page + 1
        );

        pageNumbers.push(
            <PageButton
                key={1}
                pageNumber={1}
                isActive={page === 1}
                onClick={handlePageClick}
            />
        );

        if (startPage > 2) {
            pageNumbers.push(
                <span key="start-dots" className="mx-1 px-2 dark:text-[#abc2d3] text-gray-500">
          ...
        </span>
            );
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <PageButton
                    key={i}
                    pageNumber={i}
                    isActive={page === i}
                    onClick={handlePageClick}
                />
            );
        }

        if (endPage < paginationTotalPages - 1) {
            pageNumbers.push(
                <span key="end-dots" className="mx-1 px-2 dark:text-[#abc2d3] text-gray-500">
          ...
        </span>
            );
        }

        pageNumbers.push(
            <PageButton
                key={paginationTotalPages}
                pageNumber={paginationTotalPages}
                isActive={page === paginationTotalPages}
                onClick={handlePageClick}
            />
        );

        return pageNumbers;
    };

    return (
        <div
            className="flex flex-col md:flex-row justify-center items-center w-full mx-auto pt-10 gap-3">

            <button
                onClick={handlePreviousPagination}
                disabled={page === 1}
                className={`px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors duration-300 ${
                    page === 1
                        ? "bg-gray-200 !text-gray-400 cursor-not-allowed"
                        : "cursor-pointer"
                }`}
            >
                Previous
            </button>
            <div className="flex gap-[5px] sm:gap-[8px]">
                {renderPageNumbersForPagination()}
            </div>
            <button
                onClick={handleNextPagination}
                disabled={page === paginationTotalPages}
                className={`px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors duration-300 ${
                    page === paginationTotalPages
                        ? "bg-gray-200 !text-gray-400 cursor-not-allowed"
                        : "cursor-pointer"
                }`}
            >
                Next
            </button>

        </div>
    );
};

export default Pagination;

export const PageButton = ({ pageNumber, isActive, onClick }) => (
    <button
        onClick={() => onClick(pageNumber)}
        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
            isActive
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-300 text-gray-600  dark:text-[#616161] hover:bg-green-500 hover:text-white"
        }`}
    >
        {pageNumber}
    </button>
);
                    