import React from "react";

function DematAMC() {
  return (
    <div className="pricing-section container mt-5 mb-5">

      <h3 className="pricing-heading">
        Demat AMC (Annual Maintenance Charge)
      </h3>

      <div className="pricing-table-box mt-3">
        <table className="table pricing-table">

          <thead>
            <tr>
              <th>Value of holdings</th>
              <th className="text-end">AMC</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td className="text-end">
                <span className="badge-free">FREE*</span>
              </td>
            </tr>

            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td className="text-end">
                ₹ 100 per year, charged quarterly*
              </td>
            </tr>

            <tr>
              <td>Above ₹10 lakh</td>
              <td className="text-end">
                ₹ 300 per year, charged quarterly
              </td>
            </tr>
          </tbody>

        </table>
      </div>

      {/* Note */}
      <p className="pricing-note mt-3">
        * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).  
        BSDA account holders cannot hold more than one demat account.
      </p>

    </div>
  );
}

export default DematAMC;