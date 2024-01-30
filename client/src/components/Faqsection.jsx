import React from 'react';


const Faqsection = () => {
  const faqs = [
    {
      question: "What services does BarkNBath offer?",
      answer:
        "BarkNBath offers a variety of pet grooming services including Premium Bath, Ultimate Paw Care, Doggy Haircut, Breed Standard styling, The Works package, and Doggy Dental Brushing. Each service is tailored to meet the specific grooming needs of your pet.",
    },
    {
      question: "How do I book a spa appointment through the app?",
      answer:
        "To book a spa appointment through the BarkNBath app, first create an account, then add your pet's details. Next, choose a service and a preferred location, and finally book your appointment.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "9h to 17h",
    },
    {
      question: "How long does a typical spa session last?",
      answer:
        "1 hour",
    },
    {
      question: "How can I provide feedback about my experience?",
      answer:
        "You can create a blog for your furry friend after booking an appointment, to share your experience with our other beloved dog owners",
    },
    {
      question: "What are the qualifications of your pet groomers?",
      answer:
        "All our groomers are professionally trained and certified, ensuring top-quality care and expertise in handling different breeds and grooming needs.",
    },
    {
      question: "Are your services allergy-friendly and customizable?",
      answer:
        "es, our services at BarkNBath are allergy-friendly and fully customizable. We use hypoallergenic grooming products and offer a range of options to cater to pets with specific allergies or sensitivities. You can specify any special requirements when booking your appointment.",
    },
    {
      question: "What is the policy for handling late arrivals or no-shows?",
      answer:
        "Our policy for late arrivals is to accommodate them within a 15-minute grace period, after which the appointment may need to be rescheduled. For no-shows, a fee may be charged, and frequent no-shows could lead to restrictions on future bookings. We encourage clients to notify us as soon as possible if they cannot make their appointment.",
    },
  ];

  return (
    <>
    <div className="bg-white p-20">
      <div className="">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <details className="p-4 bg-primary/60 shadow rounded-lg group">
                <summary className="text-lg font-medium cursor-pointer">
                  {faq.question}
                  <span className="float-right mt-1">
                    <i className="fas fa-chevron-down transition-transform duration-300 group-open:rotate-180"></i>
                  </span>
                </summary>
                <p className="mt-4 text-black font-bold">
                  {faq.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>

      </>
  );
};

export default Faqsection;
