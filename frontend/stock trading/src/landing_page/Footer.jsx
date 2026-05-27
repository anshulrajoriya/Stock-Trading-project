import React from 'react';

function Footer() {
  return (
    <footer   style={{ backgroundColor: "rgb(240,240,240)" }}
>
<div 
  className="container mt-5 border-top" 
>
      <div className="row mb-5 mt-3">

        {/* Logo Section */}
        <div className="col-4">
          <img src="media/imges/logo.svg" style={{ width: "150px" }} />
          <p className="text-muted mt-2">
            © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
          </p>
        </div>

        {/* Company */}
        <div className="col-2">
          <p className="fw-bold fs-5 text-dark mb-3">Company</p>

          <a href="#" className="d-block mb-2 text-muted">About</a>
          <a href="#" className="d-block mb-2 text-muted">Product</a>
          <a href="#" className="d-block mb-2 text-muted">Pricing</a>
          <a href="#" className="d-block mb-2 text-muted">Referral program</a>
          <a href="#" className="d-block mb-2 text-muted">Careers</a>
          <a href="#" className="d-block mb-2 text-muted">Zerodha.tech</a>
          <a href="#" className="d-block mb-2 text-muted">Press & media</a>
          <a href="#" className="d-block mb-2 text-muted">Zerodha cares (CSR)</a>
        </div>

        {/* Account */}
        <div className="col-2">
          <p className="fw-bold fs-5 text-dark mb-3">Account</p>

          <a href="#" className="d-block mb-2 text-muted">Contact</a>
          <a href="#" className="d-block mb-2 text-muted">Support portal</a>
          <a href="#" className="d-block mb-2 text-muted">Z-Connect blog</a>
          <a href="#" className="d-block mb-2 text-muted">List of changes</a>
          <a href="#" className="d-block mb-2 text-muted">Downloads & resources</a>
        </div>

        {/* Support */}
        <div className="col-2">
          <p className="fw-bold fs-5 text-dark mb-3">Support</p>

          <a href="#" className="d-block mb-2 text-muted">Open an account</a>
          <a href="#" className="d-block mb-2 text-muted">Fund transfer</a>
          <a href="#" className="d-block mb-2 text-muted">60 days challenge</a>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
<p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

<p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

<p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

<p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

<p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

<p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

<p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

<p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI)</p>
     

      </div>

    </div>
    </footer>
  );
}

export default Footer;




