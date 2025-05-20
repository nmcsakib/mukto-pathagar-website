import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const BookCategory = ({category, publicationData, writersDB}) => {
  console.log(category, writersDB);
    return (
        <div v className='container mx-auto px-8 h-screen'>
            <SectionTitle title={category}/>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>{category}</th>
        <th>Books We have</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        category == "Publications" ?

       ( publicationData.map((publication, i) => <>
        
      <tr>
        <th>{i+1}</th>
        <td>{publication.publication}</td>
        <td>{publication.totalBooks}</td>
        <td><button className="btn btn-sm">See All Books</button></td>
      </tr>
        </>))
        : 
         (writersDB.map((writer, i) => <>
        
      <tr>
        <th>{i+1}</th>
        <td>{writer.writer}</td>
        <td>{writer.totalBooks}</td>
        <td><button className="btn btn-sm">See All Books</button></td>
      </tr>
        </>))
      }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default BookCategory;