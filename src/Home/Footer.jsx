import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        {/* Logo and Description */}
        <div>
          <img src="https://vyaparwebsiteimages.vypcdn.in/logo1.svg" alt="Vyapar Logo" className="mb-4" />
          <p className="text-sm">
            Billing Accounting & Inventory software for small business owners in India
          </p>
        </div>

        {/* Vyapar Web Applications (Tools) */}
        <div>
          <h3 className="font-bold mb-4">Vyapar Web Applications (Tools)</h3>
          <ul className="text-sm space-y-2">
            <li>Logo Maker</li>
            <li>GST Calculator</li>
            <li>Invoice Generator</li>
            <li>Quotation Maker</li>
            <li>Proforma Invoice Generator</li>
            <li>Purchase Order Generator</li>
            <li>Receipt Maker</li>
            <li>Depreciation Calculator</li>
            <li>Straight Line Depreciation Calculator</li>
            <li>QR Code Generator</li>
            <li>Online Barcode Generator</li>
            <li>QR code scanner from Image</li>
            <li>Online QR code scanner Camera</li>
            <li>Business Card Maker</li>
            <li>Online Barcode Scanner</li>
          </ul>
        </div>

        {/* Vyapar Formats */}
        <div>
          <h3 className="font-bold mb-4">Vyapar Formats</h3>
          <ul className="text-sm space-y-2">
            <li>Invoice Formats</li>
            <li>Quotation Format</li>
            <li>Balance Sheet Formats</li>
            <li>BillBook Formats</li>
            <li>Receipt Formats</li>
            <li>Credit Note Formats</li>
            <li>Debit Note Formats</li>
            <li>Sales Report Format</li>
            <li>Estimate Format</li>
            <li>Delivery Challan Format</li>
            <li>Cash Flow Statement Format</li>
            <li>Voucher Formats</li>
            <li>Work Order Format</li>
            <li>Reconciliation Format</li>
            <li>Bill of Exchange</li>
            <li>Income statement</li>
          </ul>
        </div>

        {/* Vyapar Software */}
        <div>
          <h3 className="font-bold mb-4">Vyapar Software</h3>
          <ul className="text-sm space-y-2">
            <li>Billing Software</li>
            <li>Accounting Software</li>
            <li>Inventory Software</li>
            <li>Invoicing Software</li>
            <li>Business Management Software</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-4">Contact Info</h3>
          <p className="text-sm">Address</p>
          <p className="text-sm mb-4">
            24th I,2 & 3rd Floor, 150/2 Enzyme Diamond<br />
            7th Cross Road, Sector 1, HSR Layout<br />
            Bengaluru, Karnataka, 560102
          </p>
          <p className="text-sm">Phone</p>
          <p className="text-sm mb-4">
            +91-9333-911-911<br />
            +91-6366-827-420
          </p>
          <p className="text-sm">9:00AM - 9:00PM(Monday to Saturday)</p>
          <p className="text-sm mb-4">10:00AM - 7:00PM(Sunday)</p>
          <p className="text-sm">Email</p>
          <p className="text-sm">Support<br />help@vyaparapp.in</p>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>GST Registration Number : 29AAZCS9478E1Z7</p>
          <p>Udyam Registration Number : UDYAM-KR-03-0219719</p>
        </div>
        <div className="flex space-x-4 mt-4 gap-32 ml-32">
          <a href="#" className="text-gray-500 hover:text-white">Terms and Conditions</a>
          <p className="text-center">Copyright © 2024 Simply Vyapar Apps Pvt. Ltd.™</p>
        </div>
        <div className="container mx-auto px-4 mt-4 flex justify-between items-center">
        
          <div className="flex space-x-4 ">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
