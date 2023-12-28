const Faqsection = () => {
  const faqs = [
    {
      question: "Can you import my data?",
      answer:
        "Yes, we can import client and pet data, we just need it in a friendly layout, contact us for more help on this.",
    },
  ];

  return (
    <>
    <div className="bg-info p-20">
      <div className="">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <details className="p-4 bg-white shadow rounded-lg group">
                <summary className="text-lg font-medium cursor-pointer">
                  {faq.question}
                  <span className="float-right mt-1">
                    <i className="fas fa-chevron-down transition-transform duration-300 group-open:rotate-180"></i>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
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
