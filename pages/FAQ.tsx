import Navbar from "@/components/Navbar"
const faqs = [
    {
      id: 1,
      question: "What kind of power outlets are used in Taniti?",
      answer:
        "Taniti uses 120-volt power outlets, the same as the United States.",
    },
    {
      id: 2,
      question: "Are there restrictions on when alcohol can be bought or consumed? ",
      answer:
        "Yes, alcohol cannot be served or sold between midnight and 9:00 a.m.",
    },
    {
      id: 3,
      question: "What is the legal drinking age in Taniti?",
      answer:
        "The legal drinking age is 18, but it may not be strictly enforced..",
    },
    {
      id: 4,
      question: "Do people in Taniti speak English?       ",
      answer:
        "Many younger people in Taniti speak fluent English. However, in rural areas, especially among older residents, very little English is spoken.",
    },
    {
      id: 5,
      question: "What kind of medical facilities are available in Taniti?       ",
      answer:
        "Taniti has one hospital and several clinics. Many employees at the hospital are multilingual",
    },
    {
      id: 6,
      question: "Is Taniti a safe place to visit? ",
      answer:
        "Taniti is generally safe, with very little violent crime. However, with increased tourism, there are more reports of pickpocketing and petty theft.",
    },
    {
      id: 7,
      question: "Does Taniti have many national holidays?",
      answer:
        "Yes, Taniti has a large number of national holidays. Many restaurants and tourist attractions will be closed on these days, so plan your trip accordingly.",
    },
    {
      id: 8,
      question: "What currency does Taniti use?",
      answer:
        "Taniti uses the U.S. dollar.",
    },
    {
      id: 9,
      question: "Can I use other currencies or credit cards? ",
      answer:
        "Many businesses will also accept euros and yen. There are several banks where you can exchange currency, and major credit cards are widely accepted.",
    },
  ]
  
  export default function FAQ() {
    return (
      <div className="bg-white">
                <Navbar/>

        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  