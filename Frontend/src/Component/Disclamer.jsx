import React from 'react'



export const Disclamer = (props) => {
  return(
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
    {/* Header Section */}
    <section className="text-center py-8">
      <h1 className="text-5xl font-bold text-gray-800">Terms And Conditions</h1>
      <p className="mt-4 text-xl text-gray-600">
        The following disclaimer applies to the website and services provided by <span className="font-semibold">Goal Achievers</span>.
      </p>
    </section>

    {/* Disclaimer Content */}
    <section className="mt-12 space-y-8 text-gray-700">
      {/* Company Info */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Company Information</h2>
        <p className="mt-4 text-lg">
        Bookstore  (“us”, “we”, or “our”) operates the <strong>https://bookstore-frontend-final.onrender.com/</strong> website (the “Service”).
        </p>
      </div>

      {/* Earnings Disclaimer */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Earnings Disclaimer</h2>
        <p className="mt-4 text-lg font-semibold text-red-600">
          ANY EARNINGS, RESULTS OR INCOME STATEMENTS, OR EARNINGS, RESULTS OR INCOME EXAMPLES, ARE ONLY ESTIMATES OF WHAT WE THINK YOU COULD EARN OR ACHIEVE. THERE IS NO ASSURANCE YOU'LL DO AS WELL. IF YOU RELY UPON OUR FIGURES, YOU MUST ACCEPT THE RISK OF NOT DOING AS WELL.
        </p>
        <p>
          WHERE SPECIFIC INCOME FIGURES ARE USED, AND ATTRIBUTED TO AN INDIVIDUAL OR BUSINESS, THOSE PERSONS OR BUSINESSES HAVE EARNED THAT AMOUNT. THERE IS NO ASSURANCE YOU'LL DO AS WELL. IF YOU RELY UPON OUR FIGURES; YOU MUST ACCEPT THE RISK OF NOT DOING AS WELL.
        </p>
      </div>

      {/* Income Claims */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Income Claims</h2>
        <p className="mt-4 text-lg font-semibold text-red-600">
          ANY AND ALL CLAIMS OR REPRESENTATIONS, AS TO INCOME EARNINGS ON THIS WEBSITE, ARE NOT TO BE CONSIDERED AS AVERAGE EARNINGS. TESTIMONIALS ARE NOT REPRESENTATIVE.
        </p>
        <p>
          THERE CAN BE NO ASSURANCE THAT ANY PRIOR SUCCESSES, OR PAST RESULTS, AS TO INCOME EARNINGS, CAN BE USED AS AN INDICATION OF YOUR FUTURE SUCCESS OR RESULTS.
        </p>
      </div>

      {/* Business Decisions Disclaimer */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Business Decisions</h2>
        <p>
          MONETARY AND INCOME RESULTS ARE BASED ON MANY FACTORS. WE HAVE NO WAY OF KNOWING HOW WELL YOU WILL DO, AS WE DO NOT KNOW YOU, YOUR BACKGROUND, YOUR WORK ETHIC, OR YOUR BUSINESS SKILLS OR PRACTICES. THEREFORE WE DO NOT GUARANTEE OR IMPLY THAT YOU WILL WIN ANY INCENTIVES OR PRIZES THAT MAY BE OFFERED, GET RICH, THAT YOU WILL DO AS WELL, OR MAKE ANY MONEY AT ALL. THERE IS NO ASSURANCE YOU’LL DO AS WELL. IF YOU RELY UPON OUR FIGURES; YOU MUST ACCEPT THE RISK OF NOT DOING AS WELL.
        </p>
        <p>
          INTERNET BUSINESSES AND EARNINGS DERIVED THEREFROM, HAVE UNKNOWN RISKS INVOLVED, AND ARE NOT SUITABLE FOR EVERYONE. MAKING DECISIONS BASED ON ANY INFORMATION PRESENTED IN OUR PRODUCTS, SERVICES, OR WEBSITE, SHOULD BE DONE ONLY WITH THE KNOWLEDGE THAT YOU COULD EXPERIENCE SIGNIFICANT LOSSES, OR MAKE NO MONEY AT ALL. ONLY RISK CAPITAL SHOULD BE USED.
        </p>
      </div>

      {/* Educational & Informational Disclaimer */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Educational and Informational Purpose</h2>
        <p className="mt-4 text-lg font-semibold text-blue-600">
          ALL PRODUCTS AND SERVICES BY OUR COMPANY ARE FOR EDUCATIONAL AND INFORMATIONAL PURPOSES ONLY. USE CAUTION AND SEEK THE ADVICE OF QUALIFIED PROFESSIONALS. CHECK WITH YOUR ACCOUNTANT, LAWYER OR PROFESSIONAL ADVISOR, BEFORE ACTING ON THIS OR ANY INFORMATION.
        </p>
        <p>
          USERS OF OUR PRODUCTS, SERVICES AND WEBSITE ARE ADVISED TO DO THEIR OWN DUE DILIGENCE WHEN IT COMES TO MAKING BUSINESS DECISIONS AND ALL INFORMATION, PRODUCTS, AND SERVICES THAT HAVE BEEN PROVIDED SHOULD BE INDEPENDENTLY VERIFIED BY YOUR OWN QUALIFIED PROFESSIONALS. OUR INFORMATION, PRODUCTS, AND SERVICES ON THIS WEBSITE SHOULD BE CAREFULLY CONSIDERED AND EVALUATED, BEFORE REACHING A BUSINESS DECISION, ON WHETHER TO RELY ON THEM. ALL DISCLOSURES AND DISCLAIMERS MADE HEREIN OR ON OUR SITE, APPLY EQUALLY TO ANY OFFERS, PRIZES, OR INCENTIVES, THAT MAY BE MADE BY OUR COMPANY.
        </p>
      </div>

      {/* Responsibility Disclaimer */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Responsibility Disclaimer</h2>
        <p>
          YOU AGREE THAT OUR COMPANY IS NOT RESPONSIBLE FOR THE SUCCESS OR FAILURE OF YOUR BUSINESS DECISIONS RELATING TO ANY INFORMATION PRESENTED BY OUR COMPANY, OR OUR COMPANY PRODUCTS OR SERVICES.
        </p>
      </div>
    </section>

    {/* Footer Section */}
    <section className="text-center mt-12 py-6 bg-gray-100">
      <p className="text-lg text-gray-700">
        For any inquiries or more information, feel free to <a href="mailto:mdnomankaif55@gmail.com" className="text-green-600 font-semibold">contact us</a>.
      </p>
    </section>
  </div>
   )

 }