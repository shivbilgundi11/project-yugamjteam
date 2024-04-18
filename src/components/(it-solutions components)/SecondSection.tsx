import React from 'react';

const SecondSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Bespoke Software Development Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Custom Software Development</h2>
        <p className="text-lg mb-6">
          We design and develop bespoke software solutions to address your unique business challenges, from concept to deployment.
        </p>
        <ul className="list-disc ml-6">
          <li>Comprehensive Requirement Analysis</li>
          <li>Custom Design and Development</li>
          <li>Rigorous Testing and Quality Assurance</li>
          <li>Seamless Deployment and Integration</li>
          <li>Ongoing Maintenance and Support</li>
        </ul>
      </section>

      {/* Software Integration Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Software Integration</h2>
        <p className="text-lg mb-6">
          Streamline your workflows and enhance productivity by seamlessly integrating disparate systems and applications.
        </p>
        <ul className="list-disc ml-6">
          <li>Seamless Integration with Existing Systems</li>
          <li>Data Synchronization and Interoperability</li>
          <li>Custom API Development</li>
          <li>Real-time Data Exchange</li>
          <li>Scalable and Future-proof Solutions</li>
        </ul>
      </section>

      {/* Software Maintenance and Support Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Software Maintenance and Support</h2>
        <p className="text-lg mb-6">
          Our dedicated support team ensures your software runs smoothly with timely updates, bug fixes, and performance optimization.
        </p>
        <ul className="list-disc ml-6">
          <li>Proactive Monitoring and Maintenance</li>
          <li>Timely Bug Fixes and Updates</li>
          <li>Performance Optimization</li>
          <li>Security Patches and Vulnerability Management</li>
          <li>Dedicated Customer Support</li>
        </ul>
      </section>

      {/* Software Consulting Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Software Consulting</h2>
        <p className="text-lg mb-6">
          Gain strategic insights and actionable recommendations to achieve your business objectives with our expert consulting services.
        </p>
        <ul className="list-disc ml-6">
          <li>Technology Assessments and Audits</li>
          <li>Architecture Design and Planning</li>
          <li>Feasibility Studies and Proof of Concepts</li>
          <li>Project Management and Risk Mitigation</li>
          <li>Strategic Technology Roadmaps</li>
        </ul>
      </section>

      {/* Proprietary Software Products Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Proprietary Software Products</h2>
        <p className="text-lg mb-6">
          At YugAmjTeam, we're not just focused on solving business challenges – we're dedicated to making a positive impact across various domains.
        </p>
        <ul className="list-disc ml-6">
          <li>Versatile Solutions</li>
          <li>Social Impact</li>
          <li>Accessibility</li>
          <li>Community Engagement</li>
        </ul>
      </section>
    </div>
  );
};

export default SecondSection;