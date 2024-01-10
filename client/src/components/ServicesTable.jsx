import React, { useState } from 'react';
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';

function ServicesTable() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    { id: 1, name: 'Bath and blow-dry', packages: [true, false, false, false] },
    { id: 2, name: 'Brushing and coat maintenance', packages: [true, false, false, false] },
    { id: 3, name: 'Nail trimming', packages: [true, true, false, false] },
    { id: 4, name: 'Ear cleaning', packages: [true, false, false, false] },
    { id: 5, name: 'Premium shampoo and conditioner', packages: [false, true, false, false] },
    { id: 6, name: 'Teeth brushing', packages: [false, true, true, false] },
    { id: 7, name: 'Aromatherapy spa treatment', packages: [false, true, false, true] },
    { id: 8, name: 'Haircut and styling', packages: [false, false, true, false] },
    { id: 9, name: 'Deep coat conditioning', packages: [false, false, true, false] },
    { id: 10, name: 'Anal gland expression', packages: [false, false, true, false] },
    { id: 11, name: 'Therapeutic massage', packages: [false, false, false, true] },
    { id: 12, name: 'Gentle brushing and detangling', packages: [false, false, false, true] },
    { id: 13, name: 'Relaxing music in the spa environment', packages: [false, false, false, true] }
  ];

  const renderIcon = (included) => {
    return included ? <CheckCircleIcon className="h-6 w-6 text-green-500" /> : <XCircleIcon className="h-6 w-6 text-red-500" />;
  };

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
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
          {services.map(service => (
            <React.Fragment key={service.id}>
              <tr className={`hover:bg-gray-50 cursor-pointer ${service.id % 2 === 0 ? 'bg-gray-100' : ''}`}
                  onClick={() => toggleService(service.id)}>
                <td className="p-4 border-b">{service.name}</td>
                {service.packages.map((included, index) => (
                  <td key={index} className="p-4 border-b">{renderIcon(included)}</td>
                ))}
              </tr>
              {expandedService === service.id && (
                <tr>
                  <td colSpan="5" className="p-4 border-b">
                    {/* Add more details or custom components for the expanded service here */}
                    Detailed information about {service.name}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServicesTable;