import React from 'react'


export const Refund = (props) => {
  return(
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Refund & Cancellation Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">We are ready to give you the best</h2>
        <p className="text-lg mt-4">
          We understand that sometimes, plans change. If you can no longer make it to the class, please email us in advance at{' '}
          <a href="mdnomankaif55@gmail.com" className="text-blue-600 hover:underline">
          mdnomankaif55@gmail.com
          </a>. Refunds will be made as per the policies mentioned below. We strive to maintain the highest standards of quality and, as with everything we do at Mission1Success, you get a 100% Satisfaction Guarantee.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">POLICY A</h2>
        <p className="text-xl mt-4">Policy A applies to all Mission1Success courses under the categories of Digital Marketing, Data Science, Python.</p>

        <h3 className="text-xl font-semibold mt-6">Cancellations prior to the course</h3>
        <p>If you’re unable to attend the course and want a refund prior to the course commencement date, we will refund the full amount to you.</p>

        <h3 className="text-xl font-semibold mt-6">Withdrawals during the Course</h3>
        <p>If you don’t see the tremendous value you expected in our product and wish to withdraw within the first 2 classes, we will proceed with a 100% refund – no questions asked. However, once you have attended more than 2 days of the course, you will not be eligible for any refund.</p>

        <h3 className="text-xl font-semibold mt-6">No Admission transfer from one learner to the other</h3>
        <p>No transfers will be allowed from one learner to another.</p>

        <h3 className="text-xl font-semibold mt-6">Transfers to another batch</h3>
        <p>You are free to change your batch at any time before the commencement of the course, at no extra charge. If for any reason you are unable to continue or complete the course, we would be happy to accommodate you in a different batch of the same course, at no additional cost.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">POLICY B</h2>
        <p className="text-xl mt-4">Policy B applies to all Self-Paced Programs (E-Learning Programs) of Mission1Success. Cancellations would be permitted as per the following terms:</p>

        <h3 className="text-xl font-semibold mt-6">Extension of E-Learning Programs</h3>
        <p>If you wish to extend access to an e-learning program by a month, please write to us at{' '}
          <a href="mdnomankaif55@gmail.com" className="text-blue-600 hover:underline">
          mdnomankaif55@gmail.com
          </a>, and we will be happy to extend the program for a maximum period of one month. For extensions beyond a month, you would need to pay 50% of the course price.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">NOTE:</h2>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li>All cancellation, rescheduling, and substitution requests must be notified to us by email at{' '}
            <a href="mdnomankaif55@gmail.com" className="text-blue-600 hover:underline">
            mdnomankaif55@gmail.com
            </a>.
          </li>
          <li>You are not eligible for refunds if you have accessed and downloaded the course material.</li>
          <li>All refunds will be credited back to your account within 10-15 business days of the refund request.</li>
          <li>Refunds or credits for rescheduling the training cannot be issued for non-attendance.</li>
          <li>Mission1Success may modify its refund policy at any time without notice, provided however that the refund policy in effect at the time of any transaction shall apply to such purchase despite any subsequent change in such policy.</li>
          <li>If you do not notify us in writing about your cancellation or reschedule, or do not attend the training, you would not be offered a refund nor the option to reschedule.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Cancellations or Rescheduling by Digital Nest</h2>
        <p>Mission1Success reserves the right to cancel or reschedule a course at any time, including but not limited to insufficient registrations, trainer unavailability, or if the trainer could not attend due to unforeseen circumstances.</p>
        <p>Mission1Success is not liable for any direct, indirect, consequential, or special damages that may be incurred due to a cancellation of a scheduled class.</p>
      </section>
    </div>
   )

 }