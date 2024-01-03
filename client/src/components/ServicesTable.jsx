import React from 'react'
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';


function ServicesTable() {

    const YesIcon = () => (
        <CheckCircleIcon className="h-6 w-6 text-green-500" />
      );
    
      const NoIcon = () => (
        <XCircleIcon className="h-6 w-6 text-red-500" />
      );
    
      const renderIcon = (included) => {
        return included ? <YesIcon /> : <NoIcon />;
      };
    

  return (
    <div className="max-w-screen-lg mx-auto my-8 overflow-x-auto">
      <table className="min-w-full text-center border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 border-b-2 font-semibold uppercase tracking-wider">Services</th>
            <th className="p-4 border-b-2 font-semibold uppercase tracking-wider">Basic Grooming Package<br/>($50)</th>
            <th className="p-4 border-b-2 font-semibold uppercase tracking-wider">Luxury Spa Retreat<br/>($75)</th>
            <th className="p-4 border-b-2 font-semibold uppercase tracking-wider">Full Grooming Makeover<br/>($100)</th>
            <th className="p-4 border-b-2 font-semibold uppercase tracking-wider">Wellness & Relaxation<br/>Package ($85)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="p-4 border-b">Bath and blow-dry</td>
            <td className="p-4 border-b">{renderIcon(true)}</td>
            <td className="p-4 border-b">{renderIcon(false)}</td>
            <td className="p-4 border-b">{renderIcon(false)}</td>
            <td className="p-4 border-b">{renderIcon(false)}</td>
          </tr>
          <tr className="hover:bg-gray-50">
          <td className="p-4 border-b">Brushing and coat maintenance</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-4 border-b">Nail trimming</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-4 border-b">Ear cleaning</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-4 border-b">Premium shampoo and conditioner</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-4 border-b">Teeth brushing</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-4 border-b">Aromatherapy spa treatment</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-4 border-b">Haircut and styling</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-4 border-b">Deep coat conditioning</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
        </tr>
        <tr className="hover:bg-gray-50"> 
          <td className="p-4 border-b">Anal gland expression</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-4 border-b">Therapeutic massage</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-4 border-b">Gentle brushing and detangling</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-4 border-b">Relaxing music in the spa environment</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(false)}</td>
          <td className="p-4 border-b">{renderIcon(true)}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ServicesTable
