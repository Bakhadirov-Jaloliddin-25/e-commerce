const AboutPage = () => {
  return (
    <div className="container mx-auto p-6 lg:px-32 mt-10 mb-20 font-poppins">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-center text-gray-400 mb-12">
        We are passionate about delivering high-quality services and building
        meaningful connections with our customers.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Content */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            Our company was founded with a vision to revolutionize the way
            businesses interact with technology. We strive to provide innovative
            solutions that empower our clients to reach their goals seamlessly.
          </p>
        </div>

        {/* Right Content */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to deliver world-class services that foster growth,
            collaboration, and success. With a team of experts, we are dedicated
            to exceeding expectations and creating impactful solutions.
          </p>
        </div>
      </div>

      <div className="bg-black mt-12 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>Expert team with years of experience</li>
          <li>Commitment to innovation and excellence</li>
          <li>Customer-centric approach with tailored solutions</li>
          <li>Proven track record of delivering successful projects</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
