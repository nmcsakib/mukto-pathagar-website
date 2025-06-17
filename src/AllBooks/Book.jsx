const Book = ({book}) => {

    return (
        <div className="w-full border rounded-md min-h-[450px]">
           
            <img
                src={ !book?.picture ? 'https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png' : book?.picture }
                alt={book?.bookName}
                className="w-full h-[250px]"
            />

            <div className="px-4">
                <p className="text-[1rem]"></p>

                <div className=" w-full">
                <div className="flex items-center gap-[5px] justify-between w-full py-3">
                    <p
                        className="rounded-xl p-1 text-xs bg-green-300 text-black cursor-pointer">{book?.type}</p>
                     <p
                        className="rounded-xl p-1 text-xs bg-red-300 text-black cursor-pointer">{book?.pages} pages</p>
                </div>
                <h2 className="text-2xl font-semibold">{book?.bookName}</h2>
                  <p className="text-sm py-3">লেখক: {book?.writer}</p>
                  <p className="text-sm">প্রকাশনী: {book?.publications}</p>
                 
                </div>
            </div>

        </div>
    );
};

export default Book;
                    