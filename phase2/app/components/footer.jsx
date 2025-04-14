/*
  Author: Ronray 
  Date: April 13
  Program: Footer

  This component creates the footer section for the page. It includes a copyright notice with the current year, displaying the company’s name and that all rights are reserved. 
  Below the copyright, it provides links to important pages like Privacy Policy, Terms, and Contact. 
  The layout is responsive, with the content stacking vertically on smaller screens and arranging horizontally on larger screens for a clean, organized look. 
  The design ensures the footer is easy to navigate, no matter what device the user is on.
*/

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 Better Buy. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
