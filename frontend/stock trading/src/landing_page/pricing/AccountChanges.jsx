import React from "react";

function AccountCharges() {
  return (
    <div className="pricing-section container mt-5 mb-5">

      <h3 className="pricing-heading">
        Charges for account opening
      </h3>

      <div className="pricing-table-box mt-3">
        <table className="table pricing-table">
          
          <thead>
            <tr>
              <th>Type of account</th>
              <th className="text-end">Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Online account</td>
              <td className="text-end">
                <span className="badge-free">FREE</span>
              </td>
            </tr>

            <tr>
              <td>Offline account</td>
              <td className="text-end">
                <span className="badge-free">FREE</span>
              </td>
            </tr>

            <tr>
              <td>NRI account (offline only)</td>
              <td className="text-end">₹ 500</td>
            </tr>

            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td className="text-end">₹ 500</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default AccountCharges;