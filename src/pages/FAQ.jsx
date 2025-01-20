import '../styles/faq.css'

function FAQ() {
  return (
    <div className="container-faq container my-5">
      <h2 className="text-faq text-center mb-5">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {/* Question 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What services do you offer?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              We offer tax preparation, tax filing, and financial consulting services to help you manage your finances effectively.
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How much do your services cost?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Our pricing depends on the type of service. Contact us for a free consultation and a personalized quote.
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How can I get started?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Getting started is easy! Just fill out our contact form or give us a call, and we’ll guide you through the process.
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              What is the difference between a W-2 and a 1099?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              A W-2 form is given to employees and reports wages, tips, and other compensation. A 1099 is used to report income from self-employment, freelance work, or other sources of income outside traditional employment.
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Do I need to file a tax return?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
            You are required to file a tax return if your income exceeds the standard deduction for your filing status or if you owe special taxes, such as self-employment tax.
            </div>
          </div>
        </div>

        {/* Question 6 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              What is the standard deduction?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
            The standard deduction is a fixed dollar amount that reduces the income you are taxed on. The amount varies depending on your filing status (e.g., single, married, head of household).
            </div>
          </div>
        </div>

        {/* Question 7 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              What is the difference between a tax credit and a tax deduction?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
            A tax credit directly reduces the amount of tax you owe, while a tax deduction reduces the amount of income that is subject to tax.
            </div>
          </div>
        </div>

        {/* Question 8 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              When are taxes due?
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
            Taxes are typically due by April 15 of the following year. However, if that day falls on a weekend or holiday, the deadline may be extended.
            </div>
          </div>
        </div>

        {/* Question 9 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              Can I deduct student loan interest?
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
            Yes, you may be able to deduct up to $2,500 in student loan interest, depending on your income and filing status.
            </div>
          </div>
        </div>

        {/* Question 10 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              What are estimated taxes?
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
            If you’re self-employed or have other income not subject to withholding, you may need to make quarterly estimated tax payments to avoid penalties.
            </div>
          </div>
        </div>

        {/* Question 11 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEleven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
              aria-expanded="false"
              aria-controls="collapseEleven"
            >
              Is Pack Tax Services affiliated with Jackson Wealth Management?
            </button>
          </h2>
          <div
            id="collapseEleven"
            className="accordion-collapse collapse"
            aria-labelledby="headingEleven"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
            No, Pack Tax Services is not affiliated with Jackson Wealth Management (JWM) in any way. If you are a JWM client or prospect, these services are not available to you. Please contact JWM directly for assistance.
            </div>
          </div>
        </div>

        <div className='spacing-faq-bottom'></div>

      </div>
    </div>
  );
}

export default FAQ;
