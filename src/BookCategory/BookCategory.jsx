import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const BookCategory = ({category}) => {
    return (
        <div v className='container mx-auto px-8'>
            <SectionTitle title={category}/>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Publication</th>
        <th>Books We have</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>500</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>500</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>500</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default BookCategory;